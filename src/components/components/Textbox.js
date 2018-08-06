import React from 'react';
import ContentEditable from 'react-contenteditable';
import { Rnd } from 'react-rnd';
import { Card as AntdCard } from 'antd';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class Textbox extends React.Component {
  render() {
    const {store, component} = this.props;
    return (

          <ContentEditable onChange={this.cg} html={component.content} style={{background: '#fff', height: '100%'}}/>

    )
  }
}

export default Textbox;