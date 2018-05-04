import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import jsdom from 'jsdom';
import chai, { expect } from 'chai';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';

global.window = new jsdom.JSDOM('<!DOCTYPE html><html><body></body></html>').window;
global.document = global.window.document;
global.navigator = global.window.navigator;

function renderComponent(ComponentClass, props = {}, state = {}) {
  const componentInstance =  TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );
  const domElement = ReactDOM.findDOMNode(componentInstance);
  return domElement;
}

function $(domElement, selector) {
    return domElement.querySelectorAll(selector);
}

function simulate(domElement, eventName, value = null) {
    if(!_.isNull(value)) {
      domElement.value = value;
    }
    TestUtils.Simulate[eventName](domElement);
}; 

export {renderComponent, expect, $, simulate};

