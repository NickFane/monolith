import {
  ACTION_SET_FIRST_NAME, 
  setFirstName,
  ACTION_SET_LAST_NAME,
  setLastName
} from '../actions';

describe('Journey Actions', () => {
  describe('setFirstName', () => {
    it('should create an action to set the first name', () => {
      const firstName = 'John';
      const expectedAction = {
        type: ACTION_SET_FIRST_NAME,
        payload: firstName
      };
      
      expect(setFirstName(firstName)).toEqual(expectedAction);
    });
    
    it('should create an action with the correct type', () => {
      expect(setFirstName('Any')).toHaveProperty('type', ACTION_SET_FIRST_NAME);
    });
    
    it('should include the provided firstName as payload', () => {
      const firstName = 'Alice';
      expect(setFirstName(firstName).payload).toBe(firstName);
    });
  });
  
  describe('setLastName', () => {
    it('should create an action to set the last name', () => {
      const lastName = 'Doe';
      const expectedAction = {
        type: ACTION_SET_LAST_NAME,
        payload: lastName
      };
      
      expect(setLastName(lastName)).toEqual(expectedAction);
    });
    
    it('should create an action with the correct type', () => {
      expect(setLastName('Any')).toHaveProperty('type', ACTION_SET_LAST_NAME);
    });
    
    it('should include the provided lastName as payload', () => {
      const lastName = 'Smith';
      expect(setLastName(lastName).payload).toBe(lastName);
    });
  });
});