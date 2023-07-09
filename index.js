const express = require("express");

const { cache } = require("./utils/caching/index");
const { getNewsSearch, gettopHeadLines } = require("./utils/gnews/index");

const app = express();
const router = express.Router();

require("dotenv").config();

app.use(router);

router.get("/search", cache(20), async (req, res) => {
  const search = req.query.q ? req.query.q : "politics";
  const count = req.query.count ? req.query.count : 10;
  res.status(200).json(await getNewsSearch(search, count));
});
router.get("/top-headlines", cache(20), async (req, res) => {
  const category = req.query.category ? req.query.category : "general";
  const count = req.query.count ? req.query.count : 10;
  res.status(200).json(await gettopHeadLines(category, count));
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
