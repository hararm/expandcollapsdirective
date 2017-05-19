import { ExpandcollapsdirectivePage } from './app.po';

describe('expandcollapsdirective App', () => {
  let page: ExpandcollapsdirectivePage;

  beforeEach(() => {
    page = new ExpandcollapsdirectivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
