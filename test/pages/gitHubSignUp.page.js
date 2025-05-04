import { $, browser } from "@wdio/globals";

class gitHubSignUpPage {
  get heading() {
    return $("h1");
  }

  get emailInput() {
    return $("input#email");
  }

  get passwordInput() {
    return $("input#password");
  }

  get usernameInput() {
    return $("input#login");
  }

  get countryDropdown() {
    return $("button.country-select-button");
  }

  get countryFilter() {
    return $('input[name="filter"]');
  }

  get continueButton() {
    return $("button.js-octocaptcha-load-captcha");
  }

  async getHeadingText() {
    await this.heading.waitForDisplayed();
    return this.heading.getText();
  }

  async fillEmail(email) {
    await this.emailInput.waitForDisplayed();
    await this.emailInput.setValue(email);
  }

  async fillPassword(password) {
    await this.passwordInput.waitForDisplayed();
    await this.passwordInput.setValue(password);
  }

  async fillUsername(username) {
    await this.usernameInput.waitForDisplayed();
    await this.usernameInput.setValue(username);
  }

  async selectCountry(countryName = "Ukraine") {
    await this.countryDropdown.click();
    await this.countryFilter.setValue(countryName);
    await browser.keys("Enter");
  }

  async clickContinue() {
    await this.continueButton.click();
  }
}

export default new gitHubSignUpPage();
