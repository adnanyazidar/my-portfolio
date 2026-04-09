import { test, expect } from "../fixtures/test-fixtures";

/**
 * Skenario D — Contact/CTA Flow
 *
 * Memverifikasi semua contact links dan call-to-action buttons:
 * - mailto: email links
 * - External social links (LinkedIn, GitHub, Dribbble)
 * - Download Resume links
 * - CTA buttons di berbagai halaman
 */
test.describe("Contact & CTA Flow", () => {
  test.describe("Homepage Contact Section", () => {
    test("should display email link with correct mailto href", async ({ homePage }) => {
      await homePage.goto();
      await homePage.contactSection.scrollIntoViewIfNeeded();

      // Verifikasi heading
      await expect(homePage.contactHeading).toBeVisible();

      // Verifikasi email link
      await expect(homePage.emailLink).toBeVisible();
      await expect(homePage.emailLink).toHaveAttribute(
        "href",
        "mailto:adnanyazidar48@gmail.com"
      );

      // Verifikasi email text ditampilkan
      const emailText = homePage.page.locator("text=adnanyazidar48@gmail.com").first();
      await expect(emailText).toBeVisible();
    });

    test("should display contact section description", async ({ homePage }) => {
      await homePage.goto();
      await homePage.contactSection.scrollIntoViewIfNeeded();

      const description = homePage.page.locator("text=Let's discuss how I can help");
      await expect(description).toBeVisible();
    });
  });

  test.describe("Hero Section CTAs", () => {
    test("should have Download Resume link with correct file name", async ({ homePage }) => {
      await homePage.goto();

      await expect(homePage.downloadResumeBtn).toBeVisible();
      await expect(homePage.downloadResumeBtn).toHaveAttribute("download");
      await expect(homePage.downloadResumeBtn).toHaveAttribute(
        "href",
        /Adnan Yazid Ardiansyah/
      );
    });

    test("should have View My Projects link pointing to case studies", async ({ homePage }) => {
      await homePage.goto();

      await expect(homePage.viewProjectsBtn).toBeVisible();
      await expect(homePage.viewProjectsBtn).toHaveAttribute("href", "/#case-studies");
    });
  });

  test.describe("Footer Links", () => {
    test("should have LinkedIn link with correct attributes", async ({ homePage }) => {
      await homePage.goto();
      await homePage.footer.scrollIntoViewIfNeeded();

      const linkedIn = homePage.footer.locator('a[href*="linkedin.com"]');
      await expect(linkedIn).toBeVisible();
      await expect(linkedIn).toHaveAttribute("target", "_blank");
      await expect(linkedIn).toHaveAttribute("rel", "noopener noreferrer");
      await expect(linkedIn).toHaveAttribute(
        "href",
        "https://www.linkedin.com/in/adnan-yazid-ardiansyah-a14800160/"
      );
    });

    test("should have GitHub link with correct attributes", async ({ homePage }) => {
      await homePage.goto();
      await homePage.footer.scrollIntoViewIfNeeded();

      const github = homePage.footer.locator('a[href*="github.com"]');
      await expect(github).toBeVisible();
      await expect(github).toHaveAttribute("target", "_blank");
      await expect(github).toHaveAttribute("rel", "noopener noreferrer");
      await expect(github).toHaveAttribute(
        "href",
        "https://github.com/adnanyazidar"
      );
    });

    test("should have Dribbble link with correct attributes", async ({ homePage }) => {
      await homePage.goto();
      await homePage.footer.scrollIntoViewIfNeeded();

      const dribbble = homePage.footer.locator('a[href*="dribbble.com"]');
      await expect(dribbble).toBeVisible();
      await expect(dribbble).toHaveAttribute("target", "_blank");
      await expect(dribbble).toHaveAttribute("rel", "noopener noreferrer");
    });

    test("should have Download Resume link in footer", async ({ homePage }) => {
      await homePage.goto();
      await homePage.footer.scrollIntoViewIfNeeded();

      const downloadResume = homePage.footer.locator("a").filter({ hasText: "Download Resume" });
      await expect(downloadResume).toBeVisible();
      await expect(downloadResume).toHaveAttribute("download");
    });

    test("should have Back to Top link that scrolls to top", async ({ homePage }) => {
      await homePage.goto();

      // Scroll ke footer
      await homePage.footer.scrollIntoViewIfNeeded();

      const backToTop = homePage.footer.locator("a").filter({ hasText: "Back to Top" });
      await expect(backToTop).toBeVisible();
    });
  });

  test.describe("About Page CTA", () => {
    test("should display Let's Talk CTA button with mailto link", async ({ aboutPage }) => {
      await aboutPage.goto();

      await aboutPage.expectCTAPresent();

      // Verifikasi mailto wrapper
      const mailtoLink = aboutPage.page.locator(
        'a[href="mailto:adnanyazidar48@gmail.com"]'
      ).last();
      await expect(mailtoLink).toBeAttached();
    });
  });

  test.describe("Case Study CTAs", () => {
    test("should have email CTA on Freshtoria page", async ({ caseStudyPage }) => {
      await caseStudyPage.gotoFreshtoria();
      await caseStudyPage.expectEmailCTAPresent();
    });

    test("should have email CTA on RoomCraft page", async ({ caseStudyPage }) => {
      await caseStudyPage.gotoRoomcraft();
      await caseStudyPage.expectEmailCTAPresent();

      // Verifikasi "Initiate Collaboration" button specifically
      const collaborationBtn = caseStudyPage.page.locator("button").filter({
        hasText: "Initiate Collaboration",
      });
      await collaborationBtn.scrollIntoViewIfNeeded();
      await expect(collaborationBtn).toBeVisible();
    });
  });
});
