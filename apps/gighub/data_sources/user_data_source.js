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

        if (query.containsRecordTypes([Gighub.Band])) {
            SC.Request.getUrl('/bands')
                .header({'Accept': 'application/json'}).json()
                .notify(this, 'didFetchBands', store, query)
                .send();
            return YES;
        }
        else if (query.containsRecordTypes([Gighub.User])) {
            // The login request to the server
            SC.Request.postUrl('/sessions')
                .header({'Content-Type': 'application/json'}).json()
                .notify(this, 'endLogin')
                .send(query.get('parameters'));
            return YES;
        }
        return NO;
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

    createRecord: function(store, storeKey, params) {

        var record = store.materializeRecord(storeKey);

        if (record.instanceOf(Gighub.Band)) {
            var sendObj = {
                band: {
                    name: record.get('name'),
                    location: record.get('location'),
                    picture: record.get('picture')
                }
            };

            // Ask the server to create a new band
            SC.Request.postUrl('/bands')
                .header({'Content-Type': 'application/json'}).json()
                .notify(this, 'end_band_signup')
                .send(sendObj);
        }
    },

    end_band_signup: function(response) {
        try {
            // Check status
            if (!SC.ok(response)) {
                throw SC.Error.desc('bad status ' + response.status + ' from server');
            }

            // get the message from the server
            var message = response.body().message;

            if (message == 'Band created') {
                SC.Logger.info('Band created!');
            }
            else if (message == 'Band name taken') {
                throw SC.Error.desc('Band name taken!');
            }
            else if (message == 'Band not created') {
                throw SC.Error.desc('Band not created, please try again');
            }
        }
        catch (err) {
            Gighub.bandController.set('error_message', err.message);
        }
    },

    destroyRecord: function(store, storeKey, params) {

        var record = store.materializeRecord(storeKey);

        if (record.instanceOf(Gighub.User)) {
            SC.Request.deleteUrl('/users/' + record.id())
                .notify(this, 'end_destroy_user');
        }
    },

    end_destroy_user: function(response) {
        try {
            // Check status
            if (!SC.ok(response)) {
                throw SC.Error.desc('bad status ' + response.status + ' from server');
            }

            // get the message from the server
            var message = response.body().message;

            if (message == 'User destroyed') {
                SC.Logger.info('User is destroyed!');
            }
        }
        catch (err) {
            Gighub.userController.set('signup_error_message', err.message);
        }
    }
    
});
