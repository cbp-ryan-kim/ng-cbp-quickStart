import { NgCbpQuickStartPage } from './app.po';

describe('ng-cbp-quick-start App', () => {
  let page: NgCbpQuickStartPage;

  beforeEach(() => {
    page = new NgCbpQuickStartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
