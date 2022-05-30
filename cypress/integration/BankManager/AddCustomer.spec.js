import homepage from '../../pages/HomePage';
import addCustomerPage from '../../pages/AddCustomerPage';

describe('On Bank Manager Homepage', () => {
  context('when add a customer', () => {
    it('should add a new customer successfully', () => {
      homepage.go();
      addCustomerPage.add();
      addCustomerPage.submit();

      const expectedMessage = 'Customer added successfully with customer id';
      addCustomerPage.expectedMessageShouldBe(expectedMessage);
    })
  })
})
