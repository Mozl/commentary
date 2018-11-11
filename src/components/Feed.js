import React from 'react';
import styled from 'styled-components';
import data from '../data';

const FeedWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  border: black solid 1px;
`;

FeedWrapper.displayName = 'FeedWrapper';

class Feed extends React.Component {
  render() {
    return (
      <FeedWrapper>
        {data.reverse().map(item => (
          <li key={item.id}>
            {item.body} - {item.id}
          </li>
        ))}
      </FeedWrapper>
    );
  }
}
export default Feed;
