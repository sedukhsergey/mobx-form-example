import { observable } from 'mobx';

export const users = observable({
  name: 'some',
  value: 2,
  user: {
    one: 1,
  },
});
