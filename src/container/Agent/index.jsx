import React from 'react';
import { ListView } from 'antd-mobile';
import { getAgentList } from '../../action/common';
import './index.css';

const NUM_ROWS = 10;
let pageIndex = 0;

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      isLoading: true,
    };
  }

  async componentDidMount() {
    this.rData = await this.genData();
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.rData),
      isLoading: false,
    });
  }

  genData = async (pIndex = 0) => {
    const result = await getAgentList({
      limit: NUM_ROWS,
      page: pIndex + 1,
    });
    return result && result.records;
  }

  onEndReached = async (event) => {
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log('reach end', event);
    this.setState({ isLoading: true });
    const data = await this.genData(++pageIndex);
    this.rData = { ...this.rData, ...data };
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.rData),
      isLoading: false,
    });
  }

  render() {
    const row = (rowData, sectionID, rowID) => {
      return (
        <div className="item" key={rowID}>
          <a href="/">
            <img src="https://cbu01.alicdn.com/img/ibank/2018/987/616/8977616789_728144911.310x310.jpg" alt="test" />
            <p>供应商一</p>
          </a>
        </div>
      );
    };
    return (
      <div className="agent-page">
        <ListView
          ref={el => this.lv = el}
          dataSource={this.state.dataSource}
          renderFooter={() => (<div style={{ padding: 10, textAlign: 'center' }}>
            {this.state.isLoading ? 'Loading...' : 'Loaded'}
          </div>)}
          renderRow={row}
          className="am-list"
          pageSize={1}
          useBodyScroll
          scrollRenderAheadDistance={500}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={10}
        />
      </div>
    );
  }
}
