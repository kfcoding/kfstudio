import { types } from 'mobx-state-tree';

export const BaseModel = types
  .model('BaseComponent', {
    /**
     * basic props
     */
    id: types.optional(types.string, new Date().getTime() + ''),
    x: 0,
    y: 0,
    z: 0,
    w: 100,
    h: 100,
    active: false
  });
