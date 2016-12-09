import { createStore } from 'redux';
import CounterRedux from '../components/CounterRedux.html';

function reducer(state, action) {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(reducer, 0);

const component = new CounterRedux({
  target: document.querySelector('.counter-redux'),
  data: {
    state: store.getState(),
    dispatch: store.dispatch,
  },
});

store.subscribe(() => {
  component.set({ state: store.getState() });
});

export default component;
