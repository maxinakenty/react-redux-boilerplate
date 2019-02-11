import { rootReducer } from './root-reducer';

test('reducers', () => {
  expect(rootReducer(undefined, {})).toEqual({ counter: 0 });
});
