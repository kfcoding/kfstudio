import { types } from 'mobx-state-tree';
import { BaseModel } from './BaseModel';

export const Panel = BaseModel
  .named('Panel')
  .props({
    /**
     * component props
     */
    type: 'panel',
    w: 400,
    h: 300,
    content: types.optional(types.string, 'panel cont'),
    padding: types.optional(types.number, 20)
  }).actions(self => ({

  }));
