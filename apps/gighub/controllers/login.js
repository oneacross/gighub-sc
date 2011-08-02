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

            // Send the login request to the server
            SC.Request.postUrl('/sessions')
                .header({'Content-Type': 'application/json'}).json()
                .notify(this, 'endLogin')
                .send({name: username, password: password});

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

            // Clear data
            this.set('username', '');
            this.set('password', '');
            this.set('errorMessage', '');

            Gighub.userController.set('loggedIn', YES);
            Gighub.userController.set('content', user);

            // Go to the user's profile
            SC.routes.set('location', 'user/' + user.get('name'));
        }
        catch (err) {
            this.set('errorMessage', err.message);
        }
    },

    logout: function() {

        // Send the logout request to the server
        SC.Request.getUrl('/log_out')
            .header({'Content-Type': 'application/json'}).json()
            .notify(this, 'endLogout')
            .send();

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

            // Ask the server to create a new user
            SC.Request.postUrl('/users')
                .header({'Content-Type': 'application/json'}).json()
                .notify(this, 'endSignup')
                .send({user: {name: username, password: password}});

            return YES;
        }
        catch (err) {
            this.set('signup_error_message', err.message);

            // Finish login process
            this.set('isLoggingIn', NO);

            return NO;
        }
    },

    endSignup: function(response) {
        try {
            // Check status
            SC.Logger.info('HTTP status code: ' + response.status);
            
            if (!SC.ok(response)) {
                throw SC.Error.desc('bad status from server');
            }

            // get the message from the server
            var message = response.body().message;

            if (message == 'User created') {
                SC.Logger.info('User created!');
            }
            else if (message == 'User name taken') {
                throw SC.Error.desc('User name taken!');
            }
            else if (message == 'User not created') {
                throw SC.Error.desc('User not created, please try again');
            }

            var user = SC.Object.create(response.body().user);

            // Clear data
            this.set('signup_username', '');
            this.set('signup_password', '');
            this.set('signup_error_message', '');
            
            Gighub.userController.set('loggedIn', YES);
            Gighub.userController.set('content', user);

            // Go to the user's profile
            SC.routes.set('location', 'user/' + user.get('name'));
        }
        catch (err) {
            this.set('signup_error_message', err.message);
        }
    }

});
