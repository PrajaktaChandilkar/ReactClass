const str = 'To beee, or not to be, that is the main queestion yes'
let count = 0;
let position = str.indexOf('e')
// console.log(position)
while(position !== -1){
    count++
    position = str.indexOf('e', position+1)
}
console.log(count)