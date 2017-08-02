/**
 * Copyright © 2017 KingTopWare Corporation. All rights reserved.
 *
 * @title: 基本封装
 * @prject:
 * @description: 说明文件的功能--请后续修改
 * @author: ChiRong
 * @date: 2017/8/2
 * @version: v1.0
 * @modify: 说明对该文件的修改内容、修改原因以及修改日期--请后续修改
 */

/**
 * 将插件逻辑封装到一个匿名函数中
 * 为了确保我们使用的$标记作为简写形式而不会造成任何jQuery和其他JavaScript库之间的冲突
 * 我们简答的将其传入这个闭包中，它会将映射到美元符号上
 * 确保了它能够不被任何范围之外的执行影响到
 */
(function($){
	$.fn.myPluginName = function(){
		// 插件逻辑
	};
})(jQuery);