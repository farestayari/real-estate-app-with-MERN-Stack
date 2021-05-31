import {
    FEATURED_PROPERTIES_SUCCESS,
    FEATURED_PROPERTIES_FAIL,
    SET_MESSAGE
  } from "./types";

  import PropertyService from "../services/property_service";
  export const  featuredProperty = () => (dispatch) => {
      return PropertyService.getFeaturedProperty().then(
          (response) =>{
            dispatch({
                type: FEATURED_PROPERTIES_SUCCESS,
                payload : response.data.properties
              });
        
              dispatch({
                type: SET_MESSAGE,
                payload: response,
              });
        
              return Promise.resolve();
          },
          (error) => {
            const message =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
      
            dispatch({
              type: FEATURED_PROPERTIES_FAIL,
            });
      
            dispatch({
              type: SET_MESSAGE,
              payload: message,
            });
      
            return Promise.reject();
          }
      );
  };


