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
        SC.Logger.info('inside bandController.show');

        var query = SC.Query.local(
            Gighub.Band,
            'name = {name}',
            {name: n}
        );

        var results = Gighub.store.find(query);
        SC.Logger.info('band show name=' + results.objectAt(0).get('name'));
        this.set('content', results.objectAt(0));
    },

    show_guid: function(guid) {
        var result = Gighub.store.find(Gighub.Band, guid);
        SC.Logger.info('band show_guid name=' + result.get('name'));
        this.set('content', result);
    }

});
