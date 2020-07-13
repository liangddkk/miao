let liangddkk = {
  /**
   * 判断一个数是否为NaN
   * @param {*} val 
   * @returns {Boolean}
   */
  isNull: function (val){
    if(val === null){
      return true;
    }else{
      return false;
    }
  },
    /**
   * 判断一个数字是否为null
   * @param  {Number} val 
   * @returns {Boolean}
   */
  isNaN: function(val){
    if(val !== val){
      return true;
    }else{
      return false;
    }
  },
  /**
   * 以size拆分成数组块，并返回由这些数组组成的数组
   * @param {Array} Array
   * @param {Number} size
   * @return {Array}
   */
  chunk: function(array,size = 1){
    if(array.length == 0){
      return [];
    }
    let ans = [];
    let cns = 0;
    //创建二维数组
    ans[0] = [];
    ans[0][0] = array[0];
    for(let i = 1;i < array.length;i++){
      if(i % size == 0){
        cns++;
        ans[cns] = [];
      }
      ans[cns][i % size] = array[i];
    }
    return ans;
  },
  /**
   * 创建一个新数组，返回原数组中所有的非假值元素
   * @param {Array} Array
   * @return {Array}
   */
  compact: function(array){
    let ans = [];
    for(let i = 0;i < array.length;i++){
      if(array[i]){
        ans[ans.length] = array[i]
      }
    }
    return ans;

    //第二种写法
    // return array.filter(x => x > 0 || x < 0);
  },
  /**
   * 返回一个将原数组与任何值或数组连接起来的数组
   * @param {Array} array
   * @param {...any} args
   * @returns {Array}
   */
  concat:function(array,...args){
    let ans = [];
    for(let i in array){
      ans[ans.length] = array[i];
    }
    for(let i = 0;i < args.length;i++){
      if(Array.isArray(args[i])){
        for(let j in args[i]){
          ans[ans.length] = args[i][j];
        }
      }else{
        ans[ans.length] = args[i];
      }
    }
    return ans;
  },
  /**
   * 返回一个原数组中没有在其余数组中出现的元素的集合
   * @param {Array} array 
   * @param  {...Array} args liangddkk.difference([3, 2, 1], [4, 2]);
   * @returns {Array}
   */
  difference: function(array,...args){
    let map = {};
    let ans = [];
    for(let i = 0;i < array.length;i++){
      map[array[i]] = true;
    }
    for(let i in args){
      for(let j in args[i]){
        if(map[args[i][j]]){
          map[args[i][j]] = false;
        }
      }
    }
    for(let i in array){
      if(map[array[i]]){
        ans[ans.length] = array[i]; 
      }
    }
    return ans;

    //第二种写法
    // let arrays = []
    // for (let x of values) {
    //     arrays = arrays.concat(x)
    // }
    // return array.filter((x) => !arrays.includes(x))
  },
  /**
   * 返回一个去掉前n项的数组,n默认值为1
   * @param {Array} array 
   * @param {Number} n 
   * @returns {Array}
   */
  drop:function(array,n = 1){
    let ans = [];
    for(let i = n;i < array.length;i++){
      ans[ans.length] = array[i];
    }
    return ans
  },
  /**
   * 将原数组中的某段区间数值填充为val
   * @param {Array} array 
   * @param {any} val 
   * @param {Number} start 
   * @param {Number} end 
   */
  fill:function(array,val,start = 0,end = array.length){
    let ans = [];
    for(let i = 0;i < start;i++){
      ans[ans.length] = array[i];
    }
    for(let i = start;i < end;i++){
      ans[ans.length] = val;
    }
    for(let i = end;i < array.length;i++){
      ans[ans.length] = array[i];
    }
    return ans;
  },
  /**
   * 返回数组第一个数
   * @param {Array} array
   * @returns {Number} 
   */
  head: function(array){
    return array[0];
  },
  /**
   * 从某个起始值开始，返回第一个出现val的下标
   * @param {Array} array 
   * @param {Number} val 
   * @param {Number} fromIndex 
   */
  indexOf: function(array,val,fromIndex = 0){
    for(let i = fromIndex;i < array.length;i++){
      if(array[i] === val || (val !== val && array[i] !== array[i])){
        return i;
      }
    }
    return -1;
  },
  /**
   * 去除数组中的最后一个数
   * @param {Array} array 
   */
  initial: function(array){
    let ans = [];
    for(let i = 0;i < array.length - 1;i++){
      ans[ans.length] = array[i];
    }
    return ans;
  },
  /**
   * 将 array 中的所有元素转换为由 separator 分隔的字符串
   * @param {Array} array 
   * @param {String} separator 
   * @returns {String}
   */
  join: function(array,separator = ','){
    let ans = '';
    if(array.length != 0){
      ans += '' + array[0]
    }
    for(let i = 1;i < array.length;i++){
      ans += '' + separator + array[i];
    }
    return ans;
  },
  /**
   * 获取array中的最后一个元素
   * @param {Array} array 
   * @returns {any} 
   */
  last: function(array){
    return array[array.length - 1];
  },
  /**
  * 从某个起始值从右往左，返回第一个出现val的下标
  * @param {Array} array 
  * @param {Number} val 
  * @param {Number} fromIndex 
  */
 lastIndexOf: function(array,val,fromIndex = array.length - 1){
   for(let i = fromindex;i >= 0;i--){
    if(array[i] === val ||(val !== val && array[i] !==array[i])){
      return i;
    }
    return -1;
   }
 },
 /**
  * 获取array数组的第n个元素。如果n为负数，则返回从数组结尾开始的第n个元素。
  * @param {Array} array 
  * @param {Number} n 
  */
 nth: function(array,n = 0){
  if(n >= 0){
    return array[n];
  }else{
    return array[array.length + n];
  }
 },
 /**
  * 移除数组array中所有和给定值相等的元素
  * @param {Array} array 
  * @param  {...any} args 
  * @returns {Array}
  */
 pull: function(array,...args){
  let map = {};
  let ans = [];
  for(let i in args){
    map[args[i]] = true;
  }
  for(let i in array){
    if(!map[array[i]]){
      ans[ans.length] = array[i];
    }
  }
  array = [];
  for(let i in ans){
    array[i] = ans[i];
  }
  return array;
 },
 /**
  * 移除数组array中所有和给定值相等的元素, 函数接受两个数组参数
  * @param {Array} array 
  * @param {Array} values 
  * @returns {Array}
  */
 pullAll: function(array,values){
  let map = {};
  let ans = [];
  for(let i in values){
    map[value[i]] = true;
  }
  for(let i in array){
    if(!map[array[i]]){
      ans[ans.length] = array[i];
    }
  }
  array = [];
  for(let i in ans){
    array[i] = ans[i];
  }
  return array;
 },
 /**
  * 根据索引 indexes，移除array中对应的元素，并返回被移除元素的数组。
  * @param {Array} array 
  * @param  {...any} args 
  */
  pullAt: function(array,...values){
    let map = {};
    let ans = [];
    for(let i in values){//i为"0"开头
      map[values[i]] = true;
    }
    for(let i in array){
      if(!map[i]){
        ans[ans.length] = array[i];
      }
    }
    return ans;
  },
  /**
   * 反转array，使得第一个元素变为最后一个元素，第二个元素变为倒数第二个元素，依次类推
   * @param {Array} array
   * @returns {Array} 
   */
  reverse: function(array){
    let left = 0;
    let right = array.length - 1;
    while(left < right){
      let tmp = array[right];
      array[left] = array[right];
      array[right] = tmp;
      left++;
      righ--;
    }
    let ans = [];
    for(let i in array){
      ans[i] = array[i];
    }
    return ans;
  },
  /**
   * 裁剪数组array，从 start 位置开始到end结束
   * @param {Array} array 
   * @param {Number} start 
   * @param {Number} end 
   * @returns {Array}
   */
  slice: function (array,start = 0,end = array.length) {
    let ans = [];
    for(let i = start;i < end;i++){
      ans[ans.length] = array[i];
    }
    return ans;
  },
  /**
   * 用二分法在原排序数组中查找val应该插入的下标值
   * @param {Array} array 
   * @param {Number} val
   * @returns {Number} 
   */
  sortedIndex: function (array,val){
    let low = 0;
    let high = array.length - 1;
    if(val > array[high]){
      return array.length;
    }
    while(low < high){
      //取整
      let mid = Math.floor((low + high) / 2);
      if(array[mid] < val){
        low = mid + 1;
      }else{
        high = mid - 1;
      }
    }
    return low;
  },
  sortedIndexOf: function(array,val) {
    let low = 0;
    let high = array.length - 1;
    if(val > array[high]){
      return array.length;
    }
    while(low < high){
      let mid = Math.floor((low + high) / 2);
      if(array[mid] < val){
        low = mid + 1;
      }else{
        high = mid;
      }
    }
    if(low >= array.length){
      return -1;
    }
    return low;
  },
  /**
   * 获取除了array数组第一个元素以外的全部元素
   * @param {Array} array
   * @returns {Array} 
   */
  tail: function(array){
     let ans = [];
     for(let i = 1;i < array.length;i++){
      ans[ans.length] = array[i];
     }
     return ans;
   },
   /**
    * 从array数组的起始元素开始提取n个元素
    * @param {Array} array 
    * @param {Number} n
    * @returns {Array} 
    */
   take: function(array,n = 1){
     let ans = [];
     for(let i = 0;i < n;i++){
    // if(i >= array.length){
    //   break;
    // }
      ans[ans.length] = array[i];
     }
     return ans;
   },
   /**
    * 从array数组的最后一个元素开始提取n个元素
    * @param {Array} array 
    * @param {Number} n
    * @returns {Array} 
    */
   takeRight:function(array,n = 1){
     let ans = [];
     for(let i = array.length - n;i < array.length;i++){
       //防止i小于0
      if(i < 0){
        continue;
      }
      ans[ans.length] = array[i];
     }
     return ans;
   },
   /**
    * 返回一个并集
    * @param  {...any} arrays 
    */
   union: function(...array){
     let map = {};
     let ans = [];
     for(let i in array){
      for(let j in array[i]){//多维数组没有值就不遍历了
        if(!map[array[i][j]]){
            map[array[i][j]] = true;
            ans[ans.length] = array[i][j];
        }
      }
     }
     return ans;
   },
   /**
    * 数组去重
    * @param {Array} array 
    * @returns {Array}
    */
   uniq: function(array){
     let map = {};
     let ans = [];
     for(let i in array){
      if(!map[array[i]]){
        map[array[i]] = true;
        ans[ans.length] = array[i];
      }
     }
     return ans;
   },
   /**
     * 一个分组元素的数组，数组的第一个元素包含所有给定数组的第一个元素，数组的第二个元素包含所有给定数组的第二个元素，以此类推
     * @param  {...Array} arrays
     * @returns {Array} 
     */
    zip: function(...array){
      let ans = [];
      ans[0] = [];
      let cnt = 0;
      let maxLen = 0;
      for(let i in array){
        maxLen = (maxLen > array[i].length ? maxLen:array[i].length);
      }
      for(let j = 0;j < maxLen;j++){
        ans[cnt] = [];
        for(let i in array){
          ans[cnt][ans[cnt].length] = array[i][cnt];
        }
        cnt++;
      }
      return ans;
    },
    /**
     * 返回数组字符串或者对象的长度或者键值对的数量
     * @param {Array/Object} values 
     * @returns {Number}
     */
    size: function(value){
      //如果集合是类数组或字符串，返回其length
      if(Array.isArray(value) || typeof(value) === 'string'){
        return value.length;
      }else if(Object.prototype.toString.call === '[object Object]'){
        //如果集合是对象，返回其可枚举属性的个数
        let cnt = 0;
        for(let i in value){
          cnt++;
        }
        return cnt;
      }
    },
    /**
     * 根据precision向下舍入 number
     * @param {Number} num 
     * @param {Number} precision 
     * @returns {Number}
     */
    floor: function(num,precision = 0){
      //先乘
      let ans = Math.pow(10,precision) * num;
      //向下取整
      ans = Math.floor(ans);
      //后除
      ans /= Math.pow(10,precision);
      return ans;
    },
    /**
     * 返回数组中的最大值 
     * @param {Array} array 
     * @returns {Number}
     */
    max: function(array){
      if(array == null || array.length == 0){
        return undefined;
      }
      let ans = -Infinity;//最小值
      for(let i in array){
        ans = ans < array[i] ? ans : array[i];
      }
      return ans;
    },
    /**
     * 返回数组中的最小值 
     * @param {Array} array 
     * @returns {Number}
     */
    min: function(array){
      if(array == null || array.length == 0){
        return undefined;
      }
      let ans = Infinity;//最大值
      for(let i in array){
        ans = ans < array[i] ? ans : array[i];
      }
      return ans;
    },
    /**
     * 返回数组的平均值 
     * @param {Array} array 
     * @returns {Number}
     */
    mean: function(array){
      if(array == null || array.length == 0){
        return undefined;
      }
      let s = 0;
      for(let i in array){
        s += array[i];
      }
      return s / array.length;
    },
    /**
     * 根据precision四舍五入 number
     * @param {Number} num 
     * @param {Number} precision 
     */
    round: function(num,precision = 0){
      let ans = Math.pow(10,precision) * num;
      ans = Math.round(ans);
      ans /= Math.pow(10,precision);
      return ans;
    },
    /**
     * 返回数组的总和 
     * @param {Array} array 
     * @returns {Number}
     */
    sum: function(array){
        if(array == null || array.length == 0) return undefined;
        let s = 0;
        for(let i in array){
            s += array[i];
        }
        return s;
    },
    /**
     * 返回两数相除的商
     * @param {Number} dividend 
     * @param {Number} divisor
     * @returns {Number} 
     */
    divide: function(dividend, divisor){
        return dividend / divisor;
    },
    /**
     * 返回两数相加的和
     * @param {Number} augend 
     * @param {Number} addend 
     * @returns {Number} 
     */
    add: function(augend, addend ){
        return augend + addend;
    },
    /**
     * 根据precision向上舍入 number
     * @param {Number} num 
     * @param {Number} precision 
     */
    ceil: function(num, precision = 0){
        let ans = Math.pow(10, precision) * num;
        ans = Math.ceil(ans);
        ans /= Math.pow(10, precision);
        return ans;
    },
    /**
     * 返回两数相乘的积pppp
     * @param {Number} augend 
     * @param {Number} addend 
     * @returns {Number} 
     */
    add: function(augend, addend ){
        return augend + addend;
    },
    /**
     * 返回两数相减的差
     * @param {Number} minuend  
     * @param {Number} subtrahend  
     * @returns {Number} 
     */
    subtract: function(minuend , subtrahend  ){
        return minuend  - subtrahend;
    },
    /**
     * 除了它接收分组元素的数组，并且创建一个数组，分组元素到打包前的结构
     * @param  {Array} array
     * @returns {Array} 
     */
    unzip:function(array){
      let ans = [];
      ans[0] = [];
      let cnt = 0;
      let maxLen = 0;
      for(let i = 0;i < array.length;i++){
        maxLen = maxLen > array[i].length ? maxLen : array[i].length;
      }
      for(let j = 0;j < maxLen;j++){
        ans[cnt] = [];
        for(let i = 0;i < array.length;i++){
          ans[cnt][ans[cnt].length] = array[i][cnt];
        }
        cnt++;
      }
      return  ans;
    },
    /**
     * 此方法类似于_.unzip，除了它接受一个iteratee指定重组值应该如何被组合。iteratee 调用时会传入每个分组的值： (...group)。
     * @param  {Array} array
     * @param  {[iteratee=_.identity] (Function)}: 这个函数用来组合重组的值。
     * @returns {Array} 
     */
    unzipWith:function(...array){
      let pre = array[array.length - 1];
      let zipArr = array.slice(0,array.length - 1);
      zipArr = this.flatten(zipArr);
      let unzipArr = this.unzip(zipArr);
      let ans = [];
      let cnt = 0;
      for(let i = 0;i < unzipArr.length;i++){
        let tmp = unzipArr[i][0];
        for(let j = 1;j < unzipArr[i].length;j++){
          tmp = pre(tmp,unzipArr[i][j]);
        }
        ans.push(tmp);
      }
      return ans;
    },
    /**
     * 返回一个去掉后n项的数组
     * @param {Array} array 
     * @param {Number} n 
     * @returns {Array}
     */
    dropRight: function(array,n = 1){
      let ans = [];
      for(let i = 0;i < array.length - n;i++){
        ans[ans.length] = array[i];
      }
      return ans;
    },
    /**
     * value是否大于other
     * @param {*} value 
     * @param {*} other 
     * @returns {Boolean}
     */
    gte: function(value,other){
      return value >= other;
    },
    /**
     *创建一个包含从 start 到 end，但不包含 end 本身范围数字的数组 
     * @param  {...Number} args
     * @returns {Array} 
     */
    range: function(...args){
      let ans = [];
      let start = 0;
      let end = 0;
      let step = 1;
      if(args.length == 2){
        end = args[0];
        if(end < 0){
          step = -1;
        }
        if(end == 0){
          return [];
        }
      }
      if(args.length == 2){
        start = args[0];
        end = args[1];
        if(start > end){
          step = -1;
        }
      }
      if(args.length == 3){
        start = args[0];
        end = args[1];
        step = args[2];
      }
      ans[0] = start;
      if(step == 0){
        ans.length = Math.abs(start - end);
        ans.fill(start);
        return ans;
      }
      for(let i = 1;i < Math.abs((start - end) / step);i++){
        ans[ans.length] = ans[ans.length - 1] + step;
      }
      return ans;
    },
    /**
     * 降序输出层级值
     * @param {Number} start = 0 要检查的值
     * @param {Number} end 开始范围
     * @param {Number} step = 1 不包括
     * @returns {Boolean} 
     */
    rangeRight: function(...args){
      let tmp  = this.range(...args);//升序输出层级值
      let ans = [];
      for(let i = tmp.length - 1;i >= 0;i--){//降序输出层级值
        ans.push(tmp[i]);
      }
      return ans;
    },
    /**
     * 拆分字符串string中的词为数组
     * @param {String} string 
     * @param {RegExp} pattern 
     */
    words: function(string,pattern = /\w+/g){
      pattern.lastIndex = 0;
      let ans = [];
      while(pattern.lastIndex != null){
        let tmp = pattern.exec(string);
        if(tmp == null){
          break;
        }else{
          ans[ans.length] = tmp[0];
        }
      }
    },
    /**
     * 首字母大写
     * @param {String} string
     * @returns {String} 
     */
    upperFirst: function(string){
      let ans = '';
      let start = 0;
      if(string[0].charCodeAt() >= 97 && string[0].charCodeAt() <= 122){//大小写字母范围，大写字母A的编码是65，小写字母z的编码是122，大写范围是32
        ans += String.fromCharCode(string[0].charCodeAt() - 32);//大写字母范围
        start = 1;
      }
      for(let i = start;i < string.length;i++){
        ans += string[i];
      }
      return ans;
    },
    /**
     * 将字符串string转换为用空格分隔的大写单词
     * @param {String} string 
     * @returns {String}
     */
    upperCase: function(string){
      let ans = '';
      let point = 0;
      let flag = false;//默认值
      for(let i = 0;i < string.length;i++){
        if(string[i].charCodeAt() >= 97 && string[i].charCodeAt() <= 122){//97和122是小写字母范围
          ans += String.fromCharCode(string[i].charCodeAt() - 32);//大写字母范围
          flag = true;
        }else if(string[i].charCodeAt() >= 65 && string[i].charCodeAt() <= 90){
          if(flag){
            ans += ' ';
            flag = false;
          }
          ans += string[i];
        }else{
          if(flag){
            ans += '';
            flag = false;
          }
          continue;//继续下一循环
        }
      }
      let res = '';
      if(ans[ans.length - 1] == ' '){//结尾是空格时
        for(let i = 0;i < ans.length - 1;i++){
          res += ans[i];
        }
        return res;
      }
      return ans;
    },
    /**
     * 首字母小写
     * @param {String} string
     * @returns {String} 
     */
    lowerFirst: function(string){
      let ans = '';
      let start = 0;
      if(string[0].charCodeAt() >= 65 && string[0].charCodeAt() <= 97){//String.fromCharCode(90)为Z
        ans += String.fromCharCode(string[0].charCodeAt() + 32);
        start = 1;
      }
      for(let i = start;i < string.length;i++){
        ans += string[i];
      }
      return ans;
    },
    /**
     * string字符串长度小于 length 则从左侧和右侧填充字符
     * @param {String} string 
     * @param {Number} length 
     * @param {String} chars
     * @returns {String}
     */
    pad: function(string,length = 0,chars = ''){
      if(length < string.length){
        length = string.length;
      }
      //分成两半
      let mid = Math.floor((length - string.length) / 2);
      let ans = '';
      //取整
      for(let i = 0;i < Math.floor(mid / chars.length);i++){
        ans += chars;
      }
      //取余数截断
      for(let i = 0;i < mid % chars.length;i++){
        ans += chars[i];
      }
      //填充字符串
      ans += string;
      for(let i = 0;i < Math.floor((length - string.length - mid) / chars.length); i++){
        ans += chars;
      }
      //取余数
      for(let i = 0;i < (length - string.length - mid) % chars.length;i++){
        ans += chars[i];
      }
      return ans;
    },
    /**
     * string字符串长度小于 length 则在右侧填充字符
     * @param {String} string 
     * @param {Number} length 
     * @param {String} chars
     * @returns {String}
     */
    padEnd: function(string,length = 0,chars = ' '){
      if(length < string.length){
        length = string.length;
      }
      let ans = '';
      ans += string;
      for(let i = 0;i < Math.floor((length - string.length) / chars.length);i++){
        ans += chars;
      }
      for(let i = 0;i < (length - string.length) % chars.length;i++){
        ans += chars[i];
      }
      return ans;
    },
    /**
     * string字符串长度小于 length 则在右侧填充字符
     * @param {String} string 
     * @param {Number} length 
     * @param {String} chars
     * @returns {String}
     */
    padStart: function(string,length = 0,chars = ' '){
      if(length < string.length){
        length = string.length;
      }
      let ans = '';
      for(let i = 0;i < Math.floor((length - string.length) / chars.length);i++){
        ans += chars;
      }
      for(let i = 0;i < (length - string.length) % chars.length;i++){
        ans += chars[i];
      }
      ans += string;
      return ans;
    },
    /**
     * 
     * 重复 N 次给定字符串
     * @param {String} string 
     * @param {Number} n
     * @returns {String} 
     */
    repeat: function(string,n = 1){
      let ans = "";
      for(let i = 0;i < n;i++){
        ans += string;
      }
      return ans;
    },
    /**
     * 返回数组们的交集
     * @param  {...Array} arrays 
     * @returns {Array}
     */
    intersection: function(...arrays){
      let firstArr = [];
      for(let i = 0;i < arrays[0].length;i++){
        firstArr[firstArr.length] = arrays[0][i];
      }
      for(let i = 1;i < arrays.length;i++){
        let tmp = getSame(firstArr,arrays[i]);
        firstArr = [];
        for(let i in tmp){
          firstArr[firstArr.length] = tmp[i];
        }
      }

      function getSame(arr1,arr2){
        let map = [];
        let ans = [];
        for(let i in arr1){
          map[arr1[i]] = true;
        }
        for(let i in arr2){
          if(map[arr2[i]]){
            ans[ans.length] = arr2[i];
          }
        }
        console.log(map)
        return ans;
      }
      return firstArr;
    },
    /**
     * 返回数组们交集的补集；
     * @param  {...Array} arrays 
     * @returns {Array}
     */
    xor: function(...arrays){
      let map = {};
      //map: {1: 1, 2: 2, 3: 1}
      //数组从0遍历，不越界
      for(let i in arrays){
        for(let j in arrays[i]){
          if(map[arrays[i][j]]){
            map[arrays[i][j]]++;//有值的加一
          }else{
            map[arrays[i][j]] = 1;//无值的添加导对象
          }
        }
      }
      let ans = [];
      //对象从小到大遍历
      for(let key in map){
        if(map[key] == 1){//交集的补集
          ans[ans.length] = Number(key);//字符转数组
        }
      }
      return ans;
    },
    /**
     * value 是否小于other
     * @param {*} value 
     * @param {*} other 
     * @returns {Boolean}
     */
    lt: function(value, other){
        return value < other;
    },
    /**
     * value 是否小于等于other
     * @param {*} value 
     * @param {*} other 
     * @returns {Boolean}
     */
    lte: function(value, other){
        return value <= other;
    },
    /**
     * 返回一个object键值倒置后的对象 如果 object 有重复的值，后面的值会覆盖前面的值。
     * @param {Object} object 
     * @returns {Object}
     */
    invert: function(object){
        let ans = {};
        for(let i in object){
            ans[object[i]] = i;
        }
        return ans;
    },
    /**
     * 返回对象的键
     * @param {Object} object 
     * @returns {Object}
     */
    keys: function(object){
        let newObj = Object(object);
        let ans = [];
        for(let i in newObj){
            if(newObj.hasOwnProperty(i) == true)
                ans[ans.length] = i;
        }
        return ans;
    },
    /**
     * 整合多个对象
     * @param  {...Object} objects 
     * @returns {Object}
     */
    assign: function(...objects){
        let ans = {};
        for(let i in objects){
            for(let j in objects[i]){
                if(objects[i].hasOwnProperty(j) == true){
                    ans[j] = objects[i][j];
                } 
            }
        }
        return ans;
    },
    /**
     * 返回没有被选中的属性的整合对象
     * @param {Object} object 
     * @param {String/String[]} value
     * @returns {Object} 
     */
    omit: function(object, value){
        let ans  = {};
        let map = {};
        if(Array.isArray(value)){
            for(let i in value){
                map[value[i]] = true;
            }
        }else{
            map[value] = true;
        }
        for(let i in object){
            if(map[i]) continue;
            else ans[i] = object[i];
        }
        return ans;
    },
    /**
     * 返回被选中的属性的整合对象
     * @param {Object} object 
     * @param {String/String[]} value
     * @returns {Object} 
     */
    pick: function(object, value){
        let ans  = {};
        let map = {};
        if(Array.isArray(value)){
            for(let i in value){
                map[value[i]] = true;
            }
        }else{
            map[value] = true;
        }
        for(let i in object){
            if(map[i]) ans[i] = object[i];
        }
        return ans;
    },
    /**
     * 返回一个首字母大写，其余小写的字符串
     * @param {String} string
     * @returns {String} 
     */
    capitalize: function(string){
      let ans = '';
      if(string[0].charCodeAt() >= 97 && string[0].charCodeAt() <= 122){
        ans += String.fromCharCode(string[0].charCodeAt() - 32);//小写变大写
      }else{
        ans += string[0];
      }
      for(let i = 1;i < string.length;i++){
        if(string[i].charCodeAt() >= 97 && string[i].charCodeAt() <= 122){//小写输出
          ans += string[i];
        }else{
          ans += String.fromCharCode(string[i].charCodeAt() + 32);//大写变小写
        }
      }
    },
    /**
     * 检查字符串string是否以给定的target字符串结尾
     * @param {String} string  要检索的字符串
     * @param {String} target  要检索字符
     * @param {Number} position 检索的位置
     * @returns {Boolean} 
     */
    endsWith:function(string,target,position){
      if(position == null){
        position = string.length - target.length;//数组的最后一位
      }else{
        position = position - 1;//数组的位置
      }
      for(let i = position,j = 0;i < target.length;i++,j++){
        if(string[i] != target[j]){
          return false;
        }
        return true;
      }
    },
    /**
     * 返回两数的积
     * @param {Number} multiplier 
     * @param {Number} multiplicand 
     */
    multiply: function(multiplier,multiplicand){
        return multiplier * multiplicand;
    },values: function(object){
      let newObj = Object(object);
      let ans = [];
      for(let i in newObj){
          if(newObj.hasOwnProperty(i) == true)
              ans[ans.length] = newObj[i];
      }
      return ans;
  },
  /**
   * 这个方法类似 _.fromPairs，除了它接受2个数组，第一个数组中的值作为属性标识符（属性名），第二个数组中的值作为相应的属性值。
   * @param {Array} props 
   * @param {Array} values 
   */
  zipObject: function(props = [],values = []){
    let ans = {};
    for(let i = 0,j = 0;i < props.length,j < values.length;i++,j++){
      ans[props[i]] = values[j];
    }
    return ans;
  },
  /**
   * 从array中获得一个随机元素
   * @param {Array/Object} array 
   */
  sample: function(array){
    let r = Math.random();
    let index = Math.floor(r * array.length);
    return array[index];
  },
  /**
   * 从array中获得 n 个随机元素
   * @param {Array} array 
   * @param {Number} n 
   * @returns {Array}
   */
  sampleSize:function(array,n = 1){
    let ans = [];
    let flag = [];
    flag.length = array.length;
    flag.fill(false);//填充false
    if(n > array.length){
      n = array.length;
    }
    while(ans.length < n){
      let r = Math.random();
      let index = Math.floor(r * array.length);
      if(!flag[index]){
        ans[ans.length] = array[index];
        flag[index] = true; //判断过的index为true
      }
    }
    return ans;
  },
  /**
   * 返回一个被打乱值的集合
   * @param {Array} array 
   * @returns {Array}
   */
  shuffle: function(array){
    let ans = [];
    let flag = [];
    flag.length = array.length;
    flag.fill(false);
    while(ans.length < array.length){
      let r = Math.random();
      let index = Math.floor(r * array.length);
      if(!flag[index]){
        ans[ans.length] = array[index];
        flag[index] = true;
      }
    }
    return index;
  },
  /**
   * 从string字符串中移除前面和后面的 空格 或 指定的字符
   * @param {String} string 
   * @param {String} chars
   * @returns {String} 
   */
  trim: function(string,chars = " "){
    if(chars == null){
      chars = ' ';
    }
    let ans = ' ';
    let left = 0;
    let right = string.length - 1;
    let map = {};
    for(let i in chars){
      map[chars[i]] = true;
    }
    while(map[string[left]] && left < string.length){
      left++;
    }
    while(map[string[right]] && right >= 0){
      right--;
    }
    for(let i = left;i < right;i++){
      ans += string[i];
    }
    return ans;

  },
  /**
   * 从string字符串中移除前面和后面的 空格 或 指定的字符
   * @param {String} string 
   * @param {String} chars
   * @returns {String} 
   */
  trimStart: function(string,chars = " "){
    if(chars == null){
      chars = ' ';
    }
    let ans = ' ';
    let left = 0;
    let right = string.length - 1;
    let map = {};
    for(let i in chars){
      map[chars[i]] = true;
    }
    while(map[string[left]] && left < string.length){
      left++;
    }
    for(let i = left;i < right;i++){
      ans += string[i];
    }
    return ans;

  },
  /**
   * 从string字符串中移除前面和后面的 空格 或 指定的字符
   * @param {String} string 
   * @param {String} chars
   * @returns {String} 
   */
  trimEnd: function(string,chars = " "){
    if(chars == null){
      chars = ' ';
    }
    let ans = ' ';
    let left = 0;
    let right = string.length - 1;
    let map = {};
    for(let i in chars){
      map[chars[i]] = true;
    }
    while(map[string[right]] && right >= 0){
      right--;
    }
    for(let i = left;i < right;i++){
      ans += string[i];
    }
    return ans;

  },
  /**
   * 转义string中的 "&", "<", ">" , '"' , "'" , 和 "`" 字符为HTML实体字符。
   * @param {String} string 
   * @returns {String}
   */
  escapge: function(string){
    let map = {
      '&' : '&amp;',
      '<' : '&lt;',
      '>' : '&gt;',
      '"' : '&quot;',
      "'" : '&apos;',
      '`' : '&grave;'
    }
    let ans = '';
    for(let i = 0;i < string.length;i++){
      if(map[string[i]]){
        ans += map[string[i]];
      }else{
        ans += string[i];
      }
      return ans;
    }
  },
  /**
   * 转换string字符串为指定基数的整数。
   * @param {String} string 
   * @param {Number} radix 
   * @returns {Number}
   */
  parseInt: function(string,radix = 10){
    let ans = 0;
    if(radix == 0){
      radix = 10;
    }
    let map = {
      'A' : 10,
      'B' : 11,
      'C' : 12,
      'D' : 13,
      'E' : 14,
      'F' : 15 
    } 
    for(let i = 0;i < string.length;i++){
      ans *= radix;
      if(map[string[i]]){
        ans += map[string[i]];
      }else{
        ans += Number(string[i]);//字符转换为数字
      }
      return ans;
    }
  },
  /**
   * 检查字符串string是否以 target 开头
   * @param {String}  string 要检索的字符串
   * @param {String} target 要检索的字符
   * @param {Number} position 检索的位置
   * @returns {Boolean}
   */
  startWith: function(string,pattern,replacement){
    let start = 0;
    for(let i = position,j = 0;i < string.length,j < target.length;i++,j++){
      if(string[i] != target[j]){
        return false;
      }

      if(string.length - position >= target.length){
        return true;
      }else{
        return false;
      }
    }
  },
  /**
   * 转换字符串string以空格分开单词，并转换为小写,"FooBar"转换"foo bar"
   * @param {String} string 
   * @returns {String}
   */
  lowerCase: function(string){
    let ans = '';
    let point = 0;
    while(point < string.length && !((string[point].charCodeAt() >= 65 && string[point].charCodeAt() <= 90) || (string[point].charCodeAt() >= 97 && string[point].charCodeAt() <= 122))){
      point++;//65和90是大写，97和122是小写,不是小写字母和大写字母，point增加表明trim前端
    }
    while(point < string.length){
      if(string[point].charCodeAt() >= 97 && string[point].charCodeAt() <= 122){
        ans += string[point];
        point++;
      }else if(string[point].charCodeAt() >= 65 && string[point].charCodeAt() <= 90){
        ans += String.fromCharCode(string[point].charCodeAt() + 32);//大写转小写
        point++;
      }else{
        while(point < string.length && !((string[point].charCodeAt() >= 65 && string[point].charCodeAt() <= 90) || (string[point].charCodeAt() >= 97 && string.charCodeAt() <= 122))){
          point++;
        }
        if(point < string.length){//中间符号转换为空值
          ans += ' ';
        }
      }
    }
    return ans;
  },
  /**
   * 转换字符串string为 驼峰写法e
   * @param {String} string 
   * @returns {String}
   */
  camelCase: function(string){
    let lowStr = this.lowerCase(string);//转换为小写
    let ans = '';
    let point = 0;
    while(lowStr[point] != ' '){//空格分割,"foo bar"
      ans += lowStr[point];
      point++;
    }
    let flag = true;
    while(point < lowStr.length){
      if(lowStr[point] == ' '){
        flag = true;
      }else{
        if(flag){
          ans += String.fromCharCode(lowStr[point].charCodeAt() - 32);
          flag = false;
        }else{
          ans += lowStr[point];
        }
      }
      point++;
    }
    return ans;
  },
  /**
   * 转换字符串string为 kebab case
   * @param {String} string 
   * @returns {String}
   */
  kebabCase: function(string){
    let lowStr = this.lowerCase(string);//转换为有空格的小写
    let ans = '';
    for(let i = 0;i < lowStr.length;i++){
      if(lowStr[i] == ' '){
        ans += '-';
      }else{
        ans += lowStr[i];
      }
      return ans;
    }
  },
  /**
   * 转换字符串string为 snakeCase
   * @param {String} string 
   * @returns {String}
   */
  snakeCase: function(string){
    let lowStr = this.lowerCase(string);//转换为有空格的小写
    let ans = '';
    for(let i = 0;i < lowStr.length;i++){
      if(lowStr[i] == ' '){
        ans += '_';
      }else{
        ans += lowStr[i];
      }
      return ans;
    }
  },
  /**
   * 转换字符串string为 start case
   * @param {String} string 
   * @returns {String}
   */
  startCase: function(string){
    let ans = '';
    let point = 0;
    while(point < string.length && !((string[point].charCodeAt() >= 65 && string[point].charCodeAt() <= 90) || (string[point].charCodeAt() >= 97 && string[point].charCodeAt() <= 122))){
      point++;//65和90是大写，97和122是小写,不是小写字母和大写字母，point增加表明trim前端
    }
    while(point < string.length){
      if(string[point].charCodeAt() >= 97 && string[point].charCodeAt() <= 122){
        ans += string[point];
        point++;
      }else if(string[point].charCodeAt() >= 65 && string[point].charCodeAt() <= 90){
        //ans += String.fromCharCode(string[point].charCodeAt() + 32);//大写转小写
        ans += string[point];
        point++;
      }else{
        while(point < string.length && !((string[point].charCodeAt() >= 65 && string[point].charCodeAt() <= 90) || (string[point].charCodeAt() >= 97 && string.charCodeAt() <= 122))){//尾端trim值
          point++;
        }
        if(point < string.length){//中间符号转换为空值
          ans += ' ';
        }
      }
    }
    return ans;
  },
  /**
   * 返回一个新的减少一级array嵌套深度的数组
   * @param {Array} array 
   * @returns {Array}
   */
  flatten: function(array){
    let ans = [];
    for(let i in array){
      if(Array.isArray(array[i])){//Array.isArray(array[i]): false是否是数组
        for(let j in array[i]){
          ans[ans.length] = array[i][j];
        }
      }else{
        ans[ans.length] = array[i];
      }
    }
    return ans;
  },
  /**
   * 根据 depth 递归减少 array 的嵌套层级，flatten函数默认除掉一个array数组层级
   * @param {Array} array 
   * @param {Number} depth 
   * @returns {Array}
   */
  flattenDepth: function(array,depth = 1){
    let ans = array;
    for(let i = 0;i < depth;i++){
      ans = this.flatten(ans);//flatten函数默认除掉一个array数组层级
    }
    return ans;
  },
  /**
   * 将array递归为一维数组
   * @param {Array} array
   * @returns {Array} 
   */
  flattenDeep: function flattenDeep(array){
    //方法一 普通调用
    let res = [];
    function getDeep(arr){
      for(let i = 0;i < arr.length;i++){
        if(Array.isArray(arr[i])){
          getDeep(arr[i]);
        }else{
          res[res.length] = arr[i];
        }
      }
      return res;
    }
    return getDeep(array);

    //方法二 箭头函数

    // return [].concat(...array.map(it => Array.isArray(it)? flattenDeep(it): it));
  },
  /**
   * 返回一个由键值对pairs构成的对象
   * @param {Array} pairs 
   * @returns {Object}
   */
  fromPair: function(pairs){
    let ans = {};
    for(let i in pairs){
      ans[pairs[i][0]] = pairs[i][1];
    }
    return ans;
  },
  /**
   * 返回一个不重复的数组
   * @param {Array} 
   * @returns {Array}
   */
  sortedUniq: function(array){
    let ans = [];
    ans.push(array[0]);
    for(let i = 1;i < array.length;i++){
      if(array[i] != array[i - 1]){
        ans.push(array[i]);
      }
    }
    return ans;
  },
  /**
   * 返回一个不重复的数组
   * @param {Array} 
   * @param [iteratee] (Function) 
   * @returns {Array}
   */
  sortedUniqBy: function(array,iteratee){
    let map = {};
    let ans = [];
    for(let i in array){
      if(!map[iteratee(array[i])]){//!map[""] == true,map[""] == undefined
        ans.push(array[i]);
        map[iteratee(array[i])] = true;
      }
    }
    return ans;
  },
  /**
   * 转换数组的值
   * @param {Array} 
   * @returns {Array}
   */
  toArray:function(value){
    let ans = [];
    for(let i in value){
      ans.push(values[i]);
    }
    return ans;
  },
  /**
   * 转换 value 为一个数字
   * @param {value} 
   * @returns {value}
   */
  toNumber: function(value){
    return value == null ? null : Number(value);
  },
  /**
   * 强制转换数组
   * @param {value} 
   * @returns {Array}
   */
  castArray: function(...value){
    if(value.length == 0){
      return [];
    }
    if(Array.isArray(value)){
      return value;
    }else{
      return [value];
    }
  },
  /**
   * 返回限制在 lower 和 upper 之间的值
   * @param {value} (number): 被限制的值。
   * @param {lower} (number): 下限。
   * @param {upper} (number): 上限。
   * @returns {value} (number): 返回限制在 lower 和 upper 之间的值
   */
  clamp: function(number,lower,upper){
    if(number > upper){
      return upper;
    }
    if(number < lower){
      return lower;
    }
    return number;
  },
  /**
   * 检查 n 是否在 start 与 end 之间，但不包括 end。 如果 end 没有指定，那么 start 设置为0。 如果 start 大于 end，那么参数会交换以便支持负范围。
   * @param {Number} value 要检查的值
   * @param {Number} start 开始范围
   * @param {Number} end 不包括
   * @returns {Boolean} 
   */
  inRange: function(...nums){
    if(nums.length == 3){
      let start = nums[1] < nums[2] ? nums[1] : nums[2];
      let end = nums[1] < nums[2] ? nums[2] : nums[1];
      if(nums[0] >= start &&  nums[0] < end){
        return true;
      }else{
        return false;
      }
    }
    if(nums.length == 2){
      let start = nums[1] < 0 ? nums[1] : 0;
      let end = nums[1] < 0 ? 0 : nums[1];
      if(nums[0] >= start &&  nums[0] < end){
        return true;
      }else{
        return false;
      }
    }
  },
  /**
   * 转换整个string字符串的字符为小写
   * @param {string} string = ''
   * @returns {string} 
   */
  toLower: function(string = ''){
    let ans = '';
    for(let i = 0; i  < string.length;i++){
      if(string[i].charCodeAt() > 65 && string[i].charCodeAt() <= 90){
        ans += String.fromCharCode(string[i].charCodeAt() + 32);
      }else{
        ans += string[i];
      }
    }
  },
  /**
   * 转换整个string字符串的字符为大写
   * @param {string} string = ''
   * @returns {string} 
   */
  toUpper: function(string = ''){
    let ans = '';
    for(let i = 0; i  < string.length;i++){
      if(string[i].charCodeAt() > 97 && string[i].charCodeAt() <= 122){
        ans += String.fromCharCode(string[i].charCodeAt() - 32);
      }else{
        ans += string[i];
      }
    }
  },
  /**
   * 检查 value是否在 collection中
   * @param {Object/Array/String} collection 
   * @param {*} value 
   * @param {Number} fromIndex
   * @returns {Boolean} 
   */
  includes: function(collection,value,fromIndex = 0){
    if(Array.isArray(collection)){
      if(fromIndex >= 0){
        for(let i = fromIndex;i < collection.length;i++){
          if(collection[i] == value){
            return true;
          }
        }
      }else{
        for(let i = collection.length - 1;i >= collection.length - 1 + fromIndex; i--){
          if(collection[i] == value){
            return true;
          }
        }
      }
    }else if(Object.prototype.toString.call(collection) === '[Object Object]'){
      for(let i in collection){
        if(collection[i] == value){
          return true;
        }
      }
    }else{
      let re1 = new RegExp(value);
      return rel.test(collection);
    }
  },
  /**
   * 返回来自 object 的paths路径相应值的数组
   * @param {Object} object 
   * @param {String/String[]} paths
   * @returns {Array} 
   */
  at: function(object,paths){
    let ans = [];
    for(let i in paths){
      let arr = paths[i].split('.');
      let re1 = /(?<=\[)\d+(?=\])/;
      let tmp = object;
      for(let j in arr){
        if(re1.test(arr[j])){
          let key = '';
          for(let k in arr[j]){
            if(arr[j][k] != '['){
              key += arr[j][k];
            }else{
              break;
            }
          }
          let num = re1.exec(arr[j])[0];
          tmp = tmp[key][Number(num)];
        }else{
          tmp = tmp[arr[j]];
        }
      }
      ans[ans.length] = tmp;
    }
    return ans;
  },
  /**
   * 根据 object对象的path路径获取值。 如果value不存在会返回defaultValue;
   * @param {Object} object 
   * @param {Array/string} path 
   * @param {*} defaultValue 
   */
  get: function(object,path,defaultValue){
    let ans;
    let tmp = object;
    if(Array.isArray(path)){
      for(let i in path){
        if(tmp[path[i]]){
          tmp = tmp[path[i]];
        }else{
          return defaultValue;
        }
      }
      return tmp;
    }else{
      let arr = path.split('.');
      let re1 = /(?<=\[)\d+(?=\])/g;
      let tmp = object;
      for(let j in arr){
        if(re1.test(arr[j])){
          let key = '';
          for(let k in arr[j]){
            if(arr[j][k] != '['){
              key += arr[j][k];
            }else{
              break;
            }
          }
          if(tmp[key]){
            tmp = tmp[key];
          }else{
            return defaultValue;
          }
          re1.lastIndex= 0;
          while(re1.lastIndex != null){
            let num = re1.exec(arr[j]);
            if(num == null){
              break;
            }
            tmp = tmp[Number(num[0])];
          }
        }else{
          if(tmp[arr[j]]){
            tmp = tmp[arr[j]];
          }else{
            return defaultValue;
          }
        }
      }
      return tmp;
    }
  },
  range:function(start,end){
    let result = [];
    for(let i = start;i <= end;i++){
      result.push(i);
    }
    return result;
  },
  /**
   * 输出水仙花数
   * @param {Number} n 
   * @return {Number} sum
   */
  isSXH:function(n){
    let m = n;
    let width = getDigitwidth(n);
    let sum = 0;
    while(n > 0){
      let digit = n % 10;
      sum += power(digit,width);
      n = (n - digit) / 10; 
    }
    return sum === m;
  },
  /**
   * 创建一个调用func的函数，通过this绑定和创建函数的参数调用func，
   * 调用次数不超过 n 次，之后再调用这个函数，将返回一次最后调用func的结果。
   * @param {Number} n 
   * @param {Function} func
   * @return {Array} result
   * 
   */
  before:function (n,func){
    let i = 0;
    let result;
    return function(...args){
      if(i < n){
        i++;
        result = func(...args);
      }
      return result;
    }
  },
  /**
   * _.before的反向函数;此方法创建一个函数，当他被调用n或更多次之后将马上触发func 。
   * @param {Number} n 
   * @param {Function} func
   * @return {Array} result
   * 
   */
  after:function (n,func){
    let i = 0;
    let result;
    return function(...args){
      if(i < n){
        i++;
        result = func(...args);
      }
      return result;
    }
  },
  /**
   * 创建一个调用func的函数。调用func时最多接受 n个参数，忽略多出的参数。
   * @param {[Number]} n 可以不传 
   * @param {Function} func
   * @return {Function} func
   * 
   */
  ary:function(func,n = func.length){
    return function(...args){
      return func(...args.slice(0,n));
    }
  },
  /**
   * 创建一个最多接受一个参数的函数，忽略多余的参数。
   * @param {Function} func
   * @return {Function} func
   * 
   */
  unary:function(func){
    return function(args){
      return func(args);
    }
  },
  /**
   * 创建一个函数，调用func时候接收翻转的参数。
   * @param {Function} func
   * @return {Function} func
   * 
   */
  //parseInt2 = flip(parseInt)
  //parseInt3 = parseInt2.bind(null, 16)
  //;['1','2','a'].map( unary(parseInt3))
  flip:function(){
    return function(){
      return func(...args.reverse());
    }
  },
  /**
   * 创建一个针对断言函数 func结果取反的函数。
   * func断言函数被调用的时候,this绑定到创建的函数,并传入对应参数。
   * @param {Function} func
   * @return {Function} func
   */
  negate:function(){
    return function(){
      return !func(...args);//对函数当成一个值，相当于反函数
    }
  },
  /**
   * _.filter的反向方法;此方法 返回 predicate（断言函数）
   * 不返回truthy(真值)的collection(集合)元素(注释：非真)。
   * @param {Function} func
   * @return {Function} func
   */
  reject:function(ary,test){//自己实现的filter函数
    return this.filter(ary,negate(test));
    // let result = [];
    // for(let i = 0;i < ary.length;i++){
    //   if(!test(ary[i])){
    //     result.push(ary[i]);
    //   }
    // }
    return result;
  },
  some:function(ary, test) {//自己实现的every函数
    return !every(ary, negate(test))
  },
  /**
   * 创建一个函数，调用func时，this绑定到创建的新函数，
   * 把参数作为数组传入，类似于Function#apply.
   * @param {Function} func
   * @return {Function} func
   */
  spread:function(func) {
    return function (ary) {
      return func(...ary);
      // return func.apply(null，ary);函数绑定到数组
    }
  },
  /**
   * 创建一个调用func的函数,thisArg绑定func函数中的 this (注：this的上下文为thisArg)，
   * 并且func函数会接收partials附加参数。_.bind.placeholder值，默认是以_作为附加部分参数的占位符。
   * 注意: 不同于原生的Function#bind，这个方法不会设置绑定函数的"length"属性。
   * @param {Function} func
   * @return {Function} func
   */
  bind:function(f, ...fixedArgs) { // [1,null,null,3]
    return function bound(...args) {//[7,8,9]
      let copy = fixedArgs.slice()
      let j = 0
  
      for (let i = 0; i < copy.length; i++) {
        if (copy[i] === null) {//绑定参数
          copy[i] = args[j++]
        }
      }
      while (j < args.length) {
        copy.push(args[j++])
      }
      
      return f(...copy)
    }
  },
  filter:function(ary,predicate) { // [1,null,null,3]
    let test = predicate;
    if(typeof predicate === 'string'){
      test = it => it[predicate];
    }else if(Array.isArray(predicate)){//{active:true,gender:'f'}
      test = it => it[predicate]
    }else if(typeof predicate === 'object'){//{active:true,gender:'f'}
      if(Array.isArray(predicate))
      predicate = this.fromPair(predicate);
      test = (it) => {
        for(let key in predicate){
          if(predicate[key] != it[key]){
            return false;
          }
        }
        return true;
      }
    }
  },
  //lodash写法
  filterOffical:function(ary,predicate) { // [1,null,null,3]
    predicate = this.iterateeOfficial(predicate);
  },
  /**
   * 创建一个函数，通过创建函数的参数调用 func 函数。 如果func是一个属性名，
   * 传入包含这个属性名的对象，回调返回对应属性名的值。 如果func是一个对象，
   * 传入的元素有相同的对象属性，回调返回true。其他情况返回false 。
   * @param {Function} func
   * @return {Function} func
   */
  iteratee:function(ary,predicate) {
    let test = predicate;
    if(typeof predicate === 'string'){
      test = it => it[predicate];
    }else if(Array.isArray(predicate)){//{active:true,gender:'f'}
      test = it => it[predicate]
    }else if(typeof predicate === 'object'){//{active:true,gender:'f'}
      if(Array.isArray(predicate))
      predicate = this.fromPair(predicate);
      test = (it) => {
        for(let key in predicate){
          if(predicate[key] != it[key]){
            return false;
          }
        }
        return true;
      }
    }
  },
  //lodash写法
  /**
   * 创建一个深比较的方法来比较给定的对象和 source 对象。
   * 如果给定的对象拥有相同的属性值返回 true，否则返回 false。
   * 注意: 创建的函数相当于_.isMatch应用 source 。
   * 部分比较匹配空数组和空对象源值，分别针对任何数组或对象的价值。见_.isEqual支持的价值比较的列表。
   * @param {*} ary 
   * @param {*} predicate 
   */
  matches:function(target) {
    return function(obj){
      for(let key in target){
        if(obj[key] !== target[key]){
          return false;
        }
      }
      return true;
    }
  },
    /**
   * 创建一个深比较的方法来比较给定对象的 path 的值是否是 srcValue 。 如果是返回 true ，否则返回 false 。
   * @param {*} ary 
   * @param {*} predicate 
   */
  matchesProperty:function(ary) {
    return this.matches(this.fromPair(this.chunk(ary,2)));
  },
  //lodash写法
  iterateeOfficial:function(ary,predicate) {
    if(typeof predicate === 'string'){
      return _.property(predicate);
    }else if(Array.isArray(predicate)){//{active:true,gender:'f'}
      return _.matches(predicate);
    }else if(typeof predicate === 'object'){//{active:true,gender:'f'}
      return _.matchesProperty(predicate);
    }
    return predicate;
  },
  property:function(prop) {
    return function(obj){
      return obj[prop];
    }
  },
  getPropertyBind:function(obj,prop){
    return obj[prop]
  },
  PropertyBind:function(prop) {//property bind写法
    return this.getPropertyBind.bind(null,_,prop);
  }
} 


