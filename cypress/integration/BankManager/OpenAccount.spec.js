import openAccountPage from '../../pages/openAccountPage';
import homepage from '../../pages/HomePage';

describe('On Bank Manager Homepage', () => {
  context('when open a new account', () => {
    it('should create a new account successfully', () => {
      homepage.go();
      openAccountPage.create();
      openAccountPage.submit();

      const expectedMessage = 'Account created successfully with account Number';
      openAccountPage.expectedMessageShouldBe(expectedMessage);
    })
  })
})
