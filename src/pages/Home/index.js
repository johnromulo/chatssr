import React, { useState, useEffect, useCallback } from 'react';
import { MdSend } from 'react-icons/md';
import { Button } from 'react-chat-elements';

import firebaseApp from '~/services/firebase';
import { Container, Scroll, Content, InputText } from './styles';

export default function Home({ match }) {
  const [chatList, setChatList] = useState([]);
  const [textSend, setTextSend] = useState('');
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // const { username } = match.params;
    // setUserName('john');
  }, [match.params]);

  useEffect(() => {
    setLoading(true);

    const chatRef = firebaseApp.database().ref('chats');

    chatRef.on('value', snapshot => {
      const data = snapshot.val();
      if (data) {
        const array = Object.keys(data).map(key => {
          return data[key];
        });
        const messageList = array.map(msg => ({
          position: msg.user === userName ? 'right' : 'left',
          type: 'text',
          text: msg.content,
          date: new Date(msg.date),
          title: msg.user,
        }));
        setLoading(false);
        setChatList(messageList || []);
      }
    });
  }, []);

  return (
    <Container>
      <Scroll>
        <Content
          downButton={false}
          lockable={false}
          toBottomHeight={'100%'}
          dataSource={chatList}
        />
      </Scroll>

      <div>
        <InputText placeholder="Message..." multiline={true} />
        <Button
          color="white"
          backgroundColor="black"
          text={<MdSend size="1.5em" />}
        />
      </div>
    </Container>
  );
}
