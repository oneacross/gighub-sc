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
    name: '',

    loggedInDidChange: function() {
        SC.Logger.info('loggedIn changed to ' + this.loggedIn);
    }.observes('loggedIn')

});
