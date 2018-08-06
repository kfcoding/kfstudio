import React from 'react';
import { Icon } from 'antd';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-grid-layout/css/styles.css';
import ReactDOM from 'react-dom';
import UIComponent from './UIComponent';
import View from 'react-flexbox'
import Page from 'components/Page';

// const Dragger = Upload.Dragger;

// const TabPane = Tabs.TabPane;

const Container = styled.div`
  background: #eee;
  position: relative;
  z-index: 0;
  overflow: auto;
  height: 100%;
  // flex: 1 1 auto;
  padding: 30px;
`;


@inject('store')
@observer
class Content extends React.Component {
  static defaultProps = {
    className: 'layout',
    cols: {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2},
    rowHeight: 100
  };


  rm = (block) => {
    this.props.store.blockStore.removeBlock(block);
  }

  cg = (e) => {
    console.log(e.target.value)
  }

  // renderBlock = (info) => {
  //   console.log(info)
  //   let store = this.props.store;
  //   let block = info, b = info, component = info;
  //   if (info.type === 'card') {
  //     return (
  //       <Card key={component} component={component}/>
  //     )
  //   } else if (block.type === 'image') {
  //
  //     return (
  //       <div key={info.i} style={{position: 'relative', overflow: 'hidden'}}>
  //         <Dragger>
  //           <p className="ant-upload-drag-icon">
  //             <Icon type="inbox"/>
  //           </p>
  //           <p className="ant-upload-text">Click or drag file to this area to upload</p>
  //           <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company
  //             data or other band files</p>
  //         </Dragger>
  //       </div>
  //     )
  //   } else if (block.type === 'layout') {
  //     return (
  //       <div
  //         key={block.i}
  //         style={{background: '#fff'}}
  //       >
  //         <SplitPane
  //           defaultSize={200}
  //         >
  //           <ContentEditable html='123'/>
  //           <ContentEditable html='321'/>
  //         </SplitPane>
  //       </div>
  //     )
  //   } else if (component.type === 'panel') {
  //     return (
  //       <Rnd key={info.i} disableDragging={!store.dnd} bounds='parent'
  //            style={{
  //              background: '#fff',
  //              border: '1px solid #e8e8e8',
  //              cursor: store.dnd ? 'move' : 'auto',
  //              overflow: 'scroll'
  //            }}
  //            default={{x: b.x - b.x % 10, y: b.y - b.y % 10, width: 400, height: 'auto'}}
  //            bounds='parent' dragGrid={[10, 10]} resizeGrid={[10, 10]}>
  //         <ContentEditable onChange={this.cg} html={component.content}/>
  //       </Rnd>
  //     )
  //   }
  // }

  render() {
    const {store} = this.props;

    return (
        <Container>
          {store.pageStore.currentPage &&
          <Page page={store.pageStore.currentPage}/>
          }
        </Container>
    )
  }
}

export default Content;