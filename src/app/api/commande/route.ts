import { Resend } from "resend";
import { NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";

function escapeHtml(text: string): string {
    return text
        .replace(/&/g, '&')
        .replace(/</g, '<')
        .replace(/>/g, '>')
        .replace(/"/g, '"')
        .replace(/'/g, '&#x27;');
}

function getResend() {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        throw new Error("RESEND_API_KEY is not configured");
    }
    return new Resend(apiKey);
}

export async function POST(request: Request) {
    try {
        const { name, email, phone, eventType, date, guests, message } =
            await request.json();

        if (!name || !email || !phone || !eventType || !date || !message) {
            return NextResponse.json(
                { error: "Tous les champs requis doivent etre remplis." },
                { status: 400 }
            );
        }

        // Rate limiting
        const ip =
            request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
            request.headers.get("x-real-ip") ||
            "unknown";
        const rateLimit = checkRateLimit(ip);

        if (!rateLimit.allowed) {
            return NextResponse.json(
                { error: "Trop de requetes. Veuillez reessayer dans une minute." },
                {
                    status: 429,
                    headers: {
                        "Retry-After": String(Math.ceil(rateLimit.resetIn / 1000)),
                        "X-RateLimit-Remaining": "0",
                    },
                }
            );
        }

        const eventLabels: Record<string, string> = {
            mariage: "Mariage",
            anniversaire: "Anniversaire",
            entreprise: "Fete d'entreprise",
            bapteme: "Bapteme",
            noel: "Noel / Fetes",
            autre: "Autre",
        };

        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safePhone = escapeHtml(phone);
        const safeEventLabel = escapeHtml(eventLabels[eventType] || eventType);
        const safeDate = escapeHtml(date);
        const safeGuests = escapeHtml(guests || "Non specifie");
        const safeMessage = escapeHtml(message);

        const resend = getResend();
        const { data, error } = await resend.emails.send({
            from: "Commande Fournil <commande@lefournildemarie-nantes.fr>",
            to: ["bonjour@lefournildemarie-nantes.fr"],
            replyTo: email,
            subject: `[Commande Speciale] ${safeEventLabel}`,
            html: `
        <!DOCTYPE html>
        <html>
          <head><meta charset="utf-8"></head>
          <body style="font-family: 'Georgia', serif; color: #2c1810; background: #fdf8f0; padding: 2rem;">
            <div style="max-width: 600px; margin: 0 auto; background: white; padding: 2rem; border-left: 3px solid #e8c07a;">
              <h1 style="font-size: 1.5rem; color: #6b3f2a; margin-bottom: 1.5rem;">Nouvelle demande de commande speciale</h1>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 0.5rem 0; color: #8b5e3c; font-size: 0.875rem; width: 120px;">Nom</td><td style="padding: 0.5rem 0; font-size: 0.875rem;">${safeName}</td></tr>
                <tr><td style="padding: 0.5rem 0; color: #8b5e3c; font-size: 0.875rem;">Email</td><td style="padding: 0.5rem 0; font-size: 0.875rem;">${safeEmail}</td></tr>
                <tr><td style="padding: 0.5rem 0; color: #8b5e3c; font-size: 0.875rem;">Telephone</td><td style="padding: 0.5rem 0; font-size: 0.875rem;">${safePhone}</td></tr>
                <tr><td style="padding: 0.5rem 0; color: #8b5e3c; font-size: 0.875rem;">Evenement</td><td style="padding: 0.5rem 0; font-size: 0.875rem;">${safeEventLabel}</td></tr>
                <tr><td style="padding: 0.5rem 0; color: #8b5e3c; font-size: 0.875rem;">Date</td><td style="padding: 0.5rem 0; font-size: 0.875rem;">${safeDate}</td></tr>
                <tr><td style="padding: 0.5rem 0; color: #8b5e3c; font-size: 0.875rem;">Invites</td><td style="padding: 0.5rem 0; font-size: 0.875rem;">${safeGuests}</td></tr>
              </table>
              <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid #f5ede0;">
                <p style="font-size: 0.875rem; color: #8b5e3c; margin-bottom: 0.5rem;">Description du projet :</p>
                <p style="font-size: 0.875rem; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</p>
              </div>
            </div>
          </body>
        </html>
      `,
        });

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        return NextResponse.json(
            { error: "Erreur interne du serveur." },
            { status: 500 }
        );
    }
}
