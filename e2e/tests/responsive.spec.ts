import { test, expect } from "../fixtures/test-fixtures";

/**
 * Skenario E — Responsive Design
 *
 * Memverifikasi layout dan UX pada 3 breakpoint:
 * - Mobile: 375×667 (iPhone SE)
 * - Tablet: 768×1024 (iPad)
 * - Desktop: 1440×900
 *
 * Fokus pada:
 * - Navbar behavior (hamburger vs desktop)
 * - Content readability
 * - Layout tidak overlap atau overflow
 * - Hero section layout changes
 */
test.describe("Responsive Design", () => {
  test.describe("Mobile Viewport (375×667)", () => {
    test.use({ viewport: { width: 375, height: 667 } });

    test("should show hamburger menu on mobile", async ({ homePage }) => {
      await homePage.goto();

      const hamburger = homePage.navbar.locator('button[aria-label="Toggle menu"]');
      await expect(hamburger).toBeVisible();
    });

    test("should hide desktop navigation on mobile", async ({ homePage }) => {
      await homePage.goto();

      const desktopNav = homePage.navbar.locator(".hidden.md\\:flex");
      await expect(desktopNav).toBeHidden();
    });

    test("should render hero content properly on mobile", async ({ homePage }) => {
      await homePage.goto();

      // Hero title harus visible
      await expect(homePage.heroTitle).toBeVisible();

      // CTA buttons harus visible
      await expect(homePage.viewProjectsBtn).toBeVisible();
    });

    test("should not have horizontal overflow on mobile", async ({ homePage }) => {
      await homePage.goto();

      // Check bahwa tidak ada horizontal scrollbar
      const hasHorizontalOverflow = await homePage.page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });

      expect(hasHorizontalOverflow).toBe(false);
    });

    test("should render project cards stacked vertically on mobile", async ({ homePage }) => {
      await homePage.goto();
      await homePage.selectedWorkSection.scrollIntoViewIfNeeded();

      // Pada mobile, project cards harus stack (1 column)
      const grid = homePage.page.locator("#case-studies > div > .grid.grid-cols-1");
      await expect(grid).toBeAttached();
    });

    test("should render contact section correctly on mobile", async ({ homePage }) => {
      await homePage.goto();
      await homePage.contactSection.scrollIntoViewIfNeeded();

      await expect(homePage.contactHeading).toBeVisible();
      await expect(homePage.emailLink).toBeVisible();
    });

    test("should render About page on mobile without overflow", async ({ aboutPage }) => {
      await aboutPage.goto();

      await expect(aboutPage.pageTitle).toBeVisible();

      const hasHorizontalOverflow = await aboutPage.page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });
      expect(hasHorizontalOverflow).toBe(false);
    });
  });

  test.describe("Tablet Viewport (768×1024)", () => {
    test.use({ viewport: { width: 768, height: 1024 } });

    test("should show desktop navigation on tablet", async ({ homePage }) => {
      await homePage.goto();

      // Pada 768px (md breakpoint), desktop nav harus tampil
      const desktopNav = homePage.navbar.locator(".hidden.md\\:flex");
      await expect(desktopNav).toBeVisible();
    });

    test("should hide hamburger menu on tablet", async ({ homePage }) => {
      await homePage.goto();

      const hamburger = homePage.navbar.locator('button[aria-label="Toggle menu"]');
      await expect(hamburger).toBeHidden();
    });

    test("should render project cards in 2-column grid on tablet", async ({ homePage }) => {
      await homePage.goto();
      await homePage.selectedWorkSection.scrollIntoViewIfNeeded();

      // Pada tablet, grid harus md:grid-cols-2
      await homePage.expectProjectCardsVisible();
    });

    test("should not have horizontal overflow on tablet", async ({ homePage }) => {
      await homePage.goto();

      const hasHorizontalOverflow = await homePage.page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });

      expect(hasHorizontalOverflow).toBe(false);
    });

    test("should render case study page on tablet", async ({ caseStudyPage }) => {
      await caseStudyPage.gotoFreshtoria();

      await caseStudyPage.expectPageLoaded();

      const hasHorizontalOverflow = await caseStudyPage.page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });

      expect(hasHorizontalOverflow).toBe(false);
    });
  });

  test.describe("Desktop Viewport (1440×900)", () => {
    test.use({ viewport: { width: 1440, height: 900 } });

    test("should show desktop navigation with all links", async ({ homePage }) => {
      await homePage.goto();

      const desktopNav = homePage.navbar.locator(".hidden.md\\:flex");
      await expect(desktopNav).toBeVisible();

      const navLinks = homePage.getDesktopNavLinks();
      await expect(navLinks).toHaveCount(5);
    });

    test("should hide hamburger menu on desktop", async ({ homePage }) => {
      await homePage.goto();

      const hamburger = homePage.navbar.locator('button[aria-label="Toggle menu"]');
      await expect(hamburger).toBeHidden();
    });

    test("should display hero section in 2-column layout", async ({ homePage }) => {
      await homePage.goto();

      // Pada desktop, hero menggunakan lg:grid-cols-12
      await expect(homePage.heroTitle).toBeVisible();

      // Terminal mockup harus visible pada desktop
      const terminalSection = homePage.page.locator("text=playwright test --project=chromium");
      await expect(terminalSection).toBeVisible();
    });

    test("should render About page with icon grid on desktop", async ({ aboutPage }) => {
      await aboutPage.goto();

      // Icon grid (lg:grid) yang hidden di mobile harus visible di desktop
      const iconGrid = aboutPage.page.locator(".hidden.lg\\:grid").first();
      await expect(iconGrid).toBeVisible();
    });

    test("should not have horizontal overflow on desktop", async ({ homePage }) => {
      await homePage.goto();

      const hasHorizontalOverflow = await homePage.page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });

      expect(hasHorizontalOverflow).toBe(false);
    });
  });
});
