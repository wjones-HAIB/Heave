	/**
	 * @ngdoc overview
	 * @name appApp.admin.user.list.items
	 * @requires ui.router
	 * @requires components/listImage
	 *
	 * @description
	 * The `appApp.admin.user.list.items` module which provides:
	 *
	 * - {@link appApp.admin.user.list.items.controller:UserItemsController UserItemsController}
	 */

(function () {
	'use strict';

	angular
		.module('appApp.admin.user.list.items', [
			'ui.router',
			'appApp.listImage'
		]);

})();
