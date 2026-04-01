import { test, expect } from "../fixtures/test-fixtures";

/**
 * Skenario F — Visual Regression Testing
 *
 * Menggunakan Playwright's toHaveScreenshot() untuk membandingkan
 * screenshot halaman dengan baseline yang tersimpan.
 *
 * PENTING:
 * - Jalankan pertama kali dengan `--update-snapshots` untuk generate baseline
 * - Baseline tersimpan di e2e/tests/visual-regression.spec.ts-snapshots/
 * - Commit baseline ke repository agar bisa digunakan di CI/CD
 *
 * Threshold: maxDiffPixelRatio 0.01 (1% pixel difference tolerance)
 */
test.describe("Visual Regression", () => {
  // Gunakan konsisten viewport untuk screenshot
  test.use({ viewport: { width: 1440, height: 900 } });

  test.describe("Homepage Screenshots", () => {
    test("homepage hero section should match baseline", async ({ homePage }) => {
      await homePage.goto();

      // Tunggu semua font dan gambar loaded
      await homePage.page.waitForLoadState("networkidle");
      await homePage.page.waitForTimeout(1000); // Tunggu animasi selesai

      // Screenshot hanya hero section
      await expect(homePage.heroSection).toHaveScreenshot("homepage-hero.png", {
        maxDiffPixelRatio: 0.01,
        animations: "disabled", // Disable animasi untuk konsistensi
      });
    });

    test("homepage selected work section should match baseline", async ({ homePage }) => {
      await homePage.goto();
      await homePage.page.waitForLoadState("networkidle");

      await homePage.selectedWorkSection.scrollIntoViewIfNeeded();
      await homePage.page.waitForTimeout(500);

      await expect(homePage.selectedWorkSection).toHaveScreenshot(
        "homepage-selected-work.png",
        {
          maxDiffPixelRatio: 0.01,
          animations: "disabled",
        }
      );
    });

    test("homepage contact section should match baseline", async ({ homePage }) => {
      await homePage.goto();
      await homePage.page.waitForLoadState("networkidle");

      await homePage.contactSection.scrollIntoViewIfNeeded();
      await homePage.page.waitForTimeout(500);

      await expect(homePage.contactSection).toHaveScreenshot(
        "homepage-contact.png",
        {
          maxDiffPixelRatio: 0.01,
          animations: "disabled",
        }
      );
    });
  });

  test.describe("About Page Screenshots", () => {
    test("about page header should match baseline", async ({ aboutPage }) => {
      await aboutPage.goto();
      await aboutPage.page.waitForLoadState("networkidle");
      await aboutPage.page.waitForTimeout(1000);

      // Screenshot header area
      const headerSection = aboutPage.page.locator("section").first();
      await expect(headerSection).toHaveScreenshot("about-header.png", {
        maxDiffPixelRatio: 0.01,
        animations: "disabled",
      });
    });

    test("about page mindset section should match baseline", async ({ aboutPage }) => {
      await aboutPage.goto();
      await aboutPage.page.waitForLoadState("networkidle");

      await aboutPage.mindsetHeading.scrollIntoViewIfNeeded();
      await aboutPage.page.waitForTimeout(500);

      // Screenshot mindset cards area
      const mindsetSection = aboutPage.page.locator("section").filter({
        has: aboutPage.mindsetHeading,
      });
      await expect(mindsetSection).toHaveScreenshot("about-mindset.png", {
        maxDiffPixelRatio: 0.01,
        animations: "disabled",
      });
    });
  });

  test.describe("Case Study Page Screenshots", () => {
    test("freshtoria hero should match baseline", async ({ caseStudyPage }) => {
      await caseStudyPage.gotoFreshtoria();
      await caseStudyPage.page.waitForLoadState("networkidle");
      await caseStudyPage.page.waitForTimeout(1000);

      // Screenshot hero area (first div after back link)
      const heroArea = caseStudyPage.page.locator("main > div").first();
      await expect(heroArea).toHaveScreenshot("freshtoria-hero.png", {
        maxDiffPixelRatio: 0.01,
        animations: "disabled",
      });
    });

    test("roomcraft hero should match baseline", async ({ caseStudyPage }) => {
      await caseStudyPage.gotoRoomcraft();
      await caseStudyPage.page.waitForLoadState("networkidle");
      await caseStudyPage.page.waitForTimeout(1000);

      // Screenshot hero area
      const heroArea = caseStudyPage.page.locator("main > div").first();
      await expect(heroArea).toHaveScreenshot("roomcraft-hero.png", {
        maxDiffPixelRatio: 0.01,
        animations: "disabled",
      });
    });
  });
});
