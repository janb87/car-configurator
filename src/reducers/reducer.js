export const reducer = (state = {
    selectedCardBrand: null,
    carBrands: [],
    bodyColor: "crimson"
}, action) => {

    switch (action.type) {
        case 'SELECT_CAR_BRAND':
            return {
                ...state,
                selectedCardBrand: action.value
            };
        case 'SET_CAR_BRANDS':
            return {
                ...state,
                carBrands: action.value.slice()
            };
        case 'SET_CAR_BODY_COLOR':
            return {
                 ...state,
                 bodyColor: action.value
            };
        default:
            return state;
    }

}
