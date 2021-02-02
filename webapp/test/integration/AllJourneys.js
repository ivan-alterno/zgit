jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 KredaSet in the list
// * All 3 KredaSet have at least one Orders

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
		"nnn/test/integration/MasterJourney",
		"nnn/test/integration/NavigationJourney",
		"nnn/test/integration/NotFoundJourney",
		"nnn/test/integration/BusyJourney",
		"nnn/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});