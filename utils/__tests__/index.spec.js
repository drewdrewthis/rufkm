import { parseText, sampleMessageGenerator } from '..'
import omit from 'lodash/omit';
import sampleConversationText from '../../sampleData/sampleConversationText';

const DATE_TO_USE = new Date('2020');
const _Date = Date;
global.Date = jest.fn(() => DATE_TO_USE);
global.Date.UTC = _Date.UTC;
global.Date.parse = _Date.parse;
global.Date.now = _Date.now;

describe('parseText', () => {
  it('parses the text', () => {

    const result = parseText(sampleConversationText);

    expect(result)
      .toEqual([
        { user: 'A', text: 'Hi Jack. What are you doing?' },
        {
          user: 'B',
          text: `Hi Mary. I'm filling out a job application.`
        },
        {
          user: 'A',
          text: 'Are you finished with school already?'
        },
        {
          user: 'B',
          text: 'No. I have one more semester, but it would be great to have a job lined up.'
        },
        { user: 'A', text: 'How is your day going?' },
        {
          user: 'B',
          text: `Quite busy. I'm preparing for my presentation tomorrow on our marketing strategy. I'm not even half done yet.`
        },
        { user: 'A', text: 'You must feel stressed out now.' },
        { user: 'B', text: `That's an understatement.` },
        { user: 'A', text: 'What are you doing now?' },
        {
          user: 'B',
          text: `I'm playing pool with my friends at a pool hall.`
        },
        {
          user: 'A',
          text: `I didn't know you play pool. Are you having fun?`
        },
        {
          user: 'B',
          text: `I'm having a great time. How about you? What are you doing?`
        },
        {
          user: 'A',
          text: `I'm taking a break from my homework. There seems to be no end to the amount of work I have to do.`
        },
        { user: 'B', text: `I'm glad I'm not in your shoes.` }
      ])
  })
})

describe('sampleMessageGenerator', () => {
  it('can create one message', () => {

    const parsedText = { user: 'A', text: 'Hi Jack. What are you doing?' };
    const result = sampleMessageGenerator(parsedText);

    expect(result).toEqual({
      _id: 1,
      text: 'Hi Jack. What are you doing?',
      createdAt: new Date(),
      user: {
        _id: 1,
        name: 'A',
        avatar: "https://placeimg.com/140/140/any"
      }
    })

  })

  it('can create many', () => {
    const textArray = parseText(sampleConversationText);
    const messageArray = textArray.map(sampleMessageGenerator);
    messageArray.length = 4;

    expect(messageArray).toEqual([
      {
        "_id": 2,
        "createdAt": new Date(),
        "text": "Hi Jack. What are you doing?",
        "user": {
          "_id": 1, "avatar": "https://placeimg.com/140/140/any",
          "name": "A"
        }
      },
      {
        "_id": 3,
        "createdAt": new Date(),
        "text": "Hi Mary. I'm filling out a job application.",
        "user": { "_id": 2, "avatar": "https://placeimg.com/140/140/any", "name": "B" }
      }, {
        "_id": 4, "createdAt": new Date(), "text": "Are you finished with school already?",
        "user": { "_id": 1, "avatar": "https://placeimg.com/140/140/any", "name": "A" }
      },
      {
        "_id": 5, "createdAt": new Date(),
        "text": "No. I have one more semester, but it would be great to have a job lined up.",
        "user": { "_id": 2, "avatar": "https://placeimg.com/140/140/any", "name": "B" }
      },])

  })
});