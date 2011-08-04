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
    }.observes('bands')

});
