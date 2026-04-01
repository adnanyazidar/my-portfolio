import { test as base } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { CaseStudyPage } from "../pages/CaseStudyPage";

/**
 * Custom Test Fixtures — Menyediakan page objects yang siap pakai.
 *
 * Setiap test secara otomatis mendapatkan instance page object
 * tanpa perlu melakukan inisialisasi manual.
 *
 * Contoh penggunaan:
 * ```ts
 * test("homepage loads", async ({ homePage }) => {
 *   await homePage.goto();
 *   await homePage.expectHeroVisible();
 * });
 * ```
 */

// Definisikan tipe fixture
type TestFixtures = {
  homePage: HomePage;
  aboutPage: AboutPage;
  caseStudyPage: CaseStudyPage;
};

// Extend base test dengan custom fixtures
export const test = base.extend<TestFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },

  aboutPage: async ({ page }, use) => {
    const aboutPage = new AboutPage(page);
    await use(aboutPage);
  },

  caseStudyPage: async ({ page }, use) => {
    const caseStudyPage = new CaseStudyPage(page);
    await use(caseStudyPage);
  },
});

// Re-export expect dari playwright
export { expect } from "@playwright/test";
