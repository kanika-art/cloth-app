import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'antd-mobile';
import Swiper from '../../component/Swiper';
import SearchBar from '../../component/SearchBar';
import LeftMenu from '../../component/LeftMenu';
import { getSkylightList, getProductTypeList } from '../../action/common';
import './index.css';

const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: '//img.mukewang.com/szimg/59c860220001247d05400300-360-202.jpg',
  text: `name${i}`,
}));

@connect(({ common }) => ({
  skylightList: common.skylightList,
  productTypeList: common.productTypeList,
}), {
  getSkylightList,
  getProductTypeList,
})
export default class Home extends React.PureComponent {
  componentDidMount() {
    this.props.getSkylightList({ position: 0 });
    this.props.getProductTypeList({ parentLabel: 'productCategory' });
  }
  render() {
    const { skylightList, productTypeList } = this.props;
    return (
      <div>
        <Swiper data={skylightList.records} />
        <SearchBar />
        <div className="content-wrap">
          <LeftMenu tabs={productTypeList.records} />
          <div className="menu-content">
            <Grid
              hasLine={false}
              data={data}
              columnNum={2}
              renderItem={dataItem => (
                <div style={{ padding: '5px' }}>
                  <img src={dataItem.icon} style={{ width: '100%', height: 'auto' }} alt="" />
                  <div>{dataItem.text}</div>
                </div>
              )}
            />
          </div>
        </div>
      </div>
    )
  }
}
