import { GET_SKYLIGHT_LIST, GET_PRODUCT_TYPE_LIST } from '../action/common';

const defaultState = {
  skylightList: {},
  productTypeList: {},
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
    default:
      return state
  }
}
