import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import UIComponent from 'components/UIComponent';
import {inject, observer} from 'mobx-react';


const Container = styled.div`
  width: 1200px;
  height: 800px;
  margin: 0 auto;
  background: #fff;
  position: relative;
`;

@inject('store')
@observer
class Page extends React.Component {

  state = {
    rect: null
  }

  componentDidMount() {
    if (ReactDOM.findDOMNode(this.refs.dom))
      this.state.rect = ReactDOM.findDOMNode(this.refs.dom).getBoundingClientRect();
  }

  onDragOver = e => {
    e.stopPropagation();
    e.preventDefault();
  }

  onDrop = e => {
    const {page} = this.props;
    page.addInstance({
      x: e.pageX - this.state.rect.x,
      y: e.pageY - this.state.rect.y,
      type: e.dataTransfer.getData('text/plain')
    });
  }

  render() {
    let {page, store} = this.props;
    return (
      <Container ref='dom' onDragOver={this.onDragOver} onDrop={this.onDrop} onMouseDown={() => {store.setActiveInstance(undefined)}}>
        {page.instances.map(i => <UIComponent key={i} active={store.activeInstance === i} instance={i}/>)}
      </Container>
    )
  }
}

export default Page;