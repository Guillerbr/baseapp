// tslint:disable-next-line
import { call, put } from 'redux-saga/effects';
import { API, RequestOptions } from '../../../../../api';
import { alertPush, getCsrfToken } from '../../../../index';
import {
    sendCodeData,
    sendCodeError,
    SendCodeFetch,
    resendCode,
} from '../actions';

const sessionsConfig = (csrfToken?: string): RequestOptions => (
    csrfToken ? {
        apiVersion: 'barong',
        headers: { 'X-CSRF-Token': csrfToken },
    } : {
        apiVersion: 'barong',
    });

export function* sendCodeSaga(action: SendCodeFetch) {
    try {
        const currentCsrfToken = yield getCsrfToken();
        yield call(API.post(sessionsConfig(currentCsrfToken)), '/resource/phones', action.payload);
        yield put(sendCodeData());
        yield put(alertPush({message: ['success.phone.verification.send'], type: 'success'}));
    } catch (error) {
        if (error.message.toString() === 'resource.phone.exists') {
            yield put(resendCode(action.payload));
            yield put(alertPush({message: error.message, type: 'success'}));
        } else {
            yield put(sendCodeError(error));
            yield put(alertPush({message: error.message, code: error.code, type: 'error'}));
        }
    }
}
