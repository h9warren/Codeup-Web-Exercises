const users = [
  {
    id: 1,
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript'],
  },
  {
    id: 2,
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php'],
  },
  {
    id: 3,
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash'],
  },
  {
    id: 4,
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql'],
  },
  {
    id: 5,
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php'],
  },
];

const trilingual = users.filter( user => 
  user.languages.length >= 3 );

const emails = users.map( user => {
  return user.email });

const nameId = users.reduce( function(accumulator, cv) {
    accumulator[cv.id] = {name: cv.name, email: cv.email, languages: cv.languages};
    return accumulator;
    }, {});
