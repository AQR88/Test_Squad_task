import { $ } from "@wdio/globals";

class gitHubHomePage {
  get signUpLink() {
    return $(
      'a[href="/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"]'
    );
  }

  async open() {
    await browser.url("https://github.com/");
  }

  async clickSignUp() {
    await this.signUpLink.waitForClickable();
    await this.signUpLink.click();
  }
}

export default new gitHubHomePage();
