// import puppeteer from "puppeteer-core"; // or import puppeteer from 'puppeteer-core';
// const timeout = 8000;
// const target = "http://www.suanming.com/xlcs/742272.html";
// async function scarper() {
//   const browser = await puppeteer.connect({
//     browserWSEndpoint: `wss://${process.env.PUPPETEER_WS_ENDPOINT}@brd.superproxy.io:9222`,
//   });
//   const page = await browser.newPage();
//   await page.setViewport({ width: 1200, height: 1200 });
//   await page.goto(target, {
//     waitUntil: "networkidle0",
//     timeout: timeout,
//   });

//   await browser.close();
// }
