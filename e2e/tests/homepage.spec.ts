import { test, expect } from "../fixtures/test-fixtures";

/**
 * Skenario A — Homepage Full Load
 *
 * Memverifikasi bahwa semua section di homepage ter-render dengan benar
 * termasuk konten kritis seperti heading, CTA buttons, dan project cards.
 */
test.describe("Homepage Full Load", () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.goto();
  });

  test("should display the page with correct title", async ({ homePage }) => {
    const title = await homePage.getTitle();
    expect(title).toContain("Adnan Labs");
  });

  test("should render the navbar with logo and navigation links", async ({ homePage }) => {
    await homePage.expectNavbarVisible();

    // Verifikasi logo text
    await expect(homePage.logoLink).toContainText("Adnan Labs");

    // Verifikasi desktop nav links ada (5 links)
    const navLinks = homePage.getDesktopNavLinks();
    await expect(navLinks).toHaveCount(5);
  });

  test("should render the hero section with correct content", async ({ homePage }) => {
    await homePage.expectHeroVisible();

    // Verifikasi role/title
    await expect(homePage.heroTitle).toContainText("QA Automation Engineer");

    // Verifikasi subtitle
    await expect(homePage.heroSubtitle).toBeVisible();

    // Verifikasi intro text
    const introText = homePage.page.locator("text=I leverage my background in Frontend");
    await expect(introText).toBeVisible();
  });

  test("should have working CTA buttons in hero section", async ({ homePage }) => {
    await homePage.expectHeroCTAsPresent();

    // Verifikasi "View My Projects" mengarah ke section case-studies
    await expect(homePage.viewProjectsBtn).toHaveAttribute("href", "/#case-studies");

    // Verifikasi "Download Resume" memiliki atribut download dengan nama file
    await expect(homePage.downloadResumeBtn).toHaveAttribute(
      "download",
      /Adnan Yazid Ardiansyah/
    );
  });

  test("should render all main sections on the page", async ({ homePage }) => {
    await homePage.expectAllSectionsVisible();
  });

  test("should display both project cards in Selected Work section", async ({ homePage }) => {
    await homePage.expectProjectCardsVisible();

    // Verifikasi project titles
    await expect(homePage.freshtoriaCard).toContainText("Freshtoria Dashboard");
    await expect(homePage.roomcraftCard).toContainText("RoomCraft");
  });

  test("should render the contact section with email link", async ({ homePage }) => {
    await homePage.expectContactSectionVisible();
  });

  test("should render the footer with social links", async ({ homePage }) => {
    await homePage.expectFooterVisible();

    // Verifikasi footer copyright text
    const copyright = homePage.footer.locator("text=© 2026 Adnan Labs");
    await expect(copyright).toBeVisible();

    // Verifikasi social links
    const linkedIn = homePage.footer.locator('a[href*="linkedin.com"]');
    const github = homePage.footer.locator('a[href*="github.com"]');
    const dribbble = homePage.footer.locator('a[href*="dribbble.com"]');

    await expect(linkedIn).toBeVisible();
    await expect(github).toBeVisible();
    await expect(dribbble).toBeVisible();
  });
});
