function getMatchesWithPrefixSuffix(baseText, prefix, suffix) {
    var matchArr = [];

    matchArr = baseText.match(new RegExp(/\(\([a-z.:_]*\)\)/g));
    for (let i = 0; i < matchArr.length; i++) {
        matchArr[i] = matchArr[i].replace(prefix, '').replace(suffix, '');
    }
    return matchArr;
}
var matchArr = getMatchesWithPrefixSuffix("this ((is)) and example text with ((proper)) text", "((", "))");
console.log('matchArr :', matchArr);


function objectSnakeToCamel(underscoreObject) {
    var camelObject = {};
    for (const underscoreKey in underscoreObject) {
        if (underscoreObject.hasOwnProperty(underscoreKey)) {
            var camelKey = this.stringUnderscoredToCamel(underscoreKey);
            camelObject[camelKey] = underscoreObject[underscoreKey];
        }
    }
    return camelObject;
}

function stringSnakeToCamel(str) {
    return str.replace(/_([a-z])/g, function (g) {
        return g[1].toUpperCase();
    });
}

function stringCamelToSnake(str) {
    return str.replace(/\.?([A-Z]+)/g, function (x, y) {
        return "_" + y.toLowerCase()
    }).replace(/^_/, "");
}

console.log("transmute: " + stringCamelToSnake("configFileLocation").toUpperCase());