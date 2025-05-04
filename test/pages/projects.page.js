import { $ } from "@wdio/globals";

class ProjectsPage {
  get heading() {
    return $("h1=Project planning for developers");
  }

  get contactSalesButton() {
    return $('a[href*="/enterprise/contact"]');
  }

  async waitForHeading() {
    await this.heading.waitForDisplayed({ timeout: 5000 });
  }

  async isHeadingDisplayed() {
    return this.heading.isDisplayed();
  }

  async clickContactSales() {
    await this.contactSalesButton.waitForDisplayed({ timeout: 5000 });
    await this.contactSalesButton.click();
  }
}

export default new ProjectsPage();
