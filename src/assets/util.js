/**
 * 获取时间戳，年，月，日，季度
 */
export const getCurrentDate = async () => {
  const currentDate = new Date(); // 获取当前时间
  const year = currentDate.getFullYear(); // 获取年份
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  return { year, month, day,hours, minutes,seconds };
}

// 获取随机数
// 生成3-32位随机串：randomWord(true, 3, 32)
// 生成43位随机串：randomWord(false, 43)
export function randomWord(randomFlag, min, max){
      var str = "",
          range = min,
          arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
          // arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
      // 随机产生
      if(randomFlag){
          range = Math.round(Math.random() * (max-min)) + min;
      }
      for(var i=0; i<range; i++){
          var pos = Math.round(Math.random() * (arr.length-1));
          str += arr[pos];
      }
      return str;
}
// 获取当前时间时间戳
export function getTimestamp() {
    return Date.parse(new Date())
}
//　阿拉伯数字转文字
export function numTurnWord(section) {
  var chnNumChar = ["零","一","二","三","四","五","六","七","八","九"];
  // var chnUnitSection = ["","万","亿","万亿","亿亿"];
  var chnUnitChar = ["","十","百","千"];
  var strIns = '', chnStr = '';
  var unitPos = 0;
  var zero = true;
    while(section > 0){
      var v = section % 10;
      if(v === 0){
        if(!zero){
          zero = true;
          chnStr = chnNumChar[v] + chnStr;
        }
      }else{
        zero = false;
        strIns = chnNumChar[v];
        strIns += chnUnitChar[unitPos];
        chnStr = strIns + chnStr;
      }
      unitPos++;
      section = Math.floor(section / 10);
  }
  return chnStr;
}
// 文字数字转为阿拉伯数字
export function wordTurnNum(chnStr) {
  var chnNumChar = {零:0,一:1,二:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9};
  var chnNameValue = { 十:{value:10, secUnit:false},百:{value:100, secUnit:false},千:{value:1000, secUnit:false}, 万:{value:10000, secUnit:true}, 亿:{value:100000000, secUnit:true}}
  var rtn = 0;
  var section = 0;
  var number = 0;
  var secUnit = false;
  var str = chnStr.split('');
  for(var i = 0; i < str.length; i++){
    var num = chnNumChar[str[i]];
    if(typeof num !== 'undefined'){
      number = num;
      if(i === str.length - 1){
        section += number;
      }
    }else{
      var unit = chnNameValue[str[i]].value;
      secUnit = chnNameValue[str[i]].secUnit;
      if(secUnit){
        section = (section + number) * unit;
        rtn += section;
        section = 0;
      }else{
        section += (number * unit);
      }
      number = 0;
    }
  }
  return rtn + section;
}