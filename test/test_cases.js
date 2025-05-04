// import { $, browser, expect } from "@wdio/globals";

// describe("GitHub Tests", () => {
//   const baseUrl = "https://github.com/";

//   it("TC1: Sign in button is displayed", async () => {
//     await browser.url(baseUrl);
//     const signInButton = await $(".HeaderMenu-link--sign-in");
//     const displayed = await signInButton.isDisplayed();
//     console.log(`Sign in button is displayed: ${displayed}`);
//     expect(displayed).toBe(true);
//   });

//   it("TC2: Pricing Button Navigation", async () => {
//     await browser.url(baseUrl);
//     const pricingBtn = $('a[href="https://github.com/pricing"]');
//     await browser.pause(2000);
//     await pricingBtn.click();

//     await browser.pause(2000);

//     await expect(browser).toHaveUrl("https://github.com/pricing");
//   });

//   it("TC3: Search for Repositories", async () => {
//     await browser.url(baseUrl);

//     const searchButton = $(".header-search-button");
//     await searchButton.click();

//     const input = $("#query-builder-test");
//     await input.waitForDisplayed({ timeout: 5000 });
//     await input.setValue("react");

//     await browser.keys("Enter");

//     await browser.pause(2000);

//     const currentUrl = await browser.getUrl();
//     expect(currentUrl).toContain("search?q=react");
//   });

//   it("TC4: Check 'Team' link in footer", async () => {
//     await browser.url(baseUrl);

//     const footer = await $("footer");
//     await footer.scrollIntoView();

//     const teamLink = await $('a[href="/team"]');

//     await expect(teamLink).toBeDisplayed();
//     const text = await teamLink.getText();
//     expect(text).toBe("Team");
//   });

//   it("TC5: Check 'Education' link and h1 text", async () => {
//     await browser.url(baseUrl);
//     const educationLink = await $('a[href="https://github.com/edu"]');

//     await educationLink.scrollIntoView();

//     await browser.pause(3000);

//     await educationLink.click();

//     const h1Element = await $("h1#hero-section-brand-heading");
//     await browser.pause(3000);

//     const h1Text = await h1Element.getText();
//     expect(h1Text).toBe("Empowering the next generation of developers");
//   });
// });
