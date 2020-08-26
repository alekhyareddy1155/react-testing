import checkPropTypes from 'check-prop-types'
import { Component } from 'react'
import rootReducer from '../src/reducers';
import { createStore } from 'redux';

export const storeFactory=(initialState)=>{
    return createStore(rootReducer, initialState);
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
