import type { Module } from 'vuex';

export type Counter = {
  count: number;
};

const counter: Module<Counter, unknown> = {
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    setCount(state, payload: number) {
      state.count = payload;
    },
  },
};

export default counter;
