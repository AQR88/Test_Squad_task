import { $ } from "@wdio/globals";

class GitHubPricingPage {
  get pricingHeader() {
    return $("h1.h2-mktg");
  }

  get compareFeaturesLink() {
    return $('a[href="#compare-features"]');
  }

  get compareHeader() {
    return $("h1.h1");
  }

  async verifyPricingHeader() {
    await this.pricingHeader.waitForDisplayed();
    const headerText = await this.pricingHeader.getText();
    return headerText;
  }

  async compareAllFeatures() {
    await this.compareFeaturesLink.scrollIntoView();
    await this.compareFeaturesLink.waitForDisplayed();
    await this.compareFeaturesLink.click();
  }

  async verifyCompareHeader() {
    await this.compareHeader.waitForDisplayed();
    const compareHeaderText = await this.compareHeader.getText();
    return compareHeaderText;
  }
}

export default new GitHubPricingPage();
