const axios = require('axios');

axios.defaults.headers.cross;

async function sendVote(statsId, updatedVotes) {
  await axios.post('http://localhost:3000/votes', {
    id: '5',
    votes: updatedVotes,
  });
  return 5;
}

const a = () => 1;

const requests = {
  sendVote: sendVote,
};

export default requests;
