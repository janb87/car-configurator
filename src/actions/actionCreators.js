export const setCarBodyColor = (color) => {
    return { type: 'SET_CAR_BODY_COLOR', value: color };
}

export const setCarRimsColor = (color) => {
    return { type: 'SET_CAR_RIMS_COLOR', value: color };
}

export const selectCarBrand = (carBrand) => {
    return { type: 'SELECT_CAR_BRAND', value: carBrand };
}

export const setCarSideNumber = (sideNumber) => {
    return { type: 'SET_CAR_SIDE_NUMBER', value: sideNumber };
}
