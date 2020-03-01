import { AngularTest1Page } from './app.po';

describe('angular-test1 App', () => {
  let page: AngularTest1Page;

  beforeEach(() => {
    page = new AngularTest1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
