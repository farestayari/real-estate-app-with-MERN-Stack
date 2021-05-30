import {
    FEATURED_PROPERTIES_SUCCESS,
    FEATURED_PROPERTIES_FAIL,
  } from "../actions/types";

    const properties = [];

    const initialState = properties
    ? { isProperty: true, properties }
    : { isProperty: false, properties: null };


  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case FEATURED_PROPERTIES_SUCCESS:
          return {
            ...state,
            isProperty: true,
            properties: payload,
          };
        case FEATURED_PROPERTIES_FAIL:
          return {
            ...state,
            isProperty: false,
            properties: null,
          };
        default:
          return state;
      }
  
  }


