import checkPropTypes from 'check-prop-types'
import { Component } from 'react'
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
