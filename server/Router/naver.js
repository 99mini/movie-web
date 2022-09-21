const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/getNaverMovie", async (req, res) => {
  let query = req.query.query;
  let reqOptions = {
    headers: {
      "X-Naver-Client-Id": NaverClientKey,
      "X-Naver-Client-Secret": NaverClientSecretKey,
    },
    params: {
      query: query,
    },
  };
  try {
    let movieRes = await axios.get(
      "https://openapi.naver.com/v1/search/movie.json",
      reqOptions
    );
    return res.json(movieRes.data);
  } catch (e) {
    return res.json({
      status: 400,
      message: e,
    });
  }
});

module.exports = router;
