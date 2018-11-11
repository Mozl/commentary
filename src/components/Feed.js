import React from 'react';
import styled from 'styled-components';
import data from '../data';

const FeedWrapper = styled.ul`
  display: flex;
`;

console.log(data);

class Feed extends React.Component {
  render() {
    return <FeedWrapper />;
  }
}
export default Feed;
