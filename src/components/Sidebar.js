import React from 'react';
import styled from 'styled-components';
import { Collapse, Icon, Card, List, Dropdown, Menu } from 'antd';
import { inject, observer } from 'mobx-react';

const Panel = Collapse.Panel;

const Container = styled.div`
  height: 100%;
  background: #fff;
  overflow: auto;
`;

@inject('store')
@observer
class Sidebar extends React.Component {

  state = {
    currentPage: null
  }

  addPage() {
    let name = window.prompt('请输入页面标题', '新页面');
    this.props.store.addPage(name);
  }
  
  render() {
    const {store} = this.props;

    const menu = (
      <Menu onClick={({item, key, path}) => {
        if (key === 'delete') {
          if (window.confirm('确认要删除"' + this.state.currentPage.name + '"吗？')) {
            store.removePage(this.state.currentPage)
          }
        } else if (key === 'rename') {
          let name = window.prompt('请输入页面标题', this.state.currentPage.name);
          store.currentPage.setName(name);
        } else if (key === 'copy') {
          store.copyPage(this.state.currentPage);
        }
      }}>
        <Menu.Item key="rename"><Icon type="edit" /> 重命名</Menu.Item>
        {/*<Menu.Item key="copy"><Icon type="copy" /> 复制</Menu.Item>*/}
        <Menu.Divider></Menu.Divider>
        <Menu.Item key="delete" style={{color: '#d1241e'}}><Icon type="delete" /> 删除</Menu.Item>
      </Menu>
    );

    return (
      <Container>
        <div style={{height: 30, lineHeight: '30px', padding: '0 5px', borderBottom: '1px solid #ccc'}}>
          页面列表
          <div style={{float: 'right'}}>
          <Icon type='plus-square-o' onClick={() => this.addPage()} style={{cursor: 'pointer'}}/>
          </div>
        </div>
        <Menu style={{height: 'calc(100% - 30px)', overflowY: 'auto', overflowX: 'hidden', width: '10'}} selectedKeys={[store.currentPage && store.currentPage.id]} mode='inline'>
        {store.pages.map(p => (
          <Menu.Item key={p.id} onMouseDown={() => {store.setCurrentPage(p)}} draggable={true}>
            <Dropdown overlay={menu} trigger={['contextMenu']} onVisibleChange={visible => this.setState({currentPage: p})}>
              <div>{p.name}</div>
            </Dropdown>
          </Menu.Item>
        ))}
        </Menu>
      </Container>
    )
  }
}

export default Sidebar;