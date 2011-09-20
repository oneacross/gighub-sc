// ==========================================================================
// Project:   Gighub.BandViewMini
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Gighub */

/** @class
  @extends SC.View
*/
Gighub.BandViewMini = SC.View.extend(
/** @scope Gighub.BandViewMini.prototype */ {

    isHovering: NO,
    templateName: "bandmini",

    name: "BillyGoat",
    location: "San Diegoat, CA",


    displayProperties: 'isHovering'.w(),

    mouseEntered: function() {
        this.set('isHovering', YES);
    },

    mouseExited: function() {
        this.set('isHovering', NO);
    },

    mouseDown: function() {
        var name = this.get('content').get('name');
        SC.routes.set('location', 'band/' + name);
    }

});
