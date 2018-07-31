import { types, flow } from 'mobx-state-tree';
import { BlockStore } from './BlockStore';

export const Store = types
  .model('Store', {
    blockStore: types.optional(BlockStore, {
      blocks: []
    })
  }).actions(self => ({

  }));