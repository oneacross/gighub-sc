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

    error_message: '',

    beginSignup: function() {
        Gighub.store.commitRecords();
        Gighub.getPath('BandSignupPage.mainPane').remove();
        return YES;
    },

    signup_pane: function() {
        this.set('content', Gighub.store.createRecord(Gighub.Band, {}));
        Gighub.getPath('BandSignupPage.mainPane').append();
        return YES;
    }

});
