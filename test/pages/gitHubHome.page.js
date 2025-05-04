import { $ } from "@wdio/globals";

class GitHubHomePage {
  get signUpLink() {
    return $(
      'a[href="/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"]'
    );
  }
  get jumpIntoProjectsButton() {
    return $("span=Jump into GitHub Projects");
  }
  get subscribeButton() {
    return $(
      'a.btn-mktg.mb-4.btn-muted-mktg[href="https://resources.github.com/newsletter/"]'
    );
  }
  get searchBtn() {
    return $("button.header-search-button");
  }

  get searchInput() {
    return $("#query-builder-test");
  }
  get pricingLink() {
    return $('a[href="https://github.com/pricing"]');
  }
  async goToPricingPage() {
    await this.pricingLink.waitForDisplayed();
    await this.pricingLink.click();
  }
  async clickSearchButton() {
    await this.searchBtn.waitForDisplayed();
    await this.searchBtn.click();
  }

  async enterSearchQuery(query) {
    await this.searchInput.waitForDisplayed();
    await this.searchInput.setValue(query);
  }

  async clickSubscribe() {
    await this.subscribeButton.scrollIntoView();
    await this.subscribeButton.waitForClickable();
    await this.subscribeButton.click();
  }

  async clickJumpIntoProjects() {
    await this.jumpIntoProjectsButton.scrollIntoView();
    await this.jumpIntoProjectsButton.waitForClickable();
    await this.jumpIntoProjectsButton.click();
  }

  async open() {
    await browser.url("https://github.com/");
  }

  async clickSignUp() {
    await this.signUpLink.waitForClickable();
    await this.signUpLink.click();
  }
}

export default new GitHubHomePage();
