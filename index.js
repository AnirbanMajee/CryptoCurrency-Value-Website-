var btc= document.getElementById("bitcoin");
var etc= document.getElementById("ethereum");
var dogc= document.getElementById("dogecoin");

var setting ={
    "async": true,
    "scrossDomain":true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=inr",
    "methods":{}
}
$.ajax(setting).done(function (response){
    console.log(response);
    btc.innerHTML = response.bitcoin.inr;
    etc.innerHTML = response.ethereum.inr;
    dogc.innerHTML = response.dogecoin.inr;
    
});
