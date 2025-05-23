let currentArticleId = '';
describe('Пользователь заходит на страницу статьи', () => {
  describe('Работа с API', () => {
    beforeEach(() => {
      cy.login();
      cy.createArticle().then((article) => {
        currentArticleId = article.id;
        cy.visit(`articles/${article.id}`);
      });
    });
    afterEach(() => {
      cy.removeArticle(currentArticleId);
    });

    it.skip('И видит содержимое статьи', () => {
      cy.getByTestId('ArticleDetails.Info').should('exist');
    });
    it.skip('И видит список рекоммендаций', () => {
      cy.getByTestId('ArticleRecommendationsList').should('exist');
    });
    it('И оставляет комментарий', () => {
      cy.getByTestId('ArticleDetails.Info');
      cy.getByTestId('AddCommentForm').scrollIntoView();
      cy.addComment('text');
      cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });
    it('И ставит оценку', () => {
      cy.getByTestId('ArticleDetails.Info');
      cy.getByTestId('RatingCard').scrollIntoView();
      cy.setRate(4, 'feedback');
      cy.get('[data-selected=true]').should('have.length', 4);
    });
  });

  describe('Работа на фикстурах', () => {
    beforeEach(() => {
      cy.login();
      cy.createArticle().then((article) => {
        currentArticleId = article.id;
        cy.visit(`articles/${article.id}`);
      });
    });
    afterEach(() => {
      cy.removeArticle(currentArticleId);
    });

    it('И ставит оценку (на стабах)', () => {
      cy.intercept('GET', '**/articles/*', {
        fixture: 'article-details.json',
      }); //mock data
      cy.getByTestId('ArticleDetails.Info');
      cy.getByTestId('RatingCard').scrollIntoView();
      cy.setRate(4, 'feedback');
      cy.get('[data-selected=true]').should('have.length', 4);
    });
  });
});
