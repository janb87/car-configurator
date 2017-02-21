export const reducer = (state = {
    selectedCarBrand: null,
    carBrands: [],
    bodyColor: 'crimson',
    rimsType: 'basic', // Can be basic, cross or star
    rimsColor: 'c0c0c0',
    sideNumber: 23
}, action) => {
    switch (action.type) {
        case 'SELECT_CAR_BRAND':
            return {
                ...state,
                selectedCarBrand: action.value
            };
        case 'SET_CAR_BRANDS':
            const selectedCarBrand = state.selectedCarBrand ||
                (Array.isArray(action.value) && action.value[0] ? action.value[0].make : null);
            return {
                ...state,
                selectedCarBrand,
                carBrands: action.value.slice()
            };
        case 'SET_CAR_BODY_COLOR':
            return {
                ...state,
                bodyColor: action.value
            };
        case 'SET_CAR_RIMS_TYPE':
            return {
                ...state,
                rimsType: action.value
            };
        case 'SET_CAR_RIMS_COLOR':
            return {
                ...state,
                rimsColor: action.value
            };
        case 'SET_CAR_SIDE_NUMBER':
            return {
                ...state,
                sideNumber: action.value
            };
        default:
            return state;
    }

}
