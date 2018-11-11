import React from 'react';
import ReactDOM from 'react-dom';
import Feed from '../components/Feed';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Feed />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer.create(<Feed />);
  expect(tree).toMatchSnapshot();
});
