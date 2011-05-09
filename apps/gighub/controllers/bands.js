// ==========================================================================
// Project:   Gighub.bandsController
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Gighub */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/
Gighub.bandsController = SC.ArrayController.create(
/** @scope Gighub.bandsController.prototype */ {

    show_all: function() {
        SC.routes.set('location', 'bands');
    }

});

Gighub.bandController = SC.ObjectController.create({

    show: function() {
        SC.routes.set('location', 'band/wiresinthewalls');
    }
});
