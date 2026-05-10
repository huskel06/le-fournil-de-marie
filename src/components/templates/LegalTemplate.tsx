import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Divider } from "@/components/atoms/Divider";

export function LegalTemplate() {
    return (
        <section className="pt-32 pb-20 md:pt-40 md:pb-28">
            <div className="max-w-3xl mx-auto px-4 md:px-8">
                <div className="mb-12">
                    <Text size="sm" variant="muted" className="uppercase tracking-widest mb-4 font-medium">
                        Informations Légales
                    </Text>
                    <Heading level="h1" variant="default" className="font-serif !text-4xl md:!text-5xl">
                        Mentions Légales
                    </Heading>
                </div>

                <Divider className="mb-8" />

                <div className="space-y-8 text-sm text-text/70 leading-relaxed">
                    <Section title="Éditeur du site">
                        <p>
                            <strong>Le Fournil de Marie</strong>
                            <br />
                            SARL au capital de 5 000 €
                            <br />
                            RCS Nantes : 987 654 321
                            <br />
                            TVA Intracommunautaire : FR 12 345678901
                        </p>
                        <p className="mt-2">
                            12 Rue de la Grange
                            <br />
                            44000 Nantes
                            <br />
                            Tél. : 02 40 12 34 56
                        </p>
                        <p className="mt-2">
                            Email : bonjour@lefournildemarie-nantes.fr
                        </p>
                        <p className="mt-2">Directrice de la publication : Marie Lecomte</p>
                    </Section>

                    <Section title="Hébergement">
                        <p>
                            <strong>Vercel Inc.</strong>
                            <br />
                            340 S Lemon Ave #4133
                            <br />
                            Walnut, CA 91789, USA
                            <br />
                            Site : vercel.com
                        </p>
                    </Section>

                    <Section title="Propriété intellectuelle">
                        <p>
                            L'ensemble du contenu du site lefournildemarie-nantes.fr (textes,
                            photographies, illustrations, logos, vidéos) est la propriété exclusive
                            du Fournil de Marie. Toute reproduction, représentation, modification
                            ou exploitation, totale ou partielle, sans autorisation préalable est
                            interdite et constitue une contrefaçon.
                        </p>
                    </Section>

                    <Section title="Données personnelles">
                        <p>
                            Conformément au Règlement Général sur la Protection des Données (RGPD)
                            et à la loi Informatique et Libertés, vous disposez d'un droit
                            d'accès, de rectification, de suppression et de portabilité de vos
                            données personnelles.
                        </p>
                        <p className="mt-2">
                            Pour exercer vos droits, contactez-nous à :
                            bonjour@lefournildemarie-nantes.fr
                        </p>
                        <p className="mt-2">
                            Les données collectées via le formulaire de contact sont utilisées
                            uniquement dans le cadre de la réponse à votre demande et ne sont pas
                            conservées au-delà de 12 mois.
                        </p>
                    </Section>

                    <Section title="Cookies">
                        <p>
                            Ce site n'utilise pas de cookies tiers. Un cookie de session
                            strictement nécessaire au fonctionnement du formulaire de contact peut
                            être déposé. Aucun cookie de traçage publicitaire ou de réseaux sociaux
                            n'est utilisé.
                        </p>
                    </Section>

                    <Section title="Crédits">
                        <p>
                            <strong>Conception & Design :</strong> Studio Créatif
                            <br />
                            <strong>Développement :</strong> Next.js 16 App Router
                            <br />
                            <strong>Photographies :</strong> &copy; Le Fournil de Marie
                            <br />
                            <strong>Polices :</strong> TAN Meringue, Cormorant Garamond, Satoshi
                        </p>
                    </Section>
                </div>
            </div>
        </section>
    );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div>
            <Heading level="h3" variant="default" className="font-serif !text-lg mb-3">
                {title}
            </Heading>
            <div className="font-sans text-sm text-text/70 leading-relaxed">
                {children}
            </div>
        </div>
    );
}
