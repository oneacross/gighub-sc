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
        var pane = Gighub.getPath('mainPage.mainPane');
        pane.remove();
        pane = Gighub.getPath('bandsPage.mainPane').append();
        pane.append();
    }

});

Gighub.bandController = SC.ObjectController.create({

    show: function() {
        var pane = Gighub.getPath('bandsPage.mainPane');
        pane.remove();
        pane = Gighub.getPath('bandPage.mainPane');
        pane.append();
    }
});
