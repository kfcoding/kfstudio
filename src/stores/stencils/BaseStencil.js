import { types } from 'mobx-state-tree';

export const BaseStencil = types
  .model('BaseStencil', {
    /**
     * basic props
     */
    id: types.optional(types.identifier, new Date().getTime() + ''),
    x: 0,
    y: 0,
    z: 0,
    w: 100,
    h: 100
  });
