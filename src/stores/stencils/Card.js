import React from 'react';
import {types} from 'mobx-state-tree';
import { Card as AntdCard } from 'antd';
import ContentEditable from 'react-contenteditable';
import { BaseStencil } from 'stores/stencils/BaseStencil';

export const CardStencil = BaseStencil
  .named('CardStencil')
  .props({
    w: 300,
    h: 200,
    type: 'card',
    title: '标题',
    content: '内容'
  });
