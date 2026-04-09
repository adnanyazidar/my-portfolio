import { type Page, type Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

/**
 * HomePage — Page Object Model untuk halaman utama (/).
 *
 * Mencakup selectors dan methods untuk semua section:
 * Hero, Philosophy, TechStack, SelectedWork, WhyHireMe,
 * Reviews, Contact, dan Footer.
 */
export class HomePage extends BasePage {
  // ── Section Locators ─────────────────────────────────────
  readonly heroSection: Locator;
  readonly philosophySection: Locator;
  readonly techStackSection: Locator;
  readonly selectedWorkSection: Locator;
  readonly whyHireMeSection: Locator;
  readonly reviewsSection: Locator;
  readonly contactSection: Locator;

  // ── Hero Elements ────────────────────────────────────────
  readonly heroTitle: Locator;
  readonly heroSubtitle: Locator;
  readonly viewProjectsBtn: Locator;
  readonly downloadResumeBtn: Locator;

  // ── Selected Work Elements ───────────────────────────────
  readonly freshtoriaCard: Locator;
  readonly roomcraftCard: Locator;
  readonly viewAllLink: Locator;

  // ── Contact Elements ─────────────────────────────────────
  readonly contactHeading: Locator;
  readonly emailLink: Locator;

  constructor(page: Page) {
    super(page);

    // Section locators — menggunakan id atau konten unik
    this.heroSection = page
      .locator("section")
      .filter({ hasText: "QA Automation Engineer" })
      .first();
    this.philosophySection = page.locator("#philosophy");
    this.techStackSection = page.locator("#expertise");
    this.selectedWorkSection = page.locator("#case-studies");
    this.whyHireMeSection = page.locator("#why-hire-me");
    this.reviewsSection = page.locator("#reviews");
    this.contactSection = page.locator("#contact");

    // Hero elements
    this.heroTitle = page
      .locator("h1")
      .filter({ hasText: "QA Automation Engineer" });
    this.heroSubtitle = page.locator(
      "text=I leverage my background in Frontend development",
    );
    this.viewProjectsBtn = page
      .locator('a[href="/#case-studies"]')
      .filter({ hasText: "VIEW MY PROJECTS" });
    this.downloadResumeBtn = page
      .getByRole("link", { name: "DOWNLOAD RESUME", exact: true })
      .first();

    // Selected Work elements
    this.freshtoriaCard = page
      .locator("h4")
      .filter({ hasText: "Freshtoria Dashboard" });
    this.roomcraftCard = page.locator("h4").filter({ hasText: "RoomCraft" });
    this.viewAllLink = page.locator('a[href="/project-archive"]');

    // Contact elements
    this.contactHeading = page.locator("#contact h2").first();
    this.emailLink = page
      .locator('a[href="mailto:adnanyazidar48@gmail.com"]')
      .first();
  }

  // ── Navigation ───────────────────────────────────────────

  /** Navigasi ke homepage */
  async goto(): Promise<void> {
    await this.navigateTo("/");
  }

  // ── Hero Section Assertions ──────────────────────────────

  /** Verifikasi hero section tampil dengan konten yang benar */
  async expectHeroVisible(): Promise<void> {
    await expect(this.heroTitle).toBeVisible();
    await expect(this.heroSubtitle).toBeVisible();
  }

  /** Verifikasi CTA buttons di hero ada dan memiliki href yang benar */
  async expectHeroCTAsPresent(): Promise<void> {
    await expect(this.viewProjectsBtn).toBeVisible();
    await expect(this.downloadResumeBtn).toBeVisible();
    await expect(this.downloadResumeBtn).toHaveAttribute("download");
  }

  // ── Section Visibility Assertions ────────────────────────

  /** Verifikasi semua section utama ter-render di halaman */
  async expectAllSectionsVisible(): Promise<void> {
    // Scroll ke bawah untuk trigger lazy rendering
    await this.page.evaluate(() =>
      window.scrollTo(0, document.body.scrollHeight),
    );
    await this.page.waitForTimeout(500);

    await expect(this.heroSection).toBeAttached();
    await expect(this.philosophySection).toBeAttached();
    await expect(this.techStackSection).toBeAttached();
    await expect(this.selectedWorkSection).toBeAttached();
    await expect(this.whyHireMeSection).toBeAttached();
    await expect(this.reviewsSection).toBeAttached();
    await expect(this.contactSection).toBeAttached();
    await this.expectFooterVisible();
  }

  // ── Selected Work Assertions ─────────────────────────────

  /** Verifikasi kedua case study project cards tampil */
  async expectProjectCardsVisible(): Promise<void> {
    await this.selectedWorkSection.scrollIntoViewIfNeeded();
    await expect(this.freshtoriaCard).toBeVisible();
    await expect(this.roomcraftCard).toBeVisible();
  }

  /** Klik link "View Detail" pada project Freshtoria */
  async clickFreshtoriaViewDetail(): Promise<void> {
    const link = this.page
      .locator('a[href="/case-studies/freshtoria"]')
      .filter({ hasText: "View Detail" });
    await link.click();
  }

  /** Klik link "View Detail" pada project RoomCraft */
  async clickRoomcraftViewDetail(): Promise<void> {
    const link = this.page
      .locator('a[href="/case-studies/roomcraft"]')
      .filter({ hasText: "View Detail" });
    await link.click();
  }

  // ── Contact Section Assertions ───────────────────────────

  /** Verifikasi contact section tampil dengan email link */
  async expectContactSectionVisible(): Promise<void> {
    await this.contactSection.scrollIntoViewIfNeeded();
    await expect(this.contactHeading).toBeVisible();
    await expect(this.emailLink).toBeVisible();
    await expect(this.emailLink).toHaveAttribute(
      "href",
      "mailto:adnanyazidar48@gmail.com",
    );
  }
}
