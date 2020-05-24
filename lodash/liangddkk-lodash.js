var liangddkk = {
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
    ans[0] = [];
    //创建二维数组
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
      for(let i in array){
        if(map[array[i]]){
          ans[ans.length] = array[i]; 
        }
      }
      return ans;
    }
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
     * 返回两数相乘的积
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
     * 拆分字符串string中的词为数组
     * @param {String} string 
     * @param {RegExp} pattern 
     */
    
}
    
