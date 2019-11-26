import styled from 'styled-components';
import { MessageList, Input } from 'react-chat-elements';
import PerfectScrollBar from 'react-perfect-scrollbar';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px;

  > div {
    display: flex;
    justify-content: space-between;

    .rce-container-input {
      min-width: 90%;
    }

    .rce-button {
      background: rgb(40, 48, 66) !important;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      width: 50px;
      height: 50px;
      box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
      span {
        width: 21px;
        height: 21px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

export const Content = styled(MessageList)`
  height: 100%;

  .rce-mbox {
    padding: 10px;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  .rce-mbox-right {
    background: rgb(40, 48, 66);
    color: #fff;

    .rce-mbox-time {
      color: rgba(255, 255, 255, 0.45);
    }

    .rce-mbox-title {
      color: #fff;
    }
  }

  .rce-mbox-title {
    color: rgb(40, 48, 66);
    font-weight: bold;
    font-size: 16px;
  }

  .rce-mbox-time {
    position: relative;
  }

  .rce-mbox-right-notch {
    fill: rgb(40, 48, 66);
  }
`;

export const InputText = styled(Input)`
  border-radius: 5px;
  padding: 5px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
  .rce-input {
    color: rgb(38, 38, 38);
    font-weight: bold;
    padding-left: 5px;
    padding-right: 5px;
  }
`;

export const Scroll = styled(PerfectScrollBar)``;
