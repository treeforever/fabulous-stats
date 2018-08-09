const axios = require('axios');

axios.defaults.headers.cross;

async function sendVote(id, updatedVotes) {
  return await axios.post('http://localhost:3000/votes', {
    id,
    votes: updatedVotes,
  });
}

const a = () => 1;

const requests = {
  sendVote: sendVote,
};

export default requests;
