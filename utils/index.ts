import compact from 'lodash/compact';

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

export const sampleMessageGenerator = (parsedText) => {
  const text =
  {
    "_id": 1,
    text: parsedText.text,
    "createdAt": "2019-09-06T11:51:01.990Z",
    "user": {
      "_id": 2,
      "name": "React Native",
      "avatar": "https://placeimg.com/140/140/any"
    }
  },
};