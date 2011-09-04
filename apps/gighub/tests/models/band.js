// ==========================================================================
// Project:   Gighub.Band Unit Test
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Gighub module test ok equals same stop start */
module("Gighub.Band");

test("expect number of bands in response to enter store", function() {
    //response = [{guid: 1, name: 'Jeepers', location: 'Seattle, WA'},
    //            {guid: 2, name: 'Kapcha', location: 'Tokyo, Japan'}];
    //myStore.loadRecords(Gighub.Band, response);
    var myStore = SC.Store.create().from('Gighub.DataSource');
    var bands = myStore.find(Gighub.Band);
    //ds = Gighub.DataSource.create();
    //ds.fetch(myStore, Gighub.Band);
    //var results = myStore.find(Gighub.Band);
    equals(bands.length(), 2);
});

