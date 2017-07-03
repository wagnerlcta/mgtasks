import { MgtasksPage } from './app.po';

describe('mgtasks App', () => {
  let page: MgtasksPage;

  beforeEach(() => {
    page = new MgtasksPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
