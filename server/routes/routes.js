const NewsAPI = require('newsapi');
const newsApiTokenId = process.env.NEWS_TOKEN_ID ? `${process.env.NEWS_TOKEN_ID}` : '';
const newsApi = new NewsAPI(newsApiTokenId);
var appRouter = function(app) {
  app.get('/getNews', async function(req, res) {
    if (!newsApi) {
      return res.status(400).send({ status: false, message: new InternalError('Unable to fetch the NEWS') });
    }
    const { query } = req;
    const { searchText = '', pageIndex = 1 } = query;
    newsApi.v2
      .everything({
        q: searchText,
        sortBy: 'relevancy',
        sources: 'bbc-news,the-verge',
        domains: 'bbc.co.uk, techcrunch.com',
        page: pageIndex,
        language: 'en'
      })
      .then(response => {
        return res.status(200).send({ status: true, data: response, message: 'SuccessfullY find the datas' });
      })
      .catch(error => {
        return res
          .status(400)
          .send({ status: false, message: new ReferenceError('Problem in finding data'), data: {totalResults:0} });
      });
  });
};

module.exports = appRouter;
