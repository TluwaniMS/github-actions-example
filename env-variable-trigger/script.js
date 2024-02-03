import { sentence } from 'txtgen';

const randomSentence = sentence();

const dayOfTheWeek = process.env.DAY_OF_WEEK;

console.log(`The sentence for ${dayOfTheWeek} is: ${randomSentence}`);