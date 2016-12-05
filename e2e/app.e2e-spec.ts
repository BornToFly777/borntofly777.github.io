import { Ang2AppPage } from './app.po';

describe('ang2-app App', function() {
  let page: Ang2AppPage;

  beforeEach(() => {
    page = new Ang2AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
