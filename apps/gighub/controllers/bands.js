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

    show: function(n) {

        var query = SC.Query.local(
            Gighub.Band,
            'name = {name}',
            {name: n}
        );

        var results = Gighub.store.find(query);
        this.set('content', results.objectAt(0));
    }

});
