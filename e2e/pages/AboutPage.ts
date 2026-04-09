import { type Page, type Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

/**
 * AboutPage — Page Object Model untuk halaman QA Approach (/about).
 *
 * Mencakup selectors dan methods untuk:
 * Header, Testing Mindset cards, Manual vs Automation,
 * Developer Workflow, Bug Reporting, Continuous Learning, dan CTA.
 */
export class AboutPage extends BasePage {
  // ── Header Elements ──────────────────────────────────────
  readonly pageTitle: Locator;
  readonly qualitySubtitle: Locator;
  readonly backToHomeLink: Locator;

  // ── Mindset Section ──────────────────────────────────────
  readonly mindsetHeading: Locator;
  readonly mindsetCards: Locator;

  // ── Manual vs Automation ─────────────────────────────────
  readonly manualVsAutomationHeading: Locator;
  readonly automateCard: Locator;
  readonly manualCard: Locator;

  // ── Workflow & Bug Reporting ──────────────────────────────
  readonly developerWorkflowHeading: Locator;
  readonly bugReportingHeading: Locator;

  // ── Continuous Learning ──────────────────────────────────
  readonly continuousLearningHeading: Locator;

  // ── CTA ──────────────────────────────────────────────────
  readonly ctaHeading: Locator;
  readonly letsTalkButton: Locator;

  constructor(page: Page) {
    super(page);

    // Header
    this.pageTitle = page.locator("h1").filter({ hasText: "How I Think About" });
    this.qualitySubtitle = page.locator("h1 span").filter({ hasText: "Quality" });
    this.backToHomeLink = page.locator('a[href="/"]').filter({ hasText: "Back to Home" });

    // Mindset Section
    this.mindsetHeading = page.locator("h2").filter({ hasText: "My Testing Mindset" });
    this.mindsetCards = page.locator("section").filter({ has: this.mindsetHeading }).locator(".rounded-2xl");

    // Manual vs Automation
    this.manualVsAutomationHeading = page.locator("h2").filter({ hasText: "Manual vs Automation Philosophy" });
    this.automateCard = page.locator("h4").filter({ hasText: "What I Prefer to Automate" });
    this.manualCard = page.locator("h4").filter({ hasText: "What I Prefer to Test Manually" });

    // Workflow & Bug Reporting
    this.developerWorkflowHeading = page.locator("h2").filter({ hasText: "How I Work With Developers" });
    this.bugReportingHeading = page.locator("h2").filter({ hasText: "My Bug Reporting Principles" });

    // Continuous Learning
    this.continuousLearningHeading = page.locator("h2").filter({ hasText: "Expanding My Toolkit" });

    // CTA
    this.ctaHeading = page.locator("h2").filter({ hasText: "Interested in working together" });
    this.letsTalkButton = page.locator('a[href="mailto:adnanyazidar48@gmail.com"] button').filter({ hasText: "Let's Talk" });
  }

  // ── Navigation ───────────────────────────────────────────

  /** Navigasi ke halaman About/QA Approach */
  async goto(): Promise<void> {
    await this.navigateTo("/about");
  }

  // ── Assertions ───────────────────────────────────────────

  /** Verifikasi halaman loaded dengan header yang benar */
  async expectPageLoaded(): Promise<void> {
    await expect(this.pageTitle).toBeVisible();
    await expect(this.qualitySubtitle).toBeVisible();
  }

  /** Verifikasi semua section utama tersedia di halaman */
  async expectAllSectionsPresent(): Promise<void> {
    // Scroll ke bawah untuk memastikan semua section ter-render
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await this.page.waitForTimeout(500);

    await expect(this.mindsetHeading).toBeAttached();
    await expect(this.manualVsAutomationHeading).toBeAttached();
    await expect(this.developerWorkflowHeading).toBeAttached();
    await expect(this.bugReportingHeading).toBeAttached();
    await expect(this.continuousLearningHeading).toBeAttached();
    await expect(this.ctaHeading).toBeAttached();
  }

  /** Verifikasi 3 mindset cards ter-render */
  async expectMindsetCardsVisible(): Promise<void> {
    await this.mindsetHeading.scrollIntoViewIfNeeded();

    const riskBased = this.page.locator("h3").filter({ hasText: "Risk-Based Testing" });
    const thinkUser = this.page.locator("h3").filter({ hasText: "Think Like a User" });
    const automationPurpose = this.page.locator("h3").filter({ hasText: "Automation With Purpose" });

    await expect(riskBased).toBeVisible();
    await expect(thinkUser).toBeVisible();
    await expect(automationPurpose).toBeVisible();
  }

  /** Klik "Back to Home" link */
  async clickBackToHome(): Promise<void> {
    await this.backToHomeLink.click();
  }

  /** Verifikasi CTA (Let's Talk) button */
  async expectCTAPresent(): Promise<void> {
    await this.ctaHeading.scrollIntoViewIfNeeded();
    await expect(this.ctaHeading).toBeVisible();
    await expect(this.letsTalkButton).toBeVisible();
  }
}
