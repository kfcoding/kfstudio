import React from 'react';
import ContentEditable from 'react-contenteditable';
import { Rnd } from 'react-rnd';
import { Card as AntdCard } from 'antd';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class Card extends React.Component {
  render() {
    const {store, instance} = this.props;
    return (
        <AntdCard style={{width: '100%', height: '100%'}} title={<ContentEditable html={instance.title}/>}>
          <ContentEditable onChange={this.cg} html={instance.content}/>
        </AntdCard>
    )
  }
}

export default Card;