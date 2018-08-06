import React from 'react';
import Card from './components/Card';
import Textbox from './components/Textbox';
import Panel from './components/Panel';
import { Rnd } from 'react-rnd';
import { inject, observer } from 'mobx-react';
import {Icon} from 'antd';

@inject('store')
@observer
class UIComponent extends React.Component {

  renderComponent() {
    if (this.props.instance.type === 'card') {
      return (
        <Card instance={this.props.instance}/>
      )
    } else if (this.props.component.type === 'panel') {
      return (
        <Panel component={this.props.component}/>
      )
    }
  }

  onClick = (e) => {
    this.props.store.setActiveInstance(this.props.instance);
    e.stopPropagation();
  }

  render() {
    const {instance, store} = this.props;console.log(this.props.select)
    return (
      <Rnd bounds='parent' dragHandleClassName='dragHandle'
           style={{cursor: store.dnd ? 'move' : 'auto', borderWidth: this.props.active ? 1 : 0, borderColor: '#0e0', borderStyle: 'solid'}}
           default={{x: instance.x - instance.x % 10, y: instance.y - instance.y % 10, height: instance.h, width: instance.w}}
           bounds='parent' dragGrid={[10, 10]} resizeGrid={[10, 10]} onMouseDown={this.onClick}>
        {this.renderComponent()}
        {this.props.active &&
        <div style={{width: 40, height: 20, position: 'absolute', right: 2, top: 2, textAlign: 'right', letterSpacing: 4}}>
          <Icon className='dragHandle' type="menu-unfold"/>
          <Icon type="close" onClick={() => {store.pageStore.currentPage.removeInstance(instance)}}/>
        </div>
        }
      </Rnd>
    )
  }
}

export default UIComponent;