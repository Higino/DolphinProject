import React from 'react';
import * as TestUtils from 'react-dom/test-utils';
import App from './App';


it('App should exist as a react component', () => {
  const app = TestUtils.renderIntoDocument(
    <App />
  );

  expect(TestUtils.isCompositeComponent(app)).toBeTruthy();
});



it('Should render a div with class App and a header with class App-header', () => {
  const app = TestUtils.renderIntoDocument(
    <App />
  );

  let headers = TestUtils.scryRenderedDOMComponentsWithClass(app, 'App-header');
  let mainDiv = TestUtils.scryRenderedDOMComponentsWithClass(app, 'App');

  expect(mainDiv.length).toBeGreaterThan(0);
  expect(headers.length).toBeGreaterThan(0);

});