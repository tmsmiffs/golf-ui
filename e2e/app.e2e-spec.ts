import { GolfUiPage } from './app.po';

describe('golf-ui App', () => {
  let page: GolfUiPage;

  beforeEach(() => {
    page = new GolfUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
