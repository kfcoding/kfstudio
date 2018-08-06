import React from 'react';
import styled from 'styled-components';
import { Collapse, Icon, Card } from 'antd';
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
  render() {
    const {store} = this.props;
    return (
      <Container>
        <Icon type='plus-square-o' onClick={store.pageStore.addPage}/>
        {store.pageStore.pages.map(p => (
          <Card key={p}>
            <div onClick={() => {store.pageStore.setCurrentPage(p)}}>{p.name}</div>
          </Card>
        ))}
      </Container>
    )
  }
}

export default Sidebar;