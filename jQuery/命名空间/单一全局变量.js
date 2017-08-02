/**
 * Copyright © 2017 KingTopWare Corporation. All rights reserved.
 *
 * @title: 命名空间可被看做位于一个唯一标识符下的代码单元的逻辑组合。
 *         标识符可以被许多命名空间引用，每一个命名空间本身可以包含一个分支的嵌套命名空间。
 * @prject:
 * @description: 说明文件的功能--请后续修改
 * @author: ChiRong
 * @date: 2017/8/2
 * @version: v1.0
 * @modify: 说明对该文件的修改内容、修改原因以及修改日期--请后续修改
 */

/**
 * 在JavaScript中实现命名空间的一个流行模式，选择一个全局变量作为引用的主对象。
 * 示例代码中返回一个包含函数和属性的对象：
 */
var myApplication = (function(){
	function (){
		// ...
	},
	return{
		// ...
	}
})();

/**
 * 前缀命名空间
 * 原理上我们选择一个我们想用的（本例中我们用的myApplication_）唯一的前缀命名空间，
 * 然后这个前端后面定义任意的方法，变量或者其他变量
 *
 * 此方式的问题：一旦应用开始增长，它会产生大量的全局对象。
 * 全局中对于我们没有被其他开发人员内使用的前缀也存在严重的依赖，使用时要小心
 */
var myApplication_propertyA = {};
var myApplication_propertyB = {};
function myApplication_myMethod(){
	// ...
}


/**
 * 对象文字标识
 * 一个对象包含了一个集合，这个集合存储的是键值对，它们使用分号将每个键值对的键和值分隔开
 * 这些键也可以表示新的命名空间
 */
var myApplication = {
	getInfon : function(){
		// ...
	},
	models : {},
	views :{
		pages : {}
	},
	collections : {}
};
// 可以直接给命名空间添加属性:
	myApplication.foo = function(){
		return "bar";
	}
	myApplication.utils = {
		toString : function(){
			// ...
		},
		export : function(){
			// ...
		}
	}
/**
 * 对象文字具有在不污染全局命名空间的情况下帮助组织代码和参数的优点
 * 如果我们希望创建已读的可以支持深度嵌套的结构，这将非常有用。
 * 与简单的全局变量不同，对象文字也经常考虑测试相同名字的变量存在，这样就极大降低了冲突的可能性
 */
// 下面的例子用于检查变量是否存在，如果不存在就定义该变量
// Option 1:
var myApplication = myApplication || {};
// Option 2:
if( !MyApplication){MyApplication = {}};
// Option 3:
window.myApplication || ( window.myApplication = {} );
// Option 4 用户jQuery的插件
var myAppliction = $.fn.myAppliction = function(){};
// Option 5
var myAppliction = myApplication === undefined ? {} : myApplication;