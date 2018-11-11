import React from 'react';
import styled from 'styled-components';

const FeedWrapper = styled.ul`
  display: flex;
`;

class Feed extends React.Component {
  render() {
    return <FeedWrapper />;
  }
}
export default Feed;
