/**
 * Copyright © 2017 KingTopWare Corporation. All rights reserved.
 *
 * @title: jQuery UI Widget 工厂模式
 * @prject:
 * @description: 说明文件的功能--请后续修改
 * @author: ChiRong
 * @date: 2017/8/2
 * @version: v1.0
 * @modify: 说明对该文件的修改内容、修改原因以及修改日期--请后续修改
 */

/*!
 * jQuery UI Widget-factory plugin boilerplate (for 1.8/9+)
 * Author: @addyosmani
 * Further changes: @peolanha
 * Licensed under the MIT license
 */

;(function ( $, window, document, undefined ) {

	// define our widget under a namespace of your choice
	// with additional parameters e.g.
	// $.widget( "namespace.widgetname", (optional) - an
	// existing widget prototype to inherit from, an object
	// literal to become the widget's prototype );

	$.widget( "namespace.widgetname" , {

		//Options to be used as defaults
		options: {
			someValue: null
		},

		//Setup widget (e.g. element creation, apply theming
		// , bind events etc.)
		_create: function () {

			// _create will automatically run the first time
			// this widget is called. Put the initial widget
			// setup code here, then we can access the element
			// on which the widget was called via this.element.
			// The options defined above can be accessed
			// via this.options this.element.addStuff();
		},

		// Destroy an instantiated plugin and clean up
		// modifications the widget has made to the DOM
		destroy: function () {

			// this.element.removeStuff();
			// For UI 1.8, destroy must be invoked from the
			// base widget
			$.Widget.prototype.destroy.call( this );
			// For UI 1.9, define _destroy instead and don't
			// worry about
			// calling the base widget
		},

		methodB: function ( event ) {
			//_trigger dispatches callbacks the plugin user
			// can subscribe to
			// signature: _trigger( "callbackName" , [eventObject],
			// [uiObject] )
			// e.g. this._trigger( "hover", e /*where e.type ==
			// "mouseenter"*/, { hovered: $(e.target)});
			this._trigger( "methodA", event, {
				key: value
			});
		},

		methodA: function ( event ) {
			this._trigger( "dataChanged", event, {
				key: value
			});
		},

		// Respond to any changes the user makes to the
		// option method
		_setOption: function ( key, value ) {
			switch ( key ) {
				case "someValue":
					// this.options.someValue = doSomethingWith( value );
					break;
				default:
					// this.options[ key ] = value;
					break;
			}

			// For UI 1.8, _setOption must be manually invoked
			// from the base widget
			$.Widget.prototype._setOption.apply( this, arguments );
			// For UI 1.9 the _super method can be used instead
			// this._super( "_setOption", key, value );
		}
	});

})( jQuery, window, document );

// 调用方式
var collection = $("#elem").widgetName({
	foo: false
});
collection.widgetName("methodB");