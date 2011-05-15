// ==========================================================================
// Project:   Gighub.venueController
// Copyright: ©2011 Matt Mendell
// ==========================================================================
/*globals Gighub */

/** @class
  @extends SC.Object
*/
Gighub.venueController = SC.ObjectController.create(
/** @scope Gighub.venueController.prototype */ {

    show: function(n) {

        var query = SC.Query.local(
            Gighub.Venue,
            'name = {name}',
            {name: n}
        );

        var results = Gighub.store.find(query);
        this.set('content', results.objectAt(0));
    },

    show_guid: function(guid) {
        var result = Gighub.store.find(Gighub.Venue, guid);
        this.set('content', result);
    }
}) ;
