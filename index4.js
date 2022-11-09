let mathscore = prompt('math score');
let physicsscore = prompt( 'physics  score');
let chemistryscore = prompt('chemistry score');

let m = parseInt(mathscore)
let p = parseInt(physicsscore)
let c = parseInt(chemistryscore)
let sum=(m+p+c)/3

 document.write('sum=' +sum )