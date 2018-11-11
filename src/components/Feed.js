import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

// const formatter = buildFormatter('minute');

const FeedWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  border: black solid 1px;
  list-style: none;
  padding: 0;
`;
FeedWrapper.displayName = 'FeedWrapper';

console.log(
  moment()
    .startOf('hour')
    .fromNow()
);

class Feed extends React.Component {
  render() {
    const { comments } = this.props;
    return (
      <FeedWrapper>
        <h1>Live Commentary</h1>
        {comments.reverse().map(item => (
          <li key={item.id}>
            {item.body} - {item.time}
          </li>
        ))}
      </FeedWrapper>
    );
  }
}
export default Feed;
