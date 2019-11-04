// add solution here
function theBeatlesPlay(musicians,instruments){
  var newArray = [];
  for(var i=0;i<musicians.length; i++){
    newArray.push(console.log(`${musicians[i]} plays ${instruments[i]}`));
  }
  return newArray
}