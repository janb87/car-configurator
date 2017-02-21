const DEFAULT_CAR_BRANDS = [{ make: 'Audi', logoUrl: 'http://www.carlogos.org/logo/Audi-emblem-2016-black-1920x1080.png' }];

export const reducer = (state = {
    selectedCarBrand: null,
    carBrands: DEFAULT_CAR_BRANDS,
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
        case 'CAR_BRANDS_FETCH_FAILED':
             return {
                ...state,
                selectedCarBrand: null,
                carBrands: DEFAULT_CAR_BRANDS.slice()
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
            let rimsColor = action.value;
            if (rimsColor.indexOf('#') === 0) {
                rimsColor = rimsColor.substring(1);
            }
            return {
                ...state,
                rimsColor
            };
        case 'SET_CAR_SIDE_NUMBER':
            let sideNumber = action.value;
            if (sideNumber > 99) {
                sideNumber = 99;
            } else if (sideNumber < 0) {
                sideNumber = 0;
            }
            return {
                ...state,
                sideNumber
            };
        default:
            return state;
    }

}
