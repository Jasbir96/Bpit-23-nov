// npm install request=>. npm playstore => local machine 
// console.log("hello");
// use => require
// include import require 
// /logic => implementation => libraray => function 
let request=require("request");
// npm install cheerio 
let cheerio=require("cheerio");
// preinstalled
let fs=require("fs");
//  input => url , fn
request("https://www.espncricinfo.com/series/8048/scorecard/1237178/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-indian-premier-league-2020-21",whenDataArrive);
function whenDataArrive(err,resp,html){
    // console.log(html);
    // create file => content 
    console.log("recieved html");
    // function => speceific paramater => data
    // browser=> parse => ui show 
    // nodejs => parse => extract 
    let sTool= cheerio.load(html);
    // single entry
//   let resultElem=sTool("div.desc.text-truncate");

//   console.log(resultElem.text());
// /html => element
// css syntax 
let tableElem=sTool("div.card.content-block.match-scorecard-table");
console.log(tableElem.length);
let Inninghtml="";
for(let i=0;i<2;i++){
    // text ,cheerio=> wrap
    // html => element html
  let cInning=sTool(tableElem[i]).html();
  Inninghtml+=cInning;
//   console.log("```````````````````````````````");
}
fs.writeFileSync("innings.html",Inninghtml);

//   Eliminator (N), Abu Dhabi, Nov 6 2020, Indian Premier League
    // nodejs => file save => file read => data extract 
    // fs.writeFileSync("abc.html",html);
//    parse -> tool -> extract
 
}
