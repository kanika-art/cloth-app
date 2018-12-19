import API from '../utils/api';
import { get, post, put, deleted } from '../utils/request';

export const GET_SKYLIGHT_LIST = 'GET_SKYLIGHT_LIST';
export const GET_PRODUCT_TYPE_LIST = 'GET_PRODUCT_TYPE_LIST';
export const GET_PRODUCT_TYPE_SECOND = 'GET_PRODUCT_TYPE_SECOND';
export const GET_AGENT_LIST = 'GET_AGENT_LIST';

// 获取首页天窗
export function getSkylightList(params) {
  return async (dispatch) => {
    const result = await get(API.getSkylightList, params);
    if (result && result.status === 200) {
      dispatch({
        type: GET_SKYLIGHT_LIST,
        data: result.data
      });
    }
  }
}

// 获取产品分类
export function getProductTypeList(params) {
  return async (dispatch) => {
    const result = await get(API.getProductTypeList, params);
    if (result && result.status === 200) {
      dispatch({
        type: GET_PRODUCT_TYPE_LIST,
        data: result.data
      });
    } else {
      dispatch({
        type: GET_PRODUCT_TYPE_LIST,
        data: {}
      });
    }
    return result.data;
  }
}

// 获取产品二级分类
export function getProductTypeSecond(params) {
  return async (dispatch) => {
    const result = await get(API.getProductTypeList, params);
    if (result && result.status === 200) {
      dispatch({
        type: GET_PRODUCT_TYPE_SECOND,
        data: result.data
      });
    }
  }
}


export async function getAgentList(params) {
  const result = await get(API.agentList, params);
  return result.data;
}
