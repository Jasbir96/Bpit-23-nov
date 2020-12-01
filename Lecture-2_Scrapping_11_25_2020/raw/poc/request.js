// ci => request 
// npm install request
let request=require("request");
// npm install cheerio
let ch=require("cheerio");
// file system -> inbuilt to use it you need to require
let fs=require("fs");
request(
    'https://www.espncricinfo.com/series/8048/scorecard/1237181/delhi-capitals-vs-mumbai-indians-final-indian-premier-league-2020-21',
     urlKaAns);
function urlKaAns(err,response,html){
console.log(err);
// console.log(response);
// console.log(html);
// fs.writeFileSync("index.html",html);
// html page -> selector-> output
// load file
// load html 
console.log("Recieved file");
let STool=ch.load(html);
// single
// let outputObj = STool("div.summary");
// // it give html of that matching element
// console.log(outputObj.html());
// // it gives val 
// console.log(outputObj.text());
// innings isolate
 let inningsArr=STool("div.card.content-block.match-scorecard-table");
 let fullHtml="<table>"
 for(let i=0;i<inningsArr.length-1;i++){
   let tableBatsMan =
   STool(inningsArr[i]).find("table.table.batsman");
    // extract batsman from the table
    fullHtml+= STool(tableBatsMan).html();
    fullHtml+="";
 }
 fs.writeFileSync("innings.html",fullHtml);
}
