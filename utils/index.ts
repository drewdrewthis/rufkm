import compact from 'lodash/compact';
import { IMessage } from 'react-native-gifted-chat';

let id = 1;
const userIds = {}

export const parseText = (text: string) => {
  const lines = text.split('\n');

  return compact(lines.map(line => {
    if (!line) return;

    const strings = line.split(': ');
    const user = strings[0].split(' ')[1];
    const text = strings[1].replace(/("|\n)/g, '');

    return {
      user,
      text
    }
  }));
}

export const sampleMessageGenerator = (parsedText): IMessage => {
  const name = parsedText.user;
  userIds[name] = userIds[name] || Object.keys(userIds).length + 1;

  return {
    "_id": id++,
    text: parsedText.text,
    // "createdAt": "2019-09-06T11:51:01.990Z",
    "createdAt": new Date(),
    "user": {
      "_id": userIds[name],
      name,
      "avatar": "https://placeimg.com/140/140/any"
    }
  }
};