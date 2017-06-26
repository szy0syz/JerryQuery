~function () {
    // 构造函数
    var jQuery = function (selector, context) {
        return new jQuery.fn.init(selector, context)
    }
    // 修改原型
    jQuery.fn = jQuery.prototype = {
        constructor: jQuery,
        init: function (selector, context) {...}
    }
    // 设置全局变量
    window.jQuery = window.$ = jQuery;
} ();
