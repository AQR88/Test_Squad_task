import { $, browser, expect } from "@wdio/globals";

describe("GitHub Registration", () => {
  it("should fill the sign-up form on GitHub", async () => {
    // Зайти на головну сторінку
    await browser.url("https://github.com/");

    // Натиснути "Sign up"
    const signUpLink = await $(
      'a[href="/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"]'
    );
    await signUpLink.click();

    // Чекаємо на появу інпуту email
    const emailInput = await $("input#email");
    await emailInput.waitForDisplayed({ timeout: 5000 });

    // Перевірити наявність тексту "Create your free account"
    const heading = await $("h1");
    const headingText = await heading.getText();
    expect(headingText).toContain("Create your free account");

    // Ввести тестові дані
    await emailInput.setValue("user123458@mail.com");

    const passwordInput = await $("input#password");
    await passwordInput.waitForDisplayed({ timeout: 5000 });
    await passwordInput.setValue("superPassword852");

    const usernameInput = await $("input#login");
    await usernameInput.waitForDisplayed({ timeout: 5000 });
    await usernameInput.setValue("superUser12358");

    // Вибрати країну
    const countryDropdown = await $("button.country-select-button");
    await countryDropdown.click();

    // Ввести "Ukraine" у поле пошуку
    const countryFilter = await $('input[name="filter"]');
    await countryFilter.setValue("Ukraine");

    // Натиснути на опцію "Ukraine"
    const countryOption = await $(
      '//li[@role="option"]//span[text()="Ukraine"]'
    );
    await browser.keys("Enter");

    // Натиснути кнопку Continue
    const continueButton = await $("button.js-octocaptcha-load-captcha");

    await continueButton.click();

    await browser.pause(3000);
  });

  it("should navigate to GitHub Projects and verify content", async () => {
    // Зайти на головну сторінку
    await browser.url("https://github.com/");

    // Скрол до кнопки "Jump into GitHub Projects"
    const jumpIntoProjectsButton = await $("span=Jump into GitHub Projects");
    await jumpIntoProjectsButton.scrollIntoView();
    // await expect(jumpIntoProjectsButton).toBeDisplayed();

    // Клік на кнопку
    await jumpIntoProjectsButton.click();

    // Перевірка заголовка на новій сторінці
    const pageHeading = await $("h1=Project planning for developers");
    await pageHeading.waitForDisplayed({ timeout: 5000 });
    await expect(pageHeading).toBeDisplayed();

    // Пошук кнопки "Contact sales"
    const contactSalesBtn = await $('a[href*="/enterprise/contact"]');
    await contactSalesBtn.waitForDisplayed({ timeout: 5000 });

    // Клік на "Contact sales"
    await contactSalesBtn.click();

    await browser.pause(3000);
  });

  it("should navigate to subscription page and fill the form", async () => {
    await browser.url("https://github.com/");

    const subscribeBtn = await $(
      'a.btn-mktg.mb-4.btn-muted-mktg[href="https://resources.github.com/newsletter/"]'
    );
    await subscribeBtn.scrollIntoView();
    await expect(subscribeBtn).toBeClickable();
    await subscribeBtn.click();

    // ⏳ Чекаємо, поки завантажиться сторінка
    await browser.pause(2000);

    // Перевірка заголовка
    const heading = await $("h1#hero-section-brand-heading");
    await expect(heading).toBeDisplayed();

    // Email
    const emailInput = await $('input[type="email"][name="emailAddress"]');
    await emailInput.setValue("user123458@mail.com");

    // Країна
    const countrySelect = await $('select[name="country"]');
    await countrySelect.selectByAttribute("value", "UA");

    // Submit
    const submitBtn = await $('button[type="submit"]');
    await submitBtn.click();

    // Опціонально: перевірка, чи з'явилось підтвердження
    await browser.pause(2000);
  });
  it('should search for "act" and verify result appears', async () => {
    await browser.url("https://github.com/");

    // Натискаємо кнопку "Search or jump to..."
    const searchBtn = await $("button.header-search-button");
    await searchBtn.waitForDisplayed();
    await searchBtn.click();

    // Очікуємо на поле вводу
    const searchInput = await $("#query-builder-test");
    await searchInput.waitForDisplayed();

    // Вводимо "act" і тиснемо Enter
    await searchInput.setValue("act");
    await browser.keys("Enter");

    // Очікуємо на появу результатів
    const resultSpan = await $("span.search-match");
    await resultSpan.waitForDisplayed({ timeout: 10000 });

    // Перевіряємо, що текст містить "act"
    const resultText = await resultSpan.getText();
    expect(resultText).toHaveText("act");
  });
  it("should navigate to the pricing page, check the title, scroll, and compare features", async () => {
    // Перехід на головну сторінку GitHub
    await browser.url("https://github.com/");

    // Знаходимо та клікаємо на посилання "Pricing"
    const pricingLink = await $('a[href="https://github.com/pricing"]');
    await pricingLink.waitForDisplayed();
    await pricingLink.click();

    // Перевіряємо, що на сторінці є заголовок "Try the Copilot-powered platform"
    const pricingHeader = await $("h1.h2-mktg");
    await pricingHeader.waitForDisplayed();
    const headerText = await pricingHeader.getText();
    expect(headerText).toHaveText("Try the Copilot-powered platform");

    // Скролимо до елемента "Compare all features"
    const compareFeaturesLink = await $('a[href="#compare-features"]');
    await compareFeaturesLink.scrollIntoView();
    await compareFeaturesLink.waitForDisplayed();
    await compareFeaturesLink.click();

    // Перевіряємо, що на сторінці з’явився заголовок "Compare features"
    const compareHeader = await $("h1.h1");
    await compareHeader.waitForDisplayed();
    const compareHeaderText = await compareHeader.getText();
    expect(compareHeaderText).toHaveText("Compare features");
  });
});
