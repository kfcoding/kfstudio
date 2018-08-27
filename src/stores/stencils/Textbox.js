import React from 'react';
import { BaseStencil } from 'stores/stencils/BaseStencil';

export const TextboxStencil = BaseStencil
  .named('TextboxStencil')
  .props({
    w: 400,
    h: 'auto',
    type: 'textbox',
  }).actions(self => ({
    afterCreate() {
      self.props = {
        content: '',
        fontSize: 14
      }
    }
  }));
