import { parseText } from '..'
import sampleConversationText from '../../sampleData/sampleConversationText';

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