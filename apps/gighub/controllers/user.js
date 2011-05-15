// ==========================================================================
// Project:   Gighub.userController
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Gighub */

/** @class
  @extends SC.Object
*/
Gighub.userController = SC.ObjectController.create(
/** @scope Gighub.userController.prototype */ {

    lookup: function(params) {
        var query = SC.Query.local(
            Gighub.User,
            'name = {name} AND password = {password}',
            params
        );

        var results = Gighub.store.find(query);
        var content = results.objectAt(0);
        if (content == null) {
            return NO;
        }

        this.set('content', content);
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
    }

}) ;
