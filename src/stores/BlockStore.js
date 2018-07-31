import { types, flow } from 'mobx-state-tree';

export const Block = types
  .model('Block', {
    i: types.string,
    x: types.number,
    y: types.number,
    w: types.number,
    h: types.number,
    type: types.string
  }).actions(self => ({

  }));

export const BlockStore = types
  .model('BlockStore', {
    blocks: types.array(Block)
  }).actions(self => ({
    addBlock(args) {
      self.blocks.push({
        i: args.i || new Date().getTime() + '',
        ...args
      })
    },
    removeBlock(block) {
      self.blocks.remove(block);
    }
  }));