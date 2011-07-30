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

    // Field to determine when a user is logged in
    loggedIn: NO,

    loggedInDidChange: function() {
        SC.Logger.info('loggedIn changed to ' + this.loggedIn);
    }.observes('loggedIn'),

    lookup: function(params) {
        var query = SC.Query.create({
            conditions: "name = {name} AND password = {password}",
            recordType: Gighub.User,
            parameters: params
        });

        var results = Gighub.store.find(query);
        var content = results.objectAt(0);
        if (content == null) {
            return NO;
        }

        this.set('content', content);
        return YES;
    },

    does_user_exist: function(params) {
        var query = SC.Query.create({
            conditions: "name = {name}",
            recordType: Gighub.User,
            parameters: params
        });

        var results = Gighub.store.find(query);
        var content = results.objectAt(0);
        if (content == null) {
            return NO;
        }
        return YES;
    },

    gotoPrimary: function() {
        var content = this.get('content');
        var primary_ident_type = content.get('primary_ident_type');
        var primary_ident_guid = content.get('primary_ident_guid');
        var path = '';

        if (primary_ident_type === 'band') {
            Gighub.bandController.show_guid(primary_ident_guid);
            path = 'band/' + Gighub.bandController.get('name');
        }
        else if (primary_ident_type === 'venue') {
            Gighub.venueController.show_guid(primary_ident_guid);
            path = 'venue/' + Gighub.venueController.get('name');
        }

        SC.routes.set('location', path);
        return YES;
    },

    show: function(n) {

        var query = SC.Query.local(
            Gighub.User,
            'name = {name}',
            {name: n}
        );

        var results = Gighub.store.find(query);
        this.set('content', results.objectAt(0));
    },


});
