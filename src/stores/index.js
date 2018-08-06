import { types, getSnapshot } from 'mobx-state-tree';
import { BlockStore } from './BlockStore';
import { ComponentStore } from './ComponentStore';
import { ModelStore } from './ModelStore';
import { BaseModel } from './models/BaseModel';
import { Stencil } from 'stores/Stencil';
import { Instance } from 'stores/Instance';
import { CardStencil } from 'stores/stencils/Card';
import { Page, PageStore } from 'stores/PageStore';

const CursorPosition = types.model('CursorPosition', {
  x: types.number,
  y: types.number
}).actions(self => ({
  setPosition(x, y) {
    self.x = x;
    self.y = y;
  }
}));

// const models = new Map([['card', Card.create()]]);

const stencils = [{
  type: 'card',
  icon: 'credit-card',
  props: {
    title: 'title',
    content: 'content'
  }
}];

export const StencilTypes = types.union(CardStencil);

export const Store = types
  .model('Store', {
    stencils: types.map(Stencil),
    instances: types.array(StencilTypes),
    pageStore: types.optional(PageStore, {
      pages: []
    }),
    dnd: false,
    activeInstance: types.maybe(types.reference(StencilTypes))
  }).actions(self => ({
    setActiveInstance(instance) {
      self.activeInstance = instance;
    },
    setDnd(flag) {
      self.dnd = flag;
    },
    createInstance(args) {
      if (args.type === 'card') {
        self.instances.push(CardStencil.create(args))
      }
    },
    afterCreate() {
      stencils.forEach(s => self.stencils.set(s.type, s));console.dir(getSnapshot(self))
    }
  }));