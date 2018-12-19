import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'antd-mobile';
import Swiper from '../../component/Swiper';
import SearchBar from '../../component/SearchBar';
import LeftMenu from '../../component/LeftMenu';
import { getSkylightList, getProductTypeList, getProductTypeSecond } from '../../action/common';
import './index.css';

@connect(({ common }) => ({
  skylightList: common.skylightList,
  productTypeList: common.productTypeList,
  productTypeSecond: common.productTypeSecond,
}), {
  getSkylightList,
  getProductTypeList,
  getProductTypeSecond,
})
export default class Home extends React.PureComponent {
  async componentDidMount() {
    this.props.getSkylightList({ position: 0 });
    const result = await this.props.getProductTypeList({ parentLabel: 'productCategory' });
    if (result && result[0]) {
      this.props.getProductTypeSecond({ label: result[0].label });
    }
  }
  render() {
    const { skylightList, productTypeList, productTypeSecond, getProductTypeSecond } = this.props;
    return (
      <div>
        <Swiper data={skylightList.records} />
        <SearchBar />
        <div className="content-wrap">
          <LeftMenu action={getProductTypeSecond} tabs={productTypeList} />
          <div className="menu-content">
            <Grid
              hasLine={false}
              data={productTypeSecond}
              columnNum={2}
              renderItem={dataItem => (
                <div className="menu-box">
                  <div className="image-box">
                    <img src={dataItem.image} style={{ width: '100%' }} alt={dataItem.description} />
                  </div>
                  <div className="title">{dataItem.description}</div>
                </div>
              )}
            />
          </div>
        </div>
      </div>
    )
  }
}
