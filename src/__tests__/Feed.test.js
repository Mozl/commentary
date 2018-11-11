import React from 'react';
import ReactDOM from 'react-dom';
import Feed from '../components/Feed';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import data from '../data';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Feed comments={data} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer.create(<Feed comments={data} />);
  expect(tree).toMatchSnapshot();
});

it('renders the list of comments', () => {
  const wrapper = mount(<Feed comments={data} />);
  expect(wrapper.props().comments.length).toBe(data.length);
});
