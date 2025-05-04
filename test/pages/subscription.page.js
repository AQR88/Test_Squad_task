import { $, browser } from "@wdio/globals";

class SubscriptionPage {
  get heading() {
    return $("h1#hero-section-brand-heading");
  }

  get emailInput() {
    return $('input[type="email"][name="emailAddress"]');
  }

  get countrySelect() {
    return $('select[name="country"]');
  }

  get submitButton() {
    return $('button[type="submit"]');
  }

  async waitForPageToLoad() {
    await this.heading.waitForDisplayed({ timeout: 5000 });
  }

  async fillForm(email, countryCode = "UA") {
    await this.emailInput.scrollIntoView();
    await this.emailInput.setValue(email);
    await this.countrySelect.selectByAttribute("value", countryCode);
  }

  async submitForm() {
    await this.submitButton.click();
  }
}

export default new SubscriptionPage();
