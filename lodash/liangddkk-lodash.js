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
  }
}