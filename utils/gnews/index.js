const axios = require("axios");

const getNewsSearch = async (search, count) => {
  try {
    apikey = process.env.GNEWSAPIKEY;
    url =
      `${process.env.GNEWSURL}search?q=${search}&lang=en&country=us&max=${count}&apikey=` +
      apikey;

    const resp = await axios.get(url);

    return resp.data;
  } catch (err) {
    return err;
  }
};

const gettopHeadLines = async (category, count) => {
  try {
    apikey = process.env.GNEWSAPIKEY;
    url =
      `${process.env.GNEWSURL}top-headlines?category=${category}&lang=en&country=us&max=${count}&apikey=` +
      apikey;

    const resp = await axios.get(url);

    return resp.data;
  } catch (err) {
    return err;
  }
};

module.exports = { getNewsSearch, gettopHeadLines };
