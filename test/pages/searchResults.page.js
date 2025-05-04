import { $ } from "@wdio/globals";

class SearchResultsPage {
  get resultSpan() {
    return $("span.search-match");
  }

  async waitForSearchResult() {
    await this.resultSpan.waitForDisplayed({ timeout: 10000 });
  }

  async getResultText() {
    return await this.resultSpan.getText();
  }
}

export default new SearchResultsPage();
