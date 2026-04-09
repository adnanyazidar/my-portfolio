import { defineConfig, devices } from "@playwright/test";

/**
 * Playwright Configuration for Adnan Labs Portfolio
 *
 * Konfigurasi ini mencakup:
 * - 3 browser projects (Chromium, Firefox, WebKit)
 * - Auto-start dev server via webServer
 * - Visual regression snapshot settings
 * - Trace & screenshot on failure
 */
export default defineConfig({
  // Direktori tempat test files berada
  testDir: "./e2e/tests",

  // Timeout per test: 30 detik
  timeout: 30_000,

  // Expect timeout: 5 detik untuk assertions
  expect: {
    timeout: 5_000,
    // Visual regression: toleransi 5% pixel difference untuk lintas platform
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.05,
    },
  },

  // Konfigurasi nama snapshot agar tidak membedakan platform (Windows/Linux)
  snapshotPathTemplate: "{testDir}/{testFileDir}/{testFileName}-snapshots/{arg}-{projectName}{ext}",

  // Jalankan test files secara paralel
  fullyParallel: true,

  // Gagalkan CI build jika ada test.only() yang tertinggal
  forbidOnly: !!process.env.CI,

  // Retry: 2x di CI, 0x di lokal
  retries: process.env.CI ? 2 : 0,

  // Workers: 1 di CI untuk stabilitas, auto di lokal
  workers: process.env.CI ? 1 : undefined,

  // Reporter: HTML report + list di console
  reporter: [["html", { open: "never" }], ["list"]],

  // Shared settings untuk semua projects
  use: {
    // Base URL: localhost:3000 (Next.js dev server)
    baseURL: "http://localhost:3000",

    // Ambil screenshot saat test gagal
    screenshot: "only-on-failure",

    // Record trace saat test gagal (untuk debugging)
    trace: "on-first-retry",

    // Viewport default: desktop
    viewport: { width: 1440, height: 900 },
  },

  // Browser projects
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],

  // Auto-start Next.js dev server sebelum test
  webServer: {
    command: "npm run dev",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000, // 2 menit untuk startup
  },
});
