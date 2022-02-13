/**
* @name Dynamic Time
* @description Convert classic time to dynamic time for Discord. (JavaScript)
* @author FekyDEV
* @authorId 603505971507101698
* @version 1.1.1
* @invite sKKEyUn
* @source https://github.com/FekyDEV/dynamic-time/
* @license MIT
*/

// Converting Date to Number for Discord dynamic time.
const date = new Date();
const new_date = parseInt(date.getTime().toString().slice(0,10))

console.log("New time: %s \nFor Discord: <t:%s>", new_date, new_date)

/*
 TYPES:
 - <t:123:R> => R: Relative, says "two weeks ago", or "in 5 years"
 - <t:123:D> => Date, says "July 4, 2021"
 - <t:123:T> => Time, "11:28:27 AM"
 - <t:123:t> => Short Time, "11:28 AM"
 - <t:123:F> => Full, "Monday, July 4, 2021 11:28:27 AM"
 */

