'use strict';

// ------------- Model ------------- //

var model = {
    brandFacets: [
    	{name: "Brand A", qty: 100},
    	{name: "Brand B", qty: 200},
    	{name: "Brand C", qty: 300}
    	],
    
    priceFacet: [
    	{name: "0.00-49.99", qty: 10},
    	{name: "50.00-99.99", qty: 20},
    	{name: "100.00-199.99", qty: 30}
    	]
    };

// ------------- ViewModel ------------- //

var ViewModel = {
	getDataFromModel: function (){
		var self = this;
	}
};



ko.applyBindings(viewModel);