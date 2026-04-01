import { type Page, type Locator, expect } from "@playwright/test";

/**
 * BasePage — Kelas dasar untuk semua Page Object Model.
 *
 * Menyediakan:
 * - Navigasi dasar
 * - Akses ke elemen global (Navbar, Footer)
 * - Helper methods yang dipakai ulang di semua halaman
 */
export class BasePage {
  readonly page: Page;

  // ── Global Elements ──────────────────────────────────────
  readonly navbar: Locator;
  readonly footer: Locator;
  readonly logoLink: Locator;
  readonly contactCta: Locator;

  constructor(page: Page) {
    this.page = page;

    // Navbar selectors
    this.navbar = page.locator("nav").first();
    this.logoLink = page.locator('a:has-text("Adnan Labs")').first();

    // Footer selectors
    this.footer = page.locator("footer").first();

    // Navbar Contact CTA button
    this.contactCta = this.navbar.locator('a[href="/#contact"]').first();
  }

  // ── Navigation ───────────────────────────────────────────

  /** Navigasi ke URL relatif dan tunggu halaman selesai loading */
  async navigateTo(path: string): Promise<void> {
    await this.page.goto(path, { waitUntil: "networkidle" });
  }

  /** Ambil page title dari <title> tag */
  async getTitle(): Promise<string> {
    return this.page.title();
  }

  /** Tunggu halaman selesai load (DOM content loaded) */
  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState("domcontentloaded");
  }

  // ── Navbar Helpers ───────────────────────────────────────

  /** Ambil semua navigation links di desktop nav */
  getDesktopNavLinks(): Locator {
    return this.navbar.locator(".hidden.md\\:flex a");
  }

  /** Klik logo untuk kembali ke homepage */
  async clickLogo(): Promise<void> {
    await this.logoLink.click();
  }

  /** Verifikasi navbar visible */
  async expectNavbarVisible(): Promise<void> {
    await expect(this.navbar).toBeVisible();
  }

  // ── Footer Helpers ───────────────────────────────────────

  /** Verifikasi footer visible */
  async expectFooterVisible(): Promise<void> {
    await expect(this.footer).toBeVisible();
  }

  /** Ambil footer social links */
  getFooterLinks(): Locator {
    return this.footer.locator("a");
  }

  // ── Mobile Menu ──────────────────────────────────────────

  /** Klik hamburger menu (hanya visible di mobile viewport) */
  async toggleMobileMenu(): Promise<void> {
    const hamburger = this.navbar.locator('button[aria-label="Toggle menu"]');
    await hamburger.click();
  }

  /** Ambil mobile menu container */
  getMobileMenu(): Locator {
    return this.navbar.locator(".md\\:hidden.bg-white\\/95");
  }
}
