import md5 from 'md5';
import seedrandom from 'seedrandom';

/**
 * Returns a stable decision about whether or not a given url should
 * be in a focus group or not. The `divisor` argument defines the size
 * of the focus group. A divisor of 3 means that 1/3 of all possible urls
 * should be in the group.
 * 
 * @param {string} url
 * @param {Number} divisor
 */
export default function (url, divisor) {
    var hash = md5(url);
    var generateRandomNumber = seedrandom(hash);
    var randomNumber = Math.floor(generateRandomNumber() * 1000000000);
    console.log(url, hash, randomNumber);
    return randomNumber % divisor === 0;
}