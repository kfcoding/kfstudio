import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
 height: 28px;
 border-bottom: 1px solid #ccc;
 line-height: 28px;
`;

const Item = styled.div`
  margin: 0 10px;
  display: inline-block;
  cursor: pointer
`;

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
    </Menu.Item>
  </Menu>
);

class Header extends React.Component {
  render() {
    return (
      <Container>
        <Dropdown overlay={menu} trigger={['click']}>
          <Item className="" href="#">
            文件
          </Item>
        </Dropdown>
        <Dropdown overlay={menu} trigger={['click']}>
          <Item className="" href="#">
            编辑
          </Item>
        </Dropdown>
      </Container>
    )
  }
}

export default Header;