module.exports = function main(tString) {
  // Write your cade here
  var tNum = Number(tString);
  var tSum = 0;
  while(tNum>0){
  	tSum += tNum % 10;
  	tNum = Math.floor(tNum / 10);
  }
  return tSum;
};
