import { en } from '../../translations/en';
import { ru } from './ru';
import { ptbr } from './pt-br';

// tslint:disable:no-submodule-imports
import localePtBr from 'react-intl/locale-data/pt';
import localeRu from 'react-intl/locale-data/ru';

// tslint:enable

export const customLocaleData = ([...localeRu, localePtBr]);

export type LangType = typeof en;

export const customLanguageMap = {
    ru,
    ptbr
};


