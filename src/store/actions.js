/**
 * count每隔1s加1
 * @param {Object} context .
 */
export const asyncIncrementCount = (context)=>{
  setTimeout(()=>{
    context.commit('incrementCount');
  }, 1000);
};

/**
 * count每隔1s加1
 * @param {Object} context .
 */
export const asyncReductionCount = (context)=>{
  setTimeout(()=>{
    context.commit('reductionCount');
  }, 1000);
};
