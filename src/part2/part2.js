"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.treeToSentence = exports.isPaired = exports.countVowels = void 0;
var R = require("ramda");
//AAAAAAAAAAAAAA
var stringToArray = R.split("");
/* Question 1 */
var countVowels = function (str) { return stringToArray(str).reduce(function (acc, cur) { return cur === 'a' ? acc + 1 : acc; }, 0); };
exports.countVowels = countVowels;
/* Question 2 */
exports.isPaired = undefined;
exports.treeToSentence = undefined;
console.log((0, exports.countVowels)("aaAbb"));
