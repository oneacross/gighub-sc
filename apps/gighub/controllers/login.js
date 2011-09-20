// ==========================================================================
// Project:   Gighub.loginController
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Gighub */

Gighub.loginController = SC.ObjectController.create({

    username: '',
    password: '',
    errorMessage: '',
    isLoggingIn: NO,
    onLoginGoToPagePaneName: 'mainPage.mainPane',

    beginLogin: function() {
        this.set('isLoggingIn', YES);

        Gighub.store.find(SC.Query.local(Gighub.User,
            'name = {name}',
            { name: this.get('username'),
              password: this.get('password'),
              isLogin: YES }
        ));
        this.clearLoginForm();

        return YES;
    },

    endLogin: function(response) {
        try {
            this.set('isLoggingIn', NO);

            // Check status
            SC.Logger.info('HTTP status code: ' + response.status);
            
            if (!SC.ok(response)) {
                throw SC.Error.desc('bad status from server');
            }

            // get the message from the server
            var message = response.body().message;

            if (message == 'Logged in') {
                SC.Logger.info('Logged in!');
            }
            else if (message == 'Invalid name or password') {
                throw SC.Error.desc('Invalid username or password');
            }
            
            var user = SC.Object.create(response.body().user);

            this.clearLoginForm();

            // Go to the user's profile
            SC.routes.set('location', 'user/' + user.get('name'));
        }
        catch (err) {
            this.set('errorMessage', err.message);
        }
    },

    clearLoginForm: function() {
        this.set('username', '');
        this.set('password', '');
        this.set('errorMessage', '');
    },

    logout: function() {

        // Send the logout request to the server
       // SC.Request.getUrl('/log_out')
       //     .header({'Content-Type': 'application/json'}).json()
       //     .notify(this, 'endLogout')
       //     .send();

        Gighub.store.find(SC.Query.local(Gighub.User, null,
            { isLogout: YES }
        ));
    },

    endLogout: function(response) {
        try {
            // Check status
            SC.Logger.info('HTTP status code: ' + response.status);
            
            if (!SC.ok(response)) {
                throw SC.Error.desc('bad status from server');
            }

            // get the message from the server
            var message = response.body().message;

            if (message == 'Logged out') {
                SC.Logger.info('Logged out!');
            }
            else {
                throw SC.Error.desc('Server unable to logout, please retry');
            }
            
            Gighub.userController.set('loggedIn', NO);

            // Go back to the main page
            SC.routes.set('location', '');
        }
        catch (err) {
            this.set('errorMessage', err.message);
        }
    }

});
