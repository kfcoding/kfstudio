import { types } from 'mobx-state-tree';

export const Model = types
  .model('Model', {
    /**
     * basic props
     */
    type: types.identifier,
    props: types.map(types.string)
  });