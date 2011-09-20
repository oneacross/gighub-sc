// ==========================================================================
// Project:   Gighub.UserDataSource
// Copyright: @2011 My Company, Inc.
// ==========================================================================

var FakeServerUsers = {

    'nickt': {
        guid: 1,
        name: 'nickt',
        bands: [1]
    },

    'giovanni': {
        guid: 2,
        name: 'giovanni',
        bands: [2]
    },

    'popular': {
        guid: 3,
        name: 'popular',
        bands: [1, 2, 3]
    },

    'mrlonely': {
        guid: 4,
        name: 'mrlonely',
        bands: []
    },

};

Gighub.FixturesDataSource = SC.FixturesDataSource.extend({

    fetch: function(store, query) {
        if (query.containsRecordTypes([Gighub.User])) {

            if (query.parameters.isLogin) {

                // Get the user from the fake server
                var user = Gighub.store.createRecord(Gighub.User, FakeServerUsers[query.parameters.name]);

                Gighub.loginController.set('isLoggingIn', NO);
                Gighub.userController.set('loggedIn', YES);
                Gighub.userController.set('content', user);
                Gighub.bandsController.set('content', user.get('bands'));

                // Go to the user's profile
                SC.routes.set('location', 'user/' + user.get('name'));

                return YES;
            }
            else if (query.parameters.isLogout) {

                Gighub.userController.set('loggedIn', NO);

                // Go back to the main page
                SC.routes.set('location', '');
                return YES;
            }
        }
        else {
            sc_super();
        }
        return NO;
    }
});
