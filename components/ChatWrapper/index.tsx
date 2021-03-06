import React from "react";
import { GiftedChat, IMessage } from "react-native-gifted-chat";

const copyMessage = (message: IMessage): IMessage => ({
  _id: message._id + 1,
  text: message.text,
  createdAt: new Date(),
  user: {
    _id: 2,
    name: "React Native",
    avatar: "https://placeimg.com/140/140/any"
  }
});

class Example extends React.Component {
  state = {
    messages: []
  };

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: "Hello developer",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "https://placeimg.com/140/140/any"
          }
        }
      ]
    });
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(
        previousState.messages,
        messages.concat([
          copyMessage(messages[messages.length - 1])
        ])
      )
    }));
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1
        }}
      />
    );
  }
}

export default Example;
