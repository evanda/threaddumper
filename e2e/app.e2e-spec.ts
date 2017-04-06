import { ThreaddumperPage } from './app.po';

describe('threaddumper App', () => {
  let page: ThreaddumperPage;

  beforeEach(() => {
    page = new ThreaddumperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
