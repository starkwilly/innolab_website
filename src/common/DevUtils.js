
/* =============== TRACE START =============== */
/* console.log utility, window.debug variable dependant, implemented on app.js as window.log */
const tag = process.env.REACT_APP_DEBUG_TAG;//":INNOLAB:";
window.traceGrouped = false;
window.traceWithCaller = false;

function getCaller() {
    try {
      throw new Error();
    } catch (e) {
      // matches this function, the caller and the parent
      const allMatches = e.stack.match(/(\w+)@|at (\w+) \(/g);
      // match parent function name
      const parentMatches = allMatches[2].match(/(\w+)@|at (\w+) \(/);
      // return only name
      return parentMatches[1] || parentMatches[2];
    }
}

export function trace(...msg) {
    window.traceGrouped && console.group(tag+" trace");
    window.debug && console.log(tag + (window.traceWithCaller ? "["+getCaller()+"] >>" : ""), ...msg);
    window.traceGrouped && console.groupEnd();
}
/* =============== TRACE ENDED =============== */