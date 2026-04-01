import { test, expect } from "../fixtures/test-fixtures";

/**
 * Skenario C — Case Study Pages
 *
 * Memverifikasi kedua halaman case study:
 * - Freshtoria Dashboard: hero, metadata, challenges, GitHub link, download
 * - RoomCraft: hero, metadata, bug cards, live link, impact metrics
 */
test.describe("Case Study Pages", () => {
  test.describe("Freshtoria Dashboard Case Study", () => {
    test.beforeEach(async ({ caseStudyPage }) => {
      await caseStudyPage.gotoFreshtoria();
    });

    test("should load the Freshtoria page with correct hero content", async ({ caseStudyPage }) => {
      await caseStudyPage.expectPageLoaded();
      await caseStudyPage.expectHeroTitleContains("Supporting Financial Integrity");
    });

    test("should have correct page title for SEO", async ({ caseStudyPage }) => {
      const title = await caseStudyPage.getTitle();
      expect(title).toContain("Freshtoria");
    });

    test("should display 'Back to Portfolio' link", async ({ caseStudyPage }) => {
      await caseStudyPage.expectBackLinkPresent();
    });

    test("should display GitHub repo link with correct attributes", async ({ caseStudyPage }) => {
      await caseStudyPage.expectGitHubLinkPresent();

      // Verifikasi URL GitHub yang spesifik
      const githubLink = caseStudyPage.githubRepoLink;
      await expect(githubLink).toHaveAttribute(
        "href",
        "https://github.com/adnanyazidar/freshtoria-dashboard"
      );
    });

    test("should display Download Document button with download attribute", async ({ caseStudyPage }) => {
      await caseStudyPage.expectDownloadLinkPresent();

      // Verifikasi file path yang di-download
      await expect(caseStudyPage.downloadDocumentLink).toHaveAttribute(
        "href",
        "/files/Freshtoria-QA-Report.pdf"
      );
    });

    test("should render project metadata correctly", async ({ caseStudyPage }) => {
      await caseStudyPage.expectFreshtoriaMetadataVisible();
    });

    test("should render all 4 challenge cards", async ({ caseStudyPage }) => {
      await caseStudyPage.expectFreshoriaChallengesVisible();
    });

    test("should display QA strategy section with automation details", async ({ caseStudyPage }) => {
      const qaStrategyHeading = caseStudyPage.page.locator("h2").filter({
        hasText: "Learning to Test with an Automation-First Mindset",
      });
      await qaStrategyHeading.scrollIntoViewIfNeeded();
      await expect(qaStrategyHeading).toBeVisible();

      // Verifikasi critical user flows yang diotomasi
      const inventoryFlow = caseStudyPage.page.locator("strong").filter({ hasText: "Inventory In/Out" });
      await expect(inventoryFlow).toBeAttached();
    });

    test("should display test coverage table", async ({ caseStudyPage }) => {
      const table = caseStudyPage.page.locator("table");
      await table.scrollIntoViewIfNeeded();
      await expect(table).toBeVisible();

      // Verifikasi table headers
      const headers = table.locator("th");
      await expect(headers).toHaveCount(3);

      // Verifikasi modules tercantum di tabel
      const inventoryRow = table.locator("td").filter({ hasText: "Inventory Management" });
      await expect(inventoryRow).toBeVisible();
    });

    test("should have email CTA links", async ({ caseStudyPage }) => {
      await caseStudyPage.expectEmailCTAPresent();
    });

    test("should render the footer", async ({ caseStudyPage }) => {
      await caseStudyPage.expectFooterVisible();
    });
  });

  test.describe("RoomCraft Case Study", () => {
    test.beforeEach(async ({ caseStudyPage }) => {
      await caseStudyPage.gotoRoomcraft();
    });

    test("should load the RoomCraft page with correct hero content", async ({ caseStudyPage }) => {
      await caseStudyPage.expectPageLoaded();
      await caseStudyPage.expectHeroTitleContains("Ensuring Visual Perfection");
    });

    test("should have correct page title for SEO", async ({ caseStudyPage }) => {
      const title = await caseStudyPage.getTitle();
      expect(title).toContain("RoomCraft");
    });

    test("should display 'Back to Portfolio' link", async ({ caseStudyPage }) => {
      await caseStudyPage.expectBackLinkPresent();
    });

    test("should display GitHub repo link with correct URL", async ({ caseStudyPage }) => {
      await caseStudyPage.expectGitHubLinkPresent();

      await expect(caseStudyPage.githubRepoLink).toHaveAttribute(
        "href",
        "https://github.com/fauzan3596/room-craft"
      );
    });

    test("should display Live Website link", async ({ caseStudyPage }) => {
      await caseStudyPage.expectRoomcraftLiveWebsiteLink();
    });

    test("should display Download Document button", async ({ caseStudyPage }) => {
      await caseStudyPage.expectDownloadLinkPresent();

      await expect(caseStudyPage.downloadDocumentLink).toHaveAttribute(
        "href",
        "/files/RoomCraft-QA-Report.pdf"
      );
    });

    test("should render bug cards with severity labels", async ({ caseStudyPage }) => {
      await caseStudyPage.expectRoomcraftBugCardsVisible();

      // Verifikasi severity label "Critical" ada
      const criticalLabel = caseStudyPage.page.locator("span").filter({ hasText: "Critical" }).first();
      await criticalLabel.scrollIntoViewIfNeeded();
      await expect(criticalLabel).toBeVisible();
    });

    test("should display measurable impact metrics", async ({ caseStudyPage }) => {
      await caseStudyPage.expectRoomcraftImpactVisible();
    });

    test("should render testing strategy section", async ({ caseStudyPage }) => {
      const strategyHeading = caseStudyPage.page.locator("h2").filter({ hasText: "Testing Strategy" });
      await strategyHeading.scrollIntoViewIfNeeded();
      await expect(strategyHeading).toBeVisible();

      // Verifikasi 3 strategy items
      const exploratory = caseStudyPage.page.locator("h4").filter({ hasText: "Exploratory Testing" });
      const crossPlatform = caseStudyPage.page.locator("h4").filter({ hasText: "Cross-Platform Matrix" });
      const bugDoc = caseStudyPage.page.locator("h4").filter({ hasText: "Bug Documentation" });

      await expect(exploratory).toBeAttached();
      await expect(crossPlatform).toBeAttached();
      await expect(bugDoc).toBeAttached();
    });

    test("should have email CTA links", async ({ caseStudyPage }) => {
      await caseStudyPage.expectEmailCTAPresent();
    });

    test("should render the footer", async ({ caseStudyPage }) => {
      await caseStudyPage.expectFooterVisible();
    });
  });
});
