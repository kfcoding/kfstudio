import { types } from 'mobx-state-tree';
import { Panel } from './models/Panel';
import { Card } from './models/Card';
import { Model } from './Model';

export const ModelStore = types
  .model('ModelStore', {
    models: types.optional(types.map(Model), {})
  }).actions(self => ({
    afterCreate() {
      console.log('kkk')
    }
  }));