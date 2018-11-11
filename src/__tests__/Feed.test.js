import React from 'react';
import ReactDOM from 'react-dom';
import Feed from '../components/Feed';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import data from '../data';

const props = { ...data };

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Feed {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer.create(<Feed {...props} />);
  expect(tree).toMatchSnapshot();
});
