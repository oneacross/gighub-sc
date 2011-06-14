// ==========================================================================
// Project:   Gighub.loginController
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Gighub */

/** @class

    Login controller.

    @extends SC.Object
*/
Gighub.loginController = SC.ObjectController.create(
/** @scope Gighub.loginController.prototype */ {

    username: '',
    password: '',
    errorMessage: '',
    isLoggingIn: NO,
    onLoginGoToPagePaneName: 'mainPage.mainPane',

    signup_username: '',
    signup_email: '',
    signup_password: '',
    signup_error_message: '',

    beginLogin: function() {
        try {
            var username = this.get('username');
            if (username == null || username == '') {
                throw SC.Error.desc('Username is required');
            }

            var password = this.get('password');
            if (password == null || password == '') {
                throw SC.Error.desc('Password is required');
            }

            // Start login
            this.set('isLoggingIn', YES);

            // Simulate an HTTP call
            // Retrieve the user
            // Errors:
            // The user name does not exist
            // The password is not correct
            var success = Gighub.userController.lookup({
                name: username,
                password: password
            });

            var url = '/gighub/en/current/source/resources/main_page.js';
            if (!success) {
                url = '/gighub/en/current/source/resources/bad_url.js';
            }

            SC.Request.getUrl(url)
                .notify(this, 'endLogin')
                .send();

            return YES;
        }
        catch (err) {
            this.set('errorMessage', err.message);

            // Finish login process
            this.set('isLoggingIn', NO);

            return NO;
        }
    },

    endLogin: function(response) {
        try {
            this.set('isLoggingIn', NO);

            // Check status
            SC.Logger.info('HTTP status code: ' + response.status);
            if (!SC.ok(response)) {
                throw SC.Error.desc('Invalid username or password');
            }

            // Clear data
            this.set('username', '');
            this.set('password', '');
            this.set('errorMessage', '');

            Gighub.userController.set('loggedIn', YES);

            // Go to the user's profile
            Gighub.userController.gotoPrimary();
        }
        catch (err) {
            this.set('errorMessage', err.message);
        }
    },

    logout: function() {
        Gighub.userController.set('loggedIn', NO);
        // Go back to the main page
        SC.routes.set('location', '');
    },


    beginSignup: function() {
        try {
            var username = this.get('signup_username');
            if (username == null || username == '') {
                throw SC.Error.desc('Username is required');
            }

            var password = this.get('signup_password');
            if (password == null || password == '') {
                throw SC.Error.desc('Password is required');
            }

            // Does the user already exist?
            var user = Gighub.userController.lookup({
                name: username,
                password: password
            });

            if (user) {
                throw SC.Error.desc('Username already taken');
            }

            // Create new user
            user = Gighub.store.createRecord(Gighub.User, {
                name: this.get('signup_username'),
                password: this.get('signup_password')
            });

            // Save to backend
            user.commitRecord();
            Gighub.userController.set('content', user);

            return YES;
        }
        catch (err) {
            this.set('signup_error_message', err.message);

            // Finish login process
            this.set('isLoggingIn', NO);

            return NO;
        }
    }

});
