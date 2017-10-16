import { InjectionToken } from '@angular/core';

import { IReduxModuleChildConfig, IReduxModuleRootConfig } from './interfaces';

export const REDUX_ROOT_MODULE_CONFIG = new InjectionToken<IReduxModuleRootConfig>('REDUX_ROOT_MODULE_CONFIG');
export const REDUX_CHILD_MODULE_CONFIG = new InjectionToken<IReduxModuleChildConfig>('REDUX_CHILD_MODULE_CONFIG');
