module.exports = function check(str, bracketsConfig) {
  if (str === undefined || bracketsConfig === undefined){
    return false
  }
  let cal = 0;
  let value = bracketsConfig.flatMap(x => x.join(''));
  
  for (let i = 0; i < value.length; i++){
    if (str.includes(value[i]) === false){
      cal++;
    }else{
     str = str.replace(value[i], "");
    }
  }
    if (cal === value.length){
      return false;
    }if (str.length === 0) {
      return true;
    }
  
return check(str, bracketsConfig)
}

