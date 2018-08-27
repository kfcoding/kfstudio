import React from 'react';
import { Icon } from 'antd';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import 'react-grid-layout/css/styles.css';
import Page from 'components/Page';
import SplitPane from 'react-split-pane';
import Sidebar from 'components/Sidebar';

// const Dragger = Upload.Dragger;

// const TabPane = Tabs.TabPane;

const Container = styled.div`
  background: #eee;
  position: relative;
  z-index: 0;
  overflow: auto;
  height: 100%;
  width: 100%;
  padding: 20px;
  position: relative;
`;


@inject('store')
@observer
class Content extends React.Component {
  static defaultProps = {
    className: 'layout',
    cols: {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2},
    rowHeight: 100
  };

  render() {
    const {store} = this.props;

    return (
      store.currentPage ?

        <Container onMouseDown={() => {
          store.setActiveInstance(undefined)
        }}>
          <Page page={store.currentPage}/>
        </Container>
        :
        <div></div>
    )
  }
}

export default Content;