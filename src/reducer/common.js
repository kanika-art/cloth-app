import {
  GET_SKYLIGHT_LIST, GET_PRODUCT_TYPE_LIST, GET_PRODUCT_TYPE_SECOND, GET_AGENT_LIST
} from '../action/common';

const defaultState = {
  skylightList: {},
  productTypeList: [],
  productTypeSecond: [],
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_SKYLIGHT_LIST:
      return {
        ...state,
        skylightList: action.data
      }
    case GET_PRODUCT_TYPE_LIST:
      return {
        ...state,
        productTypeList: action.data
      }
    case GET_PRODUCT_TYPE_SECOND:
      return {
        ...state,
        productTypeSecond: action.data,
      }
    default:
      return state
  }
}
