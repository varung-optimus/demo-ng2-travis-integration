import { InsightIIIRIPage } from './app.po';

describe('insight-iii-ri App', function() {
  let page: InsightIIIRIPage;

  beforeEach(() => {
    page = new InsightIIIRIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
