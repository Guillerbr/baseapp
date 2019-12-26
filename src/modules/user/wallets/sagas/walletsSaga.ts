// tslint:disable-next-line
import { call, put } from 'redux-saga/effects';
import { API, RequestOptions } from '../../../../api';
import { alertPush, getCsrfToken } from '../../../index';
import { walletsData, walletsError } from '../actions';

const walletsOptions = (csrfToken?: string): RequestOptions => (
    csrfToken ? {
        apiVersion: 'peatio',
        headers: { 'X-CSRF-Token': csrfToken },
    } : {
        apiVersion: 'peatio',
    });

const currenciesOptions: RequestOptions = {
    apiVersion: 'peatio',
};

export function* walletsSaga() {
    try {
        const currentCsrfToken = yield getCsrfToken();
        const accounts = yield call(API.get(walletsOptions(currentCsrfToken)), '/account/balances');
        const currencies = yield call(API.get(currenciesOptions), '/public/currencies');

        const accountsByCurrencies = currencies.map(currency => {
            let walletInfo = accounts.find(wallet => wallet.currency === currency.id);

            if (!walletInfo) {
                walletInfo = {
                    balance: 0,
                    currency: currency.id,
                    locked: 0,
                };
            }

            return ({
                ...walletInfo,
                name: currency.name,
                explorerTransaction: currency!.explorer_transaction,
                explorerAddress: currency!.explorer_address,
                fee: currency!.withdraw_fee,
                type: currency!.type,
                fixed: currency!.precision,
                iconUrl: currency.icon_url,
            });
        });

        yield put(walletsData(accountsByCurrencies));
    } catch (error) {
        yield put(walletsError(error));
        if (error.message.toString() !== 'authz.missing_csrf_token') {
            yield put(alertPush({message: error.message, code: error.code, type: 'error'}));
        }
    }
}
