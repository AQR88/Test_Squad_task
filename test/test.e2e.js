// import { $, browser, expect } from "@wdio/globals";
// import MainPage from "./pages/main.page";
// import GameDevPage from "./pages/gamedev.page";
// import GameDevTopRatesPage from "./pages/gamedevToprates.page ";

// describe("Webdriverio main page", () => {
//   it("done", async () => {
//     await browser.url("https://dou.ua/");

//     await MainPage.clickOnBandBtn();
//     await browser.pause(2000);

//     await MainPage.clickOnForumBtn();
//     await browser.pause(2000);

//     await MainPage.clickOnGamedevBtn();
//     await browser.pause(2000);

//     await GameDevPage.clickOnTopGamesRateLink();
//     await browser.pause(5000);

//     expect(GameDevTopRatesPage.title).toHaveText(
//       "Матеріали на тему «топ ігор місяця»"
//     );
//   });

//   it("should show addValue command", async () => {
//     await browser.url(`https://the-internet.herokuapp.com/login`);
//     await LoginPage.setUsernameInput(123);
//     await browser.pause(2000);
//     await LoginPage.usrname.addValue("hello");
//     await browser.pause(2000);
//     await LoginPage.setPasswordInput("superpassword");
//     await browser.pause(2000);
//     await LoginPage.clickOnLOginBtn();
//   });
//   xit("should have correct title", async () => {
//     await browser.url(`https://webdriver.io`);
//     const title = await browser.getTitle();
//     console.log(title);
//     await expect(browser).toHaveTitle(
//       "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO"
//     );
//   });
//   xit("should show addValue command", async () => {
//     await browser.url(`https://the-internet.herokuapp.com/login`);
//     let input = await $("#username");
//     await input.addValue("hello");
//     await browser.pause(2000);
//     await input.addValue(123);
//     await browser.pause(2000);
//     await expect(input).toHaveValue("hello123");
//   });
//   xit("should show setValue command", async () => {
//     await browser.url(`https://the-internet.herokuapp.com/login`);
//     let input = await $("#username");
//     await input.setValue("world");
//     await browser.pause(2000);
//     await input.setValue("hello");
//     await browser.pause(2000);
//     console.log(await input.getValue());
//     await expect(input).toHaveValue("hello");
//   });
//   xit("should show click command", async () => {
//     await browser.url(`https://the-internet.herokuapp.com/login`);
//     let loginButton = await $(".radius");
//     await browser.pause(2000);
//     await loginButton.click();
//     await browser.pause(4000);
//     let inputUsername = await $("#username");
//     await inputUsername.addValue("hetfield");
//     await browser.pause(3000);
//     let inputPassword = await $("#password");
//     await inputPassword.addValue("SuperSecretPassword!");
//     await browser.pause(3000);
//     await loginButton.click();
//     await browser.pause(3000);
//   });
//   xit("should show getAttribute command", async () => {
//     await browser.url(`https://dou.ua/search`);
//     let inputSearch = await $("#gsc-i-id1");
//     let attr = await inputSearch.getAttribute("aria-label");
//     console.log("Placeholder attribute is:" + attr); //output: шукати
//     await inputSearch.setValue("Cat");
//     attr = inputSearch.getValue();
//     await browser.pause(2000);
//     console.log("Value attribute is:" + attr); //outputs: Cat
//   });
//   xit("should show getLocation command", async () => {
//     await browser.url(`https://dou.ua`);
//     let inputSearch = await $("#txtGlobalSearch");
//     let location = await inputSearch.getLocation();
//     console.log("Location is:" + location); //outputs: x,y
//     let xLocation = await inputSearch.getLocation("x");
//     console.log("Location by x is:" + xLocation); //outputs: x
//   });
//   xit("should show getText command", async () => {
//     await browser.url(`https://webdriver.io`);
//     let subtitle = await $(".hero__subtitle");
//     console.log("Subtitle text is:" + (await subtitle.getText())); //outputs: Next-gen...
//   });
//   xit("should show if an element is clickable", async () => {
//     await browser.url(`https://webdriver.io`);
//     const blogButton = await $('a.button[href="/docs/gettingstarted"]');
//     let clickable = await blogButton.isClickable();
//     console.log("Is clickable " + clickable);
//   });
//   xit("should show if an element is displayed", async () => {
//     await browser.url(`https://webdriver.io`);
//     const blogButton = await $('a.button[href="/docs/gettingstarted"]');
//     let displayed = await blogButton.isDisplayed();
//     console.log("Is displayed " + displayed);
//   });
//   xit("should show if an element is visible", async () => {
//     await browser.url(`https://webdriver.io`);
//     const blogButton = await $('a.button[href="/docs/gettingstarted"]');
//     let isVisible = await blogButton.isDisplayed({ withinViewport: true });
//     console.log("Is blog button displayed in viewport " + isVisible);
//     const footer = await $('.footer__link-item[href="/docs/gettingstarted"]');
//     let footerIsDisplayed = await footer.isDisplayed({ withinViewport: true });
//     console.log("Is footer displayed in viewport " + footerIsDisplayed);
//   });
//   xit("Should show if the element is enabled", async () => {
//     await browser.url(`https://webdriver.io`);
//     const getStartedBtn = await $('.button[href="/docs/gettingstarted"]');
//     let isEnable = await getStartedBtn.isEnabled();
//     console.log("Is btn enabled: " + isEnable);
//   });
//   xit("Should show if the element is focused", async () => {
//     await browser.url(`https://webdriver.io`);
//     const getStartedBtn = await $('.button[href="/docs/gettingstarted"]');
//     let isFocused = await getStartedBtn.isFocused();
//     console.log("Is get start btn focused before click: " + isFocused);
//     await browser.pause(2000);
//     await getStartedBtn.click();
//     console.log("Is get start btn focused after click: " + isFocused);
//     await browser.pause(2000);
//   });
//   xit("Should show movement to element action", async () => {
//     await browser.url(`https://webdriver.io`);
//     const getStartedLink = await $(
//       '.footer__link-item[href="/docs/gettingstarted"]'
//     );
//     browser.pause(2000);
//     await getStartedLink.scrollIntoView();
//     browser.pause(2000);
//   });
//   xit("Should show save screenshot", async () => {
//     await browser.url(`https://webdriver.io`);
//     const getStartedLink = await $(
//       '.footer__link-item[href="/docs/gettingstarted"]'
//     );
//     browser.pause(2000);
//     await getStartedLink.scrollIntoView();
//     browser.pause(2000);
//     await getStartedLink.saveScreenshot("linkscreenshot.png");
//   });
//   xit("Should switch to another window", async () => {
//     await browser.url(`https://webdriver.io`);
//     await browser.newWindow("https://google.com");
//     browser.pause(2000);
//     await browser.switchWindow(`https://webdriver.io`);
//     browser.pause(2000);
//   });
//   it("Should show waitUntil command", async () => {
//     await browser.url(`https://webdriver.io`);
//     await browser.waitUntil(
//       async () => {
//         return $('.button[href="/docs/gettingstarted"]').isDisplayed();
//       },
//       5000,
//       "Button is not displayed"
//     );
//   });
//   it("Should get HTML for certain elems", async () => {
//     await browser.url(`https://webdriver.io`);
//     const outerHtml = await $(".dropdown__menu").getHTML();
//     console.log("OuterHTML: " + outerHtml);
//     const innerHtml = await $(".dropdown__menu").getHTML(false);
//     console.log("InnerHTML: " + innerHtml);
//   });
// });
