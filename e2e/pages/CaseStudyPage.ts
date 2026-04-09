import { type Page, type Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

/**
 * CaseStudyPage — Page Object Model untuk halaman case study.
 *
 * Digunakan untuk kedua halaman:
 * - /case-studies/freshtoria
 * - /case-studies/roomcraft
 *
 * Menyediakan selectors dinamis berdasarkan konten halaman.
 */
export class CaseStudyPage extends BasePage {
  // ── Common Elements ──────────────────────────────────────
  readonly heroTitle: Locator;
  readonly heroDescription: Locator;
  readonly backToPortfolioLink: Locator;
  readonly githubRepoLink: Locator;
  readonly downloadDocumentLink: Locator;

  constructor(page: Page) {
    super(page);

    // Hero elements — generic untuk kedua case study
    this.heroTitle = page.locator("h1").first();
    this.heroDescription = page.locator("h1 + p").first();

    // Navigation
    this.backToPortfolioLink = page.locator('a[href="/#case-studies"]').filter({ hasText: "Back to Portfolio" });

    // CTA Buttons — di sticky bar
    this.githubRepoLink = page.locator("a").filter({ hasText: "View GitHub Repo" });
    this.downloadDocumentLink = page.locator("a").filter({ hasText: "Download Document" });
  }

  // ── Navigation ───────────────────────────────────────────

  /** Navigasi ke halaman Freshtoria case study */
  async gotoFreshtoria(): Promise<void> {
    await this.navigateTo("/case-studies/freshtoria");
  }

  /** Navigasi ke halaman RoomCraft case study */
  async gotoRoomcraft(): Promise<void> {
    await this.navigateTo("/case-studies/roomcraft");
  }

  // ── Assertions ───────────────────────────────────────────

  /** Verifikasi halaman case study loaded dengan hero title */
  async expectPageLoaded(): Promise<void> {
    await expect(this.heroTitle).toBeVisible();
    await expect(this.heroDescription).toBeVisible();
  }

  /** Verifikasi hero title mengandung teks tertentu */
  async expectHeroTitleContains(text: string): Promise<void> {
    await expect(this.heroTitle).toContainText(text);
  }

  /** Verifikasi "Back to Portfolio" link ada */
  async expectBackLinkPresent(): Promise<void> {
    await expect(this.backToPortfolioLink).toBeVisible();
    await expect(this.backToPortfolioLink).toHaveAttribute("href", "/#case-studies");
  }

  /** Verifikasi GitHub repo link ada dan mengarah ke URL yang benar */
  async expectGitHubLinkPresent(): Promise<void> {
    await expect(this.githubRepoLink).toBeVisible();
    await expect(this.githubRepoLink).toHaveAttribute("target", "_blank");
    await expect(this.githubRepoLink).toHaveAttribute("rel", /noopener/);
  }

  /** Verifikasi download document link ada dengan atribut download */
  async expectDownloadLinkPresent(): Promise<void> {
    await expect(this.downloadDocumentLink).toBeVisible();
    await expect(this.downloadDocumentLink).toHaveAttribute("download", /.*/);
  }

  /** Klik "Back to Portfolio" link */
  async clickBackToPortfolio(): Promise<void> {
    await this.backToPortfolioLink.dispatchEvent("click");
  }

  // ── Freshtoria-specific ──────────────────────────────────

  /** Verifikasi project metadata section pada Freshtoria */
  async expectFreshtoriaMetadataVisible(): Promise<void> {
    const projectName = this.page.locator("text=Freshtoria Dashboard (MVP v1.0)");
    const duration = this.page.locator("text=1 Month (Sprint-based)");
    const stack = this.page.locator("text=Playwright, TypeScript");

    await expect(projectName).toBeVisible();
    await expect(duration).toBeVisible();
    await expect(stack).toBeVisible();
  }

  /** Verifikasi challenge cards pada Freshtoria */
  async expectFreshoriaChallengesVisible(): Promise<void> {
    const challengeCards = [
      "Complex Financial Logic",
      "Tight 1-Month Timeline",
      "Zero Tolerance for Integrity Issues",
      "Audit Trail Compliance",
    ];

    for (const challenge of challengeCards) {
      const card = this.page.locator("h4").filter({ hasText: challenge });
      await expect(card).toBeAttached();
    }
  }

  // ── RoomCraft-specific ───────────────────────────────────

  /** Verifikasi Live Website link pada RoomCraft */
  async expectRoomcraftLiveWebsiteLink(): Promise<void> {
    const liveLink = this.page.locator("a").filter({ hasText: "Live Website" });
    await expect(liveLink).toBeVisible();
    await expect(liveLink).toHaveAttribute("href", "https://room-craft-three.vercel.app/");
    await expect(liveLink).toHaveAttribute("target", "_blank");
  }

  /** Verifikasi bug cards pada RoomCraft */
  async expectRoomcraftBugCardsVisible(): Promise<void> {
    const bugIds = ["BUG-142", "BUG-089"];

    for (const bugId of bugIds) {
      const card = this.page.locator("span").filter({ hasText: bugId });
      await card.scrollIntoViewIfNeeded();
      await expect(card).toBeVisible();
    }
  }

  /** Verifikasi measurable impact section pada RoomCraft */
  async expectRoomcraftImpactVisible(): Promise<void> {
    const metrics = ["15+", "14+", "3 Month", "Zero"];

    for (const metric of metrics) {
      const metricEl = this.page.locator(".text-4xl.font-bold").filter({ hasText: metric });
      await metricEl.scrollIntoViewIfNeeded();
      await expect(metricEl).toBeVisible();
    }
  }

  /** Verifikasi email CTA links (ada di case study pages) */
  async expectEmailCTAPresent(): Promise<void> {
    const mailtoLinks = this.page.locator('a[href="mailto:adnanyazidar48@gmail.com"]');
    const count = await mailtoLinks.count();
    expect(count).toBeGreaterThan(0);
  }
}
