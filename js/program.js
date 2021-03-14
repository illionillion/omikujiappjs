console.log("hello");

const btn=document.getElementById('btn');
const out=document.getElementById('output');
const share=document.getElementById('share');
var flag=null;
var items=["大吉","中吉","小吉","吉","末吉","大凶","凶"];

btn.onclick=function start(){
  var random=Math.floor(Math.random()*items.length);
  console.log(items[random]);
  out.innerHTML=items[random];

  // var txt="<a href='https://twitter.com/share?url=●URL●&amp;text=●ツイート内容●&amp;count=none&amp;lang=ja'><img src='●画像のURL●' alt=''/></a>"
  
  share.innerHTML="ツイート";

  flag=true;
  //     //出目取得する
  //     var Deme = "おみくじアプリ";
  // 　　//ツイート内容をセット
  // 　　var tw_contents = ("あなたは【" + items[random] + "】です");
  // 　　var url = "[my_home_url]";
  // 　　//#twitter_buttonのhrefにパラメーターを渡す
  // 　　window.open().location.href = ("https://twitter.com/share?url=" + url + "&text=" + tw_contents + "&count=none&lang=ja");    
      
  var Deme = "おみくじアプリ";
  //ツイート内容をセット
　var tw_contents = (Deme+" あなたは【" + out.innerHTML + "】です");
　var url = location.href;

  var url2="https://twitter.com/share?url=" + url + "&text=" + tw_contents + "&count=none&lang=ja";

  share.innerHTML="<a herf='"+url2+"'>"+"ツイート"+"</a>";
}

// share.onclick=function share(){
//   if(flag){
//   //出目取得する
//   var Deme = "おみくじアプリ";
//   //ツイート内容をセット
// 　var tw_contents = (Deme+" あなたは【" + out.innerHTML + "】です");
// 　var url = location.href;
// 　//#twitter_buttonのhrefにパラメーターを渡す
// 　window.open().location.href = ("https://twitter.com/share?url=" + url + "&text=" + tw_contents + "&count=none&lang=ja"); 
//   }

//   var url2="https://twitter.com/share?url=" + url + "&text=" + tw_contents + "&count=none&lang=ja";

//   share.innerHTML="<a herf='"+url2+"'>"+"ツイート"+"</a>";
    

// }
