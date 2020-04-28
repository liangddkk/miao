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
  concat: function(array){
    let ans = [];
    for(let i = 0;i < array.length;i++){
      if(array[i]){
        ans[ans.length] = array[i]
      }
    }
    return ans;
  }
}