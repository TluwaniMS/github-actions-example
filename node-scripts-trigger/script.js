import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';

const customConfig = {
  dictionaries: [adjectives, colors, animals],
  separator: '-',
  length: 3,
};

const randomName = uniqueNamesGenerator(customConfig);

console.log(`The random push generated name is ${randomName}! :)`);
