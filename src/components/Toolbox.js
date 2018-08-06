import React from 'react';
import { Icon } from 'antd';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import ComponentIcon from './ComponentIcon';
import {values} from 'mobx';

const Container = styled.div`
  height: 30px;
  border-bottom: 1px solid #ccc;
  width: 100%;
  // background: #fff;
  position: relative;
  z-index: 1;
  flex: 0 1 auto;
`;

@inject('store')
@observer
class Toolbox extends React.Component {

  render() {
    const {store} = this.props;
    return (
      <Container style={this.props.style}>
        <div style={{width: '100%', height: 30, fontSize: 20, paddingLeft: 20}}>
          {/*<Icon onMouseDown={(e) => {this.insert('card', e)}} style={{marginRight: 30}} type="credit-card"/>*/}
          {/*<Icon onClick={() => {this.insert('image')}} style={{marginRight: 30}} type="picture" />*/}
          {/*<Icon onDrag={(e) => {this.drag(e)}} draggable={true} style={{marginRight: 30}} type="video-camera" />*/}
          {/*<Icon onClick={() => {this.insert('layout')}} type="appstore-o" />*/}

          {/*{values(store.stencils).map(s => <ComponentIcon key={s.type} type={s.type} icon={<Icon type={s.icon}/>}/>)}*/}
          <ComponentIcon type='card' icon={<Icon type="credit-card"/>}/>
          <ComponentIcon type='panel' icon={<Icon type="profile"/>}/>
        </div>
      </Container>
    )
  }
}

export default Toolbox;