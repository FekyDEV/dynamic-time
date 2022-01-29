/**
* @name Dynamic Time
* @description Convert classic time to dynamic time for Discord.. (JavaScript)
* @author FekyDEV
* @authorId 603505971507101698
* @version 1.0.0
* @invite sKKEyUn
* @source https://github.com/FekyDEV/multi-language/new/main
* @license MIT
*/

// Converting Date to Number for Discord dynamic time !
d = new Date();
  let date = d.getTime()
    const first = date.toString()
    const second = first.slice(0,10)
    const date_to_num = parseInt(second)
    
console.log("New time:", date_to_num)

// In discord: `<t:${date_to_num}>`
