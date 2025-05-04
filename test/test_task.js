// import { $, browser, expect } from "@wdio/globals";
// import assert from "assert/strict";

// describe("Webdriverio API paige", () => {
//   // Сheck that the browser has the correct address

//   xit("should have correct url", async () => {
//     await browser.url(`https://webdriver.io/docs/api`);

//     const title = await browser.getUrl();
//     console.log(title);

//     await expect(browser).toHaveUrl("https://webdriver.io/docs/api/");
//   });

//   // Header checking
//   xit("should verify that the 'Introduction' header exists", async () => {
//     await browser.url(`https://webdriver.io/docs/api`);

//     const header = await $("h1=Introduction");
//     const exists = await header.isExisting();

//     console.log("Header is exist " + exists);
//   });

//   // Link checking

//   xit("'WebDriver' link should have corect url", async () => {
//     await browser.url(`https://webdriver.io/docs/api`);

//     const link = await $("=WebDriver");
//     await expect(link).toHaveAttribute("href", "/docs/api/webdriver");
//   });

//   // Search button checking

//   xit("'Search' button chekcing", async () => {
//     await browser.url(`https://webdriver.io/docs/api`);

//     const button = await $(".DocSearch.DocSearch-Button");
//     await button.click();
//     await browser.pause(2000);

//     const input = await $(".DocSearch-Input");
//     await input.setValue("All is done");
//     await browser.pause(2000);

//     const reset = await $(".DocSearch-Reset");
//     await browser.pause(2000);

//     await reset.click();
//     await browser.pause(2000);

//     await browser.keys("escape");
//   });

//   // Bolog btn checking

//   it("Bolog btn checking", async () => {
//     await browser.url(`https://webdriver.io/docs/api`);

//     const apiBtn = await $('nav a[href="/docs/api"]');
//     await apiBtn.click();
//     await browser.pause(2000);

//     const blogLink = await $('a[href="/blog"]');
//     await browser.pause(2000);

//     await blogLink.scrollIntoView();
//     await browser.pause(2000);

//     const isDisplayed = await blogLink.isDisplayed();
//     console.log(`Blog link is displayed: ${isDisplayed}`);
//   });

//   //   Protocol command checking

//   it("Protocol commands checking", async () => {
//     await browser.url(`https://webdriver.io/docs/api`);

//     const protocolBtn = await $(
//       ".pagination-nav__link.pagination-nav__link--next"
//     );
//     let isVisible = await protocolBtn.isDisplayed({ visibilityProperty: true });
//     console.log(`Protocol button is visible: ${isVisible}`);
//     await browser.pause(2000);

//     let isClickable = await protocolBtn.isClickable();
//     console.log(`Is btn clickable: ${isClickable}`);
//     await browser.pause(2000);
//   });

//   // getHTML checking

//   it("getHTML for next button", async () => {
//     const outerHTML = await $(
//       ".pagination-nav__link.pagination-nav__link--next"
//     ).getHTML();
//     console.log(outerHTML);

//     const innerHTML = await $(
//       ".pagination-nav__link.pagination-nav__link--next"
//     ).getHTML({ includeSelectorTag: false });
//     console.log(innerHTML);
//   });

//   //   Should show waitUntil command

//   it("Should show waitUntil command", async () => {
//     await browser.url(`https://webdriver.io/docs/api`);

//     const protocolBtn = await $(
//       ".pagination-nav__link.pagination-nav__link--next"
//     );
//     await protocolBtn.click();
//     await browser.pause(2000);

//     await browser.waitUntil(
//       async () => {
//         return $("#webdriver-protocol").isDisplayed();
//       },
//       6000,
//       "Button is not displayed"
//     );
//   });
// });
