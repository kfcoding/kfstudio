import { types } from 'mobx-state-tree';
import { StencilTypes } from 'stores/index';
import { CardStencil } from 'stores/stencils/Card';

const StencilType = types.union(CardStencil);

export const Page = types
  .model('Page', {
    id: types.optional(types.identifier, () => new Date().getTime() + ''),
    w: 1200,
    h: 800,
    name: 'Page',
    instances: types.array(StencilType)
  }).actions(self => ({
    addInstance(args) {
      if (args.type === 'card') {
        self.instances.push(CardStencil.create(args))
      }
    }
  }));

export const PageStore = types
  .model('PageStore', {
    pages: types.array(Page),
    currentPage: types.maybe(types.reference(Page)),
  }).actions(self => ({
    addPage() {
      let page = Page.create();
      self.pages.push(page);
      self.currentPage = page;
    },
    setCurrentPage(page) {console.log(page.id)
      self.currentPage = page;
    },
    afterCreate() {
      self.addPage();
    }
  }));