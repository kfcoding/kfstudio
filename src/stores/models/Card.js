import { BaseModel } from './BaseModel';
import { types } from 'mobx-state-tree';

export const Card = BaseModel
  .named('Card')
  .props({
    type: 'card',
    w: 500,
    h: 200,
    title: '标题',
    content: '内容'
  }).views(self => ({

  })).actions(self => ({
    setTitle(title) {
      self.title = title;
    },
    setContent(content) {
      self.content = content;
    }
  }));
