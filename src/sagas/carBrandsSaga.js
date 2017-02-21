import { call, put, takeLatest } from 'redux-saga/effects';
import { setCarBrandsAction } from '../actions/actionCreators';
import { loadCarBrands } from '../services/carBrands';

function* fetchCarBrands(action) {
    try {
        const carBrands = yield call(loadCarBrands);
        yield put(setCarBrandsAction(carBrands));
    } catch (e) {
        yield put({ type: "CAR_BRANDS_FETCH_FAILED", message: e.message });
    }
}

function* carBrandsSaga() {
    yield takeLatest("CAR_BRANDS_FETCH_REQUESTED", fetchCarBrands);
}

export default carBrandsSaga;
