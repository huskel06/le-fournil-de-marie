/**
 * Rate limiter simple côté serveur (Map avec timestamp + compteur par IP).
 * Max 5 requêtes par minute par IP.
 */

const requestMap = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;

export function checkRateLimit(ip: string): { allowed: boolean; remaining: number; resetIn: number } {
    const now = Date.now();
    const entry = requestMap.get(ip);

    if (!entry || now > entry.resetAt) {
        requestMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
        return { allowed: true, remaining: MAX_REQUESTS - 1, resetIn: WINDOW_MS };
    }

    if (entry.count >= MAX_REQUESTS) {
        return { allowed: false, remaining: 0, resetIn: entry.resetAt - now };
    }

    entry.count += 1;
    return { allowed: true, remaining: MAX_REQUESTS - entry.count, resetIn: entry.resetAt - now };
}

/**
 * Nettoie les entrées expirées du Map (toutes les minutes).
 */
setInterval(() => {
    const now = Date.now();
    for (const [ip, entry] of requestMap.entries()) {
        if (now > entry.resetAt) {
            requestMap.delete(ip);
        }
    }
}, WINDOW_MS);