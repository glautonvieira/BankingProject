import homepage from '../../pages/HomePage';
import customersPage from '../../pages/CustomersPage';

describe('On Bank Manager Homepage', () => {
  context('when search for a customer', () => {
    it('should find the customer successfully', () => {
      homepage.go();
      customersPage.search();
    })

    it('should be able to delete a customer', () => {
      customersPage.delete();

      const expectedMessage = 'Customer deleted successfully';
      customersPage.expectedMessageShouldBe(expectedMessage);
    })
  })
})
