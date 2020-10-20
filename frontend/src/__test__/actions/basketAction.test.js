import * as actions from '../../action/basketAction'
import configureStore from 'redux-mock-store'

const mockStore = configureStore()
const store = mockStore()

describe('Actions', () => {
    
    beforeEach(() => {
        store.clearActions()
    })

    it('should create an action to add to the basket', () => {
        const expectedAction = {
            type: "ADD_TO_BASKET",
            
        }
        expect(store.getActions()).toMatchSnapshot()
    })

    it('should increase quantity of item', () => {
        const expectedAction = {
            type: "ADD_QUANTITY",
            
        }
        expect(store.getActions()).toMatchSnapshot()
    })
})