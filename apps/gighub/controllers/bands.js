// ==========================================================================
// Project:   Gighub.bandsController
// Copyright: ©2011 Matt Mendell
// ==========================================================================
/*globals Gighub */

/** @class
  @extends SC.ArrayController
*/
Gighub.bandsController = SC.ArrayController.create(
/** @scope Gighub.bandsController.prototype */ {

    show_all: function() {
        SC.routes.set('location', 'bands');
    }

});

Gighub.bandController = SC.ObjectController.create({

    show: function(n) {
        var query = SC.Query.local(
            Gighub.Band,
            'name = {name}',
            {name: n}
        );

        var results = Gighub.store.find(query);
        this.set('content', results.objectAt(0));
    },

    show_guid: function(guid) {
        var result = Gighub.store.find(Gighub.Band, guid);
        this.set('content', result);
    },

    name: '',
    location: '',
    picture: '',
    error_message: '',
    isSigningUp: NO,

    beginSignup: function() {
        var sendObj = {
            band: {
                name: this.get('name'),
                location: this.get('location'),
                picture: this.get('picture')
            }
        }

        // Ask the server to create a new band
        SC.Request.postUrl('/bands')
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

            if (message == 'Band created') {
                SC.Logger.info('Band created!');
            }
            else if (message == 'Band name taken') {
                throw SC.Error.desc('Band name taken!');
            }
            else if (message == 'Band not created') {
                throw SC.Error.desc('Band not created, please try again');
            }

            var band = SC.Object.create(response.body().band);

            this.clearSignupForm();
            
            this.set('content', band);
            Gighub.getPath('BandSignupPage.mainPane').remove();
        }
        catch (err) {
            this.set('error_message', err.message);
        }
    },

    clearSignupForm: function() {
        this.set('name', '');
        this.set('location', '');
        this.set('error_message', '');
    },

    signup_pane: function() {
        Gighub.getPath('BandSignupPage.mainPane').append();
    }

});
