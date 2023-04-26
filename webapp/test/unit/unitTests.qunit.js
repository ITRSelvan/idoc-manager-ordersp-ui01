/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/idoc_manager_ordersp_ui01/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
