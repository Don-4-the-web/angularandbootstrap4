import { Bs4AppPage } from './app.po';

describe('bs4-app App', () => {
  let page: Bs4AppPage;

  beforeEach(() => {
    page = new Bs4AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
