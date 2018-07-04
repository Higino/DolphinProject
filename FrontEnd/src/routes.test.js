import React from 'react';
import * as TestUtils from 'react-dom/test-utils';
import Routes from './routes';


it('Routes should exist as a react component', () => {
  const app = TestUtils.renderIntoDocument(
    <Routes />
  );

  expect(TestUtils.isCompositeComponent(app)).toBeTruthy();
});

it('Router should disply a Menu with Home, About and Products', () => {
    const app = TestUtils.renderIntoDocument(
      <Routes />
    );
  
    let menu = TestUtils.scryRenderedDOMComponentsWithClass(app, 'menu');
    //console.log(menu);
    //expect(menu[0].length).toEqual(3);
    //expect(menu[1].length).toEqual(1);


    
  });

it('Router should disply a left side menu and a right side Menu', () => {
    const app = TestUtils.renderIntoDocument(
        <Routes />
      );
    
      let menu = TestUtils.scryRenderedDOMComponentsWithClass(app, 'menu');
      expect(menu.length).toEqual(2);
});

it('Router should disply a Menu', () => {});


