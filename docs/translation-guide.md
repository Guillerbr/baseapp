# Tutorial to do native translation to multiple languages

## Here all default translations: https://github.com/openware/baseapp/blob/master/src/translations/en.ts 
## And here custom: https://github.com/openware/baseapp/tree/master/src/custom/translations




## The dependency library used to handle translations: 
# react-intl

```bash
$ react-intl
```


## By default use a .svg file for the country's flag, in 24px by 24px format

## The image with the flag logo must be inserted in:
### src/assets/images/sidebar


## The translations must start in the directory: 
### src/custom/translations/index.ts

```bash
src/custom/translations/index.ts
```


```bash

import { en } from '../../translations/en';
import { ru } from './ru';

//add you translation import { pt } from './pt'

// tslint:disable:no-submodule-imports 

import localeRu from 'react-intl/locale-data/ru'; 
// tslint:enable

//add you translation import localePt from 'react-intl/locale-data/pt';

export const customLocaleData = ([...localeRu]);

export type LangType = typeof en;

export const customLanguageMap = { ru,

};

```

Use in YARN 1.22 Version
