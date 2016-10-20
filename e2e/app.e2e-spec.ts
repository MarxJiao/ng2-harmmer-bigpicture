import { Ng2HarmmerBigpicturePage } from './app.po';

describe('ng2-harmmer-bigpicture App', function() {
  let page: Ng2HarmmerBigpicturePage;

  beforeEach(() => {
    page = new Ng2HarmmerBigpicturePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
