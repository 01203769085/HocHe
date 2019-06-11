const express = require("express");
const axios = require("axios");
let app = express();
let port = process.env.PORT || 9000;

let a = ["tuan", "hoang", "thuan"];

app.set("view engine", "pug");
app.set("views", "./views");

app.listen(port, () => {
  console.log("Da vao");
});

app.get("/", async (req, res) => {
  res.render("home");
});

app.get("/product", async (req, res) => {
  let mang = await axios({
    method: "GET",
    url: "https://5ce2c23be3ced20014d35e3d.mockapi.io/api/photo"
  });
  let data = mang.data;
  let page = parseInt(req.query.page);
  let sosanphamcanlay = 4;
  let tongsosanpham = data.length;
  let tongsotrang = Math.ceil(tongsosanpham / sosanphamcanlay);
  let arr = data.slice(page, page + sosanphamcanlay);
  res.render("product", {
    arr,
    tongsotrang: tongsotrang,
    sosanphamcanlay,
    page
  });
});
