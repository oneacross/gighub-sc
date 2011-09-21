// ==========================================================================
// Project:   Gighub.userController
// Copyright: ©2011 Matt Mendell
// ==========================================================================
/*globals Gighub */

/** @class
  @extends SC.Object
*/
Gighub.userController = SC.ObjectController.create(
/** @scope Gighub.userController.prototype */ {

    loggedIn: NO,

    loggedInDidChange: function() {
        SC.Logger.info('loggedIn changed to ' + this.loggedIn);
    }.observes('loggedIn'),

    bands_did_changes: function() {
        if (this.get('bands') != null) {
            this.set('bands_string', this.get('bands').toString());
        }
    }.observes('bands'),

    signup_username: '',
    signup_email: '',
    signup_password: '',
    signup_error_message: '',
    isSigningUp: NO,

    beginSignup: function() {
        var sendObj = {
            user: {
                name: this.get('signup_username'),
                password: this.get('signup_password')
            }
        }

        // Ask the server to create a new user
        SC.Request.postUrl('/users')
            .header({'Content-Type': 'application/json'}).json()
            .notify(this, 'endSignup')
            .send(sendObj);

        return YES;
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

            this.clearSignupForm();
            
            this.set('loggedIn', YES);
            this.set('content', user);

            // Go to the user's profile
            SC.routes.set('location', 'user/' + user.get('name'));
        }
        catch (err) {
            this.set('signup_error_message', err.message);
        }
    },

    clearSignupForm: function() {
        this.set('signup_username', '');
        this.set('signup_email', '');
        this.set('signup_password', '');
        this.set('signup_error_message', '');
    },

    index: function(params) {
        var userName = params.userName;

        var results = Gighub.store.find(SC.Query.local(
            Gighub.User, 'name = {name}', {name: userName}
        ));
        var user;
        if (results && results.length() == 1) {
            user = results.objectAt(0);
        }
        else {
            //SC.Logger.info("User does not exist");
            Gighub.loginController.set('errorMessage', 'User does not exist');
            //TODO: Goto error page
            Gighub.routes.root();
            return NO;
        }

        Gighub.userController.set('content', user);
        Gighub.bandsController.set('content', user.get('bands'));

        Gighub.routes.gotoRoute({
            pageName: 'userPage',
            paneName: 'mainPane'
        });
        return YES;
    }

});
