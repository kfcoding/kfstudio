import React from 'react';
import { Icon, Card, Upload } from 'antd';
import styled from 'styled-components';
import RGL, { WidthProvider } from 'react-grid-layout';
import { inject, observer } from 'mobx-react';
import ContentEditable from 'react-contenteditable'
import 'react-grid-layout/css/styles.css';

const ReactGridLayout = WidthProvider(RGL);
const Dragger = Upload.Dragger;


const Container = styled.div`
  height: 100%;
  background: #eee;
`;

@inject('store')
@observer
class Content extends React.Component {
  static defaultProps = {
    className: 'layout',
    cols: {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2},
    rowHeight: 100
  };

  state = {
    draggable: true
  }

  rm = (block) => {
    this.props.store.blockStore.removeBlock(block);
  }

  cg = (e) => {
    console.log(e.target.value)
  }

  renderBlock = (info) => {
    let block = info;
    if (info.type === 'card') {
      return (
        <div key={info.i} style={{position: 'relative'}}>
          <span style={{position: 'absolute', zIndex: 1, right: 10, top: 16, color: '#333'}}>
            <span className='draggableHandle' style={{marginRight: 10}}><Icon type="compass"/></span>
            <Icon type="close" onClick={() => {
              this.rm(info)
            }}/>
          </span>
          <Card title={<ContentEditable html='title'/>} style={{height: '100%', overflow: 'hidden'}}>
            <div style={{}}>
              <ContentEditable onChange={this.cg}/>
            </div>
          </Card>
        </div>
      )
    } else if (block.type === 'image') {
      
      return (
        <div key={info.i} style={{position: 'relative', textAlign: 'center', background: '#fff'}}>
          <span style={{position: 'absolute', zIndex: 1, right: 10, top: 16, color: '#333'}}>
            <Icon style={{marginRight: 10}} type="edit"/>
            <span className='draggableHandle' style={{marginRight: 10}}><Icon type="compass"/></span>
            <Icon type="close" onClick={() => {
              this.rm(info)
            }}/>
          </span>
          <Dragger>
            <p className="ant-upload-drag-icon">
              <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
          </Dragger>
        </div>
      )
    }
  }

  render() {
    const {store} = this.props;
    return (
      <Container>
        <ReactGridLayout
          {...this.props}
          isDraggable={this.state.draggable}
          className="layout"
          layout={store.blockStore.blocks.toJS()} cols={24} rowHeight={30}
          width={1200}
          draggableHandle='.draggableHandle'
          style={{overflow: 'auto', height: 'calc(100vh - 88px)', paddingBottom: 30}}
          autoSize={false}
        >
          {store.blockStore.blocks.map(b => this.renderBlock(b))}
        </ReactGridLayout>
      </Container>
    )
  }
}

export default Content;