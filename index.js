var json1 = require("./json/scen1.json");
var json2 = require("./json/scen2.json");
var json3 = require("./json/scen3.json");
var json4 = require("./json/scen4.json");


function giveHead(arrayOfArticles){
    return arrayOfArticles.shift();
}

function recommendations(jsonOfArticles){

    let arrOfrecommendations = [];

    let haveElements = true;

    var prevLength = arrOfrecommendations.length;

    var token;

    while(arrOfrecommendations.length < 4 && haveElements){
        
        prevLength = arrOfrecommendations.length;

        for (let method in jsonOfArticles){

            token = giveHead(jsonOfArticles[method]);

            if(token !== undefined){
                arrOfrecommendations.push(token.token);
            }
            if(arrOfrecommendations.length === 4){
            
                break;
            }
            if(prevLength === arrOfrecommendations.length){
                haveElements = false;
            }
        }
        
    }
    return arrOfrecommendations;
}


module.exports = {
    json1,
    json2,
    json3,
    json4,
    giveHead,
    recommendations
}