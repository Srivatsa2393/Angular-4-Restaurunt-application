import { AppPage } from './app.po';

<<<<<<< HEAD
describe('recipe-app App', () => {
=======
describe('restraunt-app App', () => {
>>>>>>> 392631671c372045fd555be54d919d72aff00049
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
