import React from 'react';
import { ChatItem } from 'react-chat-elements';

import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <ChatItem
        avatar={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRlLBQSBLF-oUWZ7t7zYVYLUNBlVfFH_-I0xd13fAAuwFdxdQho'
        }
        alt={'Reactjs'}
        title={'Thanos'}
        subtitle={'What are you doing?'}
        date={new Date()}
        unread={2}
      />
    </Container>
  );
}
