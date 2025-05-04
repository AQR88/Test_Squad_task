import { expect } from "@wdio/globals";
import gitHubHomePage from "./pages/gitHubHome.page";
import gitHubSignUpPage from "./pages/gitHubSignUp.page";

describe("GitHub Registration", () => {
  it("should fill the sign-up form on GitHub", async () => {
    await gitHubHomePage.open();
    await gitHubHomePage.clickSignUp();

    const headingText = await gitHubSignUpPage.getHeadingText();
    expect(headingText).toContain("Create your free account");

    await gitHubSignUpPage.fillEmail("user123458@mail.com");
    await gitHubSignUpPage.fillPassword("superPassword852");
    await gitHubSignUpPage.fillUsername("superUser12358");
    await gitHubSignUpPage.selectCountry("Ukraine");
    await gitHubSignUpPage.clickContinue();

    await browser.pause(3000);
  });
});
