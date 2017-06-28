~function () {
  // 构造函数
  var jerryQuery = function (selector, context) {
    return new jerryQuery.fn.init(selector, context)
  };
  // 修改原型
  jerryQuery.fn = jerryQuery.prototype = {
    constructor: jerryQuery,
    init: Init,
    offset: offset,
    css: css
  };
  
  function Init (selector, context) {
    this.selector = selector;
    this.content = context || document;
    //情况1：selector为字符串，启动选择器默认。
    if (typeof selector === "string") {
      //状态1:仅仅为一个*号时
      if (selector === "*") {
        console.log("你输入的选择器是*");
      } else if (selector) {
      
      }
      this[0] = 'html';
      this[1] = 'head';
      this.length = 2;
    }
  }
  
  function offset () {
    console.dir(this);
    console.log("offset");
  }
  
  function css () {
    console.dir(this);
    console.log("css");
  }
  
  // 设置全局变量
  window.jerryQuery = window.$$ = jerryQuery;
}();
