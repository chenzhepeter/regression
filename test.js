var regression = require('regression');

var data = [
    [2005, 33.1],
    [2006, 32.73],
    [2007, 32.8],
    [2008, 33.36],
    [2009, 34.13],
    [2010, 34.65],
    [2011, 35.42],
    [2012, 36.09],
    [2013, 36.5],
    [2014, 36.9],
    [2015, null],
    [2016, null],
    [2017, null],
    [2018, null],
    [2019, null],
    [2020, null]
];
var result = regression('polynomial', data, 3);

console.log(result)
