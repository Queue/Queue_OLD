//
// QueueList component test

import React from 'react';
import QueueList from '../../app/components/QueueList';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <QueueList />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
