import type { InjectionKey } from 'vue';
import { createStore } from 'vuex';

import type { Store } from 'vuex';
import modules from './modules';
import type { Counter } from './modules/counter';

export type RootState = {
  counter: Counter;
};

export const key: InjectionKey<Store<RootState>> = Symbol();

export const store = createStore<RootState>({
  modules,
});
