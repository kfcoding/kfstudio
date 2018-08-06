import { types } from 'mobx-state-tree';
import { Panel } from './models/Panel';
import { Card } from './models/Card';

const Component = types
  .model('Component', {
    id: types.optional(types.string, () => new Date().getTime() + ''),
    x: 0,
    y: 0,
    z: 0,
    w: 100,
    h: 100,

    model: types.reference(types.union(Card, Panel))
  })

export const ComponentStore = types
  .model('ComponentStore', {
    components: types.array(types.union(Card, Panel))
  }).actions(self => ({
    addComponent(args) {
      switch (args.type) {
        case 'card':
          self.components.push(Card.create(args));
          break;
        case 'panel':
          self.components.push(Panel.create({
            i: args.i || new Date().getTime() + '',
            ...args
          }));
          break;
      }
    },
    removeComponent(component) {
      self.components.remove(component);
    },
    afterCreate() {
      // self.models = models;
    }
  }));