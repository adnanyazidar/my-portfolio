import { test, expect } from "../fixtures/test-fixtures";

/**
 * Skenario B — Navigation Flow
 *
 * Memverifikasi semua navigasi berfungsi:
 * - Navbar links (anchor scroll)
 * - Navigasi antar halaman
 * - Mobile hamburger menu
 * - Back links
 */
test.describe("Navigation Flow", () => {
  test.describe("Desktop Navbar Links", () => {
    test("should navigate to anchor sections via navbar links", async ({ homePage }) => {
      await homePage.goto();

      // Test setiap navbar link mengarah ke hash yang benar
      const expectedLinks = [
        { text: "Philosophy", href: "/#philosophy" },
        { text: "Stack", href: "/#expertise" },
        { text: "Why Hire Me", href: "/#why-hire-me" },
        { text: "Case Studies", href: "/#case-studies" },
        { text: "Reviews", href: "/#reviews" },
      ];

      for (const link of expectedLinks) {
        const navLink = homePage.navbar.locator(`a[href="${link.href}"]`);
        await expect(navLink).toBeVisible();
        await expect(navLink).toContainText(link.text);
      }
    });

    test("should have Contact CTA button in navbar", async ({ homePage }) => {
      await homePage.goto();

      await expect(homePage.contactCta).toHaveAttribute("href", "/#contact");
    });
  });

  test.describe("Page Navigation", () => {
    test("should navigate to QA Approach page via CTA button", async ({ homePage }) => {
      await homePage.goto();

      // Scroll ke QA Approach CTA (di dalam Philosophy section)
      const qaApproachLink = homePage.page.locator('a[href="/about"]').filter({ hasText: "View My QA Approach" });
      await qaApproachLink.scrollIntoViewIfNeeded();
      await qaApproachLink.click();

      // Verifikasi navigasi berhasil
      await homePage.page.waitForURL("**/about");
      await expect(homePage.page).toHaveURL(/\/about$/);
    });

    test("should navigate to Freshtoria case study", async ({ homePage }) => {
      await homePage.goto();

      await homePage.selectedWorkSection.scrollIntoViewIfNeeded();
      await homePage.clickFreshtoriaViewDetail();

      await homePage.page.waitForURL("**/case-studies/freshtoria");
      await expect(homePage.page).toHaveURL(/\/case-studies\/freshtoria$/);
    });

    test("should navigate to RoomCraft case study", async ({ homePage }) => {
      await homePage.goto();

      await homePage.selectedWorkSection.scrollIntoViewIfNeeded();
      await homePage.clickRoomcraftViewDetail();

      await homePage.page.waitForURL("**/case-studies/roomcraft");
      await expect(homePage.page).toHaveURL(/\/case-studies\/roomcraft$/);
    });

    test("should navigate back to home from About page", async ({ aboutPage }) => {
      await aboutPage.goto();

      await aboutPage.clickBackToHome();

      await aboutPage.page.waitForURL("**/");
      await expect(aboutPage.page).toHaveURL(/\/$/);
    });

    test("should navigate back to portfolio from Freshtoria case study", async ({ caseStudyPage }) => {
      await caseStudyPage.gotoFreshtoria();

      await caseStudyPage.clickBackToPortfolio();

      // Setelah klik "Back to Portfolio", URL harus berubah ke homepage dengan hash
      await caseStudyPage.page.waitForURL("**/#case-studies");
    });

    test("should navigate back to portfolio from RoomCraft case study", async ({ caseStudyPage }) => {
      await caseStudyPage.gotoRoomcraft();

      await caseStudyPage.clickBackToPortfolio();

      await caseStudyPage.page.waitForURL("**/#case-studies");
    });
  });

  test.describe("Logo Navigation", () => {
    test("should navigate to homepage when clicking logo from About page", async ({ aboutPage }) => {
      await aboutPage.goto();

      await aboutPage.clickLogo();

      await aboutPage.page.waitForURL("**/");
      await expect(aboutPage.page).toHaveURL(/\/$/);
    });
  });

  test.describe("Mobile Navigation", () => {
    // Gunakan mobile viewport untuk test ini
    test.use({ viewport: { width: 375, height: 667 } });

    test("should show hamburger menu and hide desktop nav on mobile", async ({ homePage }) => {
      await homePage.goto();

      // Desktop nav harus hidden
      const desktopNav = homePage.navbar.locator(".hidden.md\\:flex");
      await expect(desktopNav).toBeHidden();

      // Hamburger button harus visible
      const hamburger = homePage.navbar.locator('button[aria-label="Toggle menu"]');
      await expect(hamburger).toBeVisible();
    });

    test("should toggle mobile menu when clicking hamburger", async ({ homePage }) => {
      await homePage.goto();

      // Buka mobile menu
      await homePage.toggleMobileMenu();

      // Menu harus tampil
      const mobileMenu = homePage.getMobileMenu();
      await expect(mobileMenu).toBeVisible();

      // Verifikasi links ada di mobile menu
      const philosophyLink = mobileMenu.locator('a[href="/#philosophy"]');
      await expect(philosophyLink).toBeVisible();
    });

    test("should close mobile menu after clicking a link", async ({ homePage }) => {
      await homePage.goto();

      // Buka mobile menu
      await homePage.toggleMobileMenu();

      const mobileMenu = homePage.getMobileMenu();
      await expect(mobileMenu).toBeVisible();

      // Klik salah satu link
      const link = mobileMenu.locator('a[href="/#philosophy"]');
      await link.click();

      // Menu harus tertutup setelah klik link
      await expect(mobileMenu).toBeHidden();
    });
  });

  test.describe("Project Archive Link", () => {
    test("should navigate to project archive from Selected Work section", async ({ homePage }) => {
      await homePage.goto();
      await homePage.selectedWorkSection.scrollIntoViewIfNeeded();

      await expect(homePage.viewAllLink).toBeVisible();
      await expect(homePage.viewAllLink).toHaveAttribute("href", "/project-archive");
    });
  });
});
