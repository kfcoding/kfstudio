import { types } from 'mobx-state-tree';
import { Stencil } from 'stores/Stencil';

export const Instance = types
  .model('Instance', {
    /**
     * basic props
     */
    id: types.optional(types.identifier, new Date().getTime() + ''),
    x: 0,
    y: 0,
    z: 0,
    w: 200,
    h: 150,
    active: false,
    stencil: types.reference(Stencil),
    props: types.optional(types.map(types.string), {})
  }).views(self => ({

  })).actions(self => ({
    afterCreate() {
      self.stencil.props.forEach((v, k) => {
        self[k] = v;
        self.props.set(k, v);
      });
    }
  }));
