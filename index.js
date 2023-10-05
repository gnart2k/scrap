const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const writeToFile = require('./writeToFile');
const potusParse = function(url) {
  let text = ""
  puppeteer
    .launch()
    .then(function(browser) {
      return browser.newPage();
    })
    .then(function(page) {
      return page.goto(url).then(function() {
        return page.content();
      });
    })
    .then(function(html) {
      const $ = cheerio.load(html)
      $('#tab1', html).each(function() {
        text += (($(this).text()));
      });
      writeToFile("./data.txt", text)

      // console.log(text)
    })
    .catch(function(err) {

      console.error(err)
      //handle error
    });
}

for (let i = 1; i < 4; i++) {
  potusParse("https://www.vnjpclub.com/luyen-doc-n2/bai-" + i + ".html")
}

