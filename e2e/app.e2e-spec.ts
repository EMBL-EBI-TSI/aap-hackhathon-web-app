import { AapHackhathonAppPage } from './app.po';

describe('aap-hackhathon-app App', () => {
  let page: AapHackhathonAppPage;

  beforeEach(() => {
    page = new AapHackhathonAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
