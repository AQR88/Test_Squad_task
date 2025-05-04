import { browser, expect } from "@wdio/globals";
import GitHubHomePage from "./pages/gitHubHome.page";
import gitHubSignUpPage from "./pages/gitHubSignUp.page";
import ProjectsPage from "./pages/projects.page";
import SubscriptionPage from "./pages/subscription.page";
import SearchResultsPage from "./pages/searchResults.page";
import GitHubPricingPage from "./pages/githubPricing.page";

describe("GitHub Registration", () => {
  it("should fill the sign-up form on GitHub", async () => {
    await GitHubHomePage.open();
    await GitHubHomePage.clickSignUp();

    const headingText = await gitHubSignUpPage.getHeadingText();
    expect(headingText).toContain("Create your free account");

    await gitHubSignUpPage.fillEmail("user123458@mail.com");
    await gitHubSignUpPage.fillPassword("superPassword852");
    await gitHubSignUpPage.fillUsername("superUser12358");
    await gitHubSignUpPage.selectCountry("Ukraine");
    await gitHubSignUpPage.clickContinue();

    await browser.pause(3000);
  });

  it("should navigate to GitHub Projects and verify content", async () => {
    await GitHubHomePage.open();
    await GitHubHomePage.clickJumpIntoProjects();

    await ProjectsPage.waitForHeading();
    expect(await ProjectsPage.isHeadingDisplayed()).toBeExisting(true);

    await ProjectsPage.clickContactSales();

    await browser.pause(3000);
  });

  it("should navigate to subscription page and fill the form", async () => {
    await GitHubHomePage.open();
    await GitHubHomePage.clickSubscribe();

    await SubscriptionPage.waitForPageToLoad();
    expect(await SubscriptionPage.heading.isDisplayed()).toBeExisting(true);

    await SubscriptionPage.fillForm("user123458@mail.com", "UA");
    await browser.pause(2000);
    await SubscriptionPage.submitForm();

    await browser.pause(3000);
  });

  it('should search for "act" and verify result appears', async () => {
    await GitHubHomePage.open();

    await GitHubHomePage.clickSearchButton();

    await GitHubHomePage.enterSearchQuery("act");
    await browser.keys("Enter");

    await SearchResultsPage.waitForSearchResult();

    const resultText = await SearchResultsPage.getResultText();
    expect(resultText).toHaveText("act");

    await browser.pause(3000);
  });

  it("should navigate to the pricing page, check the title, scroll, and compare features", async () => {
    await GitHubHomePage.open();

    await GitHubHomePage.goToPricingPage();

    const headerText = await GitHubPricingPage.verifyPricingHeader();
    expect(headerText).toHaveText("Try the Copilot-powered platform");

    await GitHubPricingPage.compareAllFeatures();

    const compareHeaderText = await GitHubPricingPage.verifyCompareHeader();
    expect(compareHeaderText).toHaveText("Compare features");

    await browser.pause(3000);
  });
});
