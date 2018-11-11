import React from 'react';
import styled from 'styled-components';

const FeedWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  border: black solid 1px;
  list-style: none;
  padding: 1rem;
  margin: 2rem;
`;
FeedWrapper.displayName = 'FeedWrapper';

const Time = styled.span`
  border-radius: 50%;
  border: 1px solid black;
  padding: 30px 30px;
  margin-right: 10px;
  background: white;

  &::before {
    content: '';
    position: absolute;
    border-left: 1px solid;
    left: 14px;
    bottom: 0;
    z-index: -1;
    height: 100%;
  }
`;

const Comment = styled.div`
  display: flex;
`;

const Item = styled.div`
  display: flex;
  margin: 1rem;
  align-items: center;
`;

class Feed extends React.Component {
  render() {
    const { comments } = this.props;
    return (
      <FeedWrapper>
        <h1>Live Commentary</h1>
        {comments.map(item => (
          <li key={item.id}>
            <Item>
              <Time>{item.time}</Time>
              <Comment>{item.body}</Comment>
            </Item>
          </li>
        ))}
      </FeedWrapper>
    );
  }
}
export default Feed;
