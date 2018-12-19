import React from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';

export default class LeftMenu extends React.PureComponent {
  static defaultProps = {
    tabs: [
      { title: '麻类', description: '麻类' },
      { title: '棉类', description: '棉类' },
      { title: '化纤', description: '化纤' },
      { title: '毛类', description: '毛类' },
      { title: '丝类', description: '丝类' },
    ],
  }

  onChange = (item) => {
    this.props.action({ parentLabel: item.label });
  }

  render() {
    const { tabs = [] } = this.props;
    const data = tabs.map(item => ({ ...item, title: item.description }));
    return (
      <div style={{ height: '100%' }}>
        <WhiteSpace />
        <Tabs tabs={data}
          tabBarPosition="left"
          tabDirection="vertical"
          tabBarBackgroundColor="#f3f3f3"
          onTabClick={this.onChange}
          tabBarTextStyle={{padding: '0 30px', lineHeight: '36px'}}
          renderTabBar={props => <Tabs.DefaultTabBar {...props} page={data.length} />}
        >
        </Tabs>
        <WhiteSpace />
      </div>
    )
  }
}
