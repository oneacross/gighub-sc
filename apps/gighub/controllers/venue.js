// ==========================================================================
// Project:   Gighub.venueController
// Copyright: ©2011 Matt Mendell
// ==========================================================================
/*globals Gighub */

/** @class
  @extends SC.Object
*/
Gighub.venuesController = SC.ArrayController.create({
    show_all: function() {
        SC.routes.set('location', 'venues');
    }
});

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
    }
});
