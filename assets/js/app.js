
var btc=document.getElementById('bitcoin');
var xpr=document.getElementById("ripple");
var lit=document.getElementById("litecoin");
var doge=document.getElementById("dogecoin");
var eth=document.getElementById("ethereum");
var tron=document.getElementById("tron");

var liveprice={
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cdogecoin%2Cripple%2Cethereum%2Ctron&vs_currencies=usd",

    "method": "GET",
    "headers":{}
}

$.ajax(liveprice).done(function(response){
    btc.innerHTML = response.bitcoin.usd;
    xpr.innerHTML= response.ripple.usd;
    lit.innerHTML = response.litecoin.usd;
    doge.innerHTML= response.dogecoin.usd;
    eth.innerHTML = response.ethereum.usd;
    tron.innerHTML= response.tron.usd;

    console.log(response);


});