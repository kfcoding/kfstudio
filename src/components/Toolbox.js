import React from 'react';
import { Icon } from 'antd';
import styled from 'styled-components';
import { inject } from 'mobx-react';

const Container = styled.div`
  height: 60px;
  border-top: 1px solid #ccc;
  width: 100%;
  background: #fff;
`;

@inject('store')
class Toolbox extends React.Component {
  drag = (e) => {
    console.log(e)
  }

  dragWithCustomImage = (event) => {
    var canvas = document.createElementNS('http://www.w3.org/1999/xhtml', 'canvas');
    canvas.width = canvas.height = 50;

    var ctx = canvas.getContext('2d');
    ctx.lineWidth = 40;
    ctx.moveTo(0, 0);
    ctx.lineTo(50, 50);
    ctx.moveTo(0, 50);
    ctx.lineTo(50, 0);
    ctx.stroke();

    var dt = event.dataTransfer;
    dt.setData('text/plain', 'Data to Drag');
    dt.setDragImage(canvas, 0, 0);
  }

  insert = (type) => {
    this.props.store.blockStore.addBlock({type: type, x: 0, y: 0, w: 8, h: 7})
  }

  render() {
    return (
      <Container style={this.props.style}>
        <div style={{width: '100%', height: 80, fontSize: 40, paddingLeft: 20}}>
          <Icon onClick={() => {this.insert('card')}} style={{marginRight: 30}} type="credit-card"/>
          <Icon onClick={() => {this.insert('image')}} style={{marginRight: 30}} type="picture" />
          <Icon style={{marginRight: 30}} type="video-camera" />
          <Icon type="laptop" />
        </div>
      </Container>
    )
  }
}

export default Toolbox;