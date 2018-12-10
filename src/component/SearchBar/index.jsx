import React from 'react';
import { SearchBar } from 'antd-mobile';

export default class Search extends React.PureComponent {
  render() {
    return (
      <SearchBar
        placeholder="搜索商品或商家"
        ref={ref => this.manualFocusInst = ref}
      />
    )
  }
}
