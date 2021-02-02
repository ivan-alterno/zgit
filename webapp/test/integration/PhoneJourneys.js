jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"nnn/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"nnn/test/integration/pages/App",
	"nnn/test/integration/pages/Browser",
	"nnn/test/integration/pages/Master",
	"nnn/test/integration/pages/Detail",
	"nnn/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "nnn.view."
	});

	sap.ui.require([
		"nnn/test/integration/NavigationJourneyPhone",
		"nnn/test/integration/NotFoundJourneyPhone",
		"nnn/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});