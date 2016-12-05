//
// Home scene test

import React from 'react';
import Home from '../../app/scenes/Home';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Home />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
