import { $ } from "@wdio/globals";

class SearchResultsPage {
  // Елемент, що містить результат пошуку
  get resultSpan() {
    return $("span.search-match");
  }

  // Перевірити, чи з'явився результат пошуку
  async waitForSearchResult() {
    await this.resultSpan.waitForDisplayed({ timeout: 10000 });
  }

  // Отримати текст результату
  async getResultText() {
    return await this.resultSpan.getText();
  }
}

export default new SearchResultsPage();
