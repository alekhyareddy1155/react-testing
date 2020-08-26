import checkPropTypes from 'check-prop-types'
import { Component } from 'react'
import rootReducer from '../src/reducers';
import { createStore, applyMiddleware } from 'redux';
import { middlewares } from '../src/configureStore';

export const storeFactory=(initialState)=>{
    const createStoreWithMiddleware=applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
}
export const findByTestAttr=(wrapper,val)=>{
    return wrapper.find(`[data-test="${val}"]`)
}

export const checkProps=(Component, conformingProps)=>{
    const propError=checkPropTypes(
        Component.PropTypes,
        conformingProps,
        'prop',
        Component.name
    );
    expect(propError).toBeUndefined();
}
