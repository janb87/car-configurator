import { reducer } from './reducer';
import { setCarBodyColor, setCarBrands } from '../actions/actionCreators';
import deepFreeze from 'deep-freeze';

it('does not mutate the existing state object', () => {
    const stateBefore = {
        selectedCarBrand: null,
        carBrands: [],
        bodyColor: 'crimson',
        rimsType: 'cross',
        rimsColor: 'black',
        sideNumber: 13
    };
    const stateAfter = {
        selectedCarBrand: 'Car1',
        carBrands: [{ make: 'Car1', logoUrl: 'http://logo.url' }],
        bodyColor: 'green',
        rimsType: 'cross',
        rimsColor: 'black',
        sideNumber: 13
    };

    // Check if the reducer does not mutate the existing state object
    const setCarBodyColorAction = setCarBodyColor('green');
    const setCarBrandsAction = setCarBrands([{ make: 'Car1', logoUrl: 'http://logo.url' }]);
    deepFreeze(stateBefore);
    deepFreeze(setCarBodyColorAction);
    deepFreeze(setCarBrandsAction);

    const newState = reducer(stateBefore, setCarBodyColorAction);
    const latestState = reducer(newState, setCarBrandsAction);
    expect(latestState).toEqual(stateAfter);
});
