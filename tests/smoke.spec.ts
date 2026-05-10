import { test, expect } from '@playwright/test'

/**
 * Smoke test — Le Fournil de Marie
 * Généré par Atelier-CL Studio
 * Lancer : npx playwright test tests/smoke.spec.ts
 */

const PAGES = [
  { path: '/', label: '/ Accueil' },
  { path: '/savoir-faire', label: '/savoir-faire' },
  { path: '/a-propos', label: '/à-propos' },
  { path: '/contact', label: '/contact' },
  { path: '/mentions-legales', label: '/mentions-légales' },
]

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

// 1. Toutes les pages chargent
for (const { path, label } of PAGES) {
  test(`Page "${label}" charge sans erreur`, async ({ page }) => {
    const errors: string[] = []
    page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()) })
    page.on('pageerror', err => errors.push(err.message))
    const response = await page.goto(BASE_URL + path)
    expect(response?.status()).toBeLessThan(400)
    await expect(page).toHaveTitle(/.+/)
    expect(errors.filter(e => !e.includes('favicon'))).toHaveLength(0)
  })
}

// 2. Navigation principale
test('Navigation — liens actifs', async ({ page }) => {
  await page.goto(BASE_URL)
  const navLinks = page.locator('nav a')
  const count = await navLinks.count()
  expect(count).toBeGreaterThan(0)
  for (let i = 0; i < count; i++) {
    const href = await navLinks.nth(i).getAttribute('href')
    if (href && href.startsWith('/') && !href.includes('#')) {
      const res = await page.request.get(BASE_URL + href)
      expect(res.status()).toBeLessThan(400)
    }
  }
})

// 3. Formulaire contact
test('Formulaire contact — soumission réussie', async ({ page }) => {
  await page.goto(BASE_URL + '/contact')
  const nameField = page.locator('input[name="name"], input[placeholder*="nom"], input[placeholder*="Nom"]').first()
  const emailField = page.locator('input[type="email"]').first()
  const messageField = page.locator('textarea').first()
  const submitBtn = page.locator('button[type="submit"]').first()
  if (await nameField.isVisible()) await nameField.fill('Test Playwright')
  if (await emailField.isVisible()) await emailField.fill('test@playwright.local')
  if (await messageField.isVisible()) await messageField.fill('Message de test automatisé.')
  await submitBtn.click()
  await expect(page.locator('text=/envoyé|merci|reçu|confirmation|succès/i')).toBeVisible({ timeout: 8000 })
})

// 4. Responsive mobile 375px
test('Responsive mobile 375px', async ({ browser }) => {
  const ctx = await browser.newContext({ viewport: { width: 375, height: 812 } })
  const page = await ctx.newPage()
  await page.goto(BASE_URL)
  const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth)
  const clientWidth = await page.evaluate(() => document.documentElement.clientWidth)
  expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 2)
  await ctx.close()
})

// 5. Responsive desktop 1280px
test('Responsive desktop 1280px', async ({ browser }) => {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } })
  const page = await ctx.newPage()
  await page.goto(BASE_URL)
  await expect(page.locator('body')).toBeVisible()
  await ctx.close()
})
