import React from 'react';
import styled from 'styled-components';
import Draggable, { DraggableCore } from 'react-draggable';
import { inject, observer } from 'mobx-react';
import Card from './components/Card';
import {Card as CardModel} from '../stores/models/Card';

const Container = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid #000;
  position: absolute;
  z-index: 1;
`;

@inject('store')
@observer
class Outline extends React.Component {

  renderComponent = () => {
    const type = this.props.store.dragType;
    if (type === 'card') {
      return (
        <Container></Container>
      )
      return (
        <Card component={CardModel.create({i: '0', x: 0, y: 0})}/>
      )
    }
  }

  render() {
    return (
      <div style={{position: 'absolute', left: this.props.x, top: this.props.y}}>
          {this.renderComponent()}
      </div>
    )
  }
}

export default Outline;