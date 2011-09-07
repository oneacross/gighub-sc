// ==========================================================================
// Project:   Gighub.UserDataSource
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Gighub */

/** @class
  @extends SC.DataSource
*/
Gighub.DataSource = SC.DataSource.extend(
/** @scope Gighub.UserDataSource.prototype */ {

    // Query support
    fetch: function(store, query) {

        SC.Request.getUrl('/bands')
            .header({'Accept': 'application/json'}).json()
            .notify(this, 'didFetchBands', store, query)
            .send();
        return YES;
    },

    didFetchBands: function(response, store, query) {
        if (SC.ok(response)) {
            store.loadRecords(Gighub.Band, response.body());
            store.dataSourceDidFetchQuery(query);
        }
        else {
            store.dataSourceDidErrorQuery(query, response);
        }
    },

    // Record support
    retrieveRecord: function(store, storeKey) {
        return NO;
    },

    commitRecords: function() {
        return NO;
    }
    
});
