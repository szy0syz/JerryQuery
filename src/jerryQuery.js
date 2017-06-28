~function () {
  // 构造函数
  var jQuery = function (selector, context) {
    return new jQuery.fn.init(selector, context)
  };
  // 修改原型
  jQuery.fn = jQuery.prototype = {
    constructor: jQuery,
    init: Init
  };
  
  function Init (selector, context) {
    this.selector = selector;
    this.content = context || document;
    //情况1：selector为字符串，启动选择器默认。
    if (typeof selector === "string") {
      //状态1:仅仅为一个*号时
      if (selector === "*") {
        console.log("你输入的是*");
      } else if (selector) {
      
      }
      this[0] = 'html';
      this[1] = 'head';
      this.length = 2;
    }
  }
  // 设置全局变量
  window.jQuery = window.$$ = jQuery;
}();
