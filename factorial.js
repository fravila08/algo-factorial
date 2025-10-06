function factorial(num) {
  if (num === 0){
    return 1
  };
  let answer = num;
  // iterate through a four loop the number of times specified by num
  for (let i = num-1 ; i > 0; i--){
    // store the multiplied num times the current value
    answer = answer * i;
  };
  // return the answer
  return answer;
};

module.exports = factorial;
