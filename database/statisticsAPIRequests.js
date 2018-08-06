const axios = require('axios');

const requestStatisticsCan = async () => {
  const response = await axios.get(
    'https://www150.statcan.gc.ca/n1/dai-quo/ssi/homepage/daily-banner-eng.json'
  );

  const articles = response.data.daily.article.map(item => ({
    title: item.title,
    text: item.summary,
    url: item.link,
  }));
  return articles;
};

module.exports = {
  requestStatisticsCan,
};
