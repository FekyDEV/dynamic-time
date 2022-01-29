// Converting Date to Number for Discord dynamic time !
d = new Date();
let datum = d.getTime()
const first_change = datum.toString()
const second_change = first_change.slice(0,10)
const date_to_num = parseInt(second_change)

console.log("New time:", date_to_num)

// In discord: `<t:${date_to_num}>`
