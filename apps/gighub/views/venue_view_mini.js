// ==========================================================================
// Project:   Gighub.VenueViewMini
// Copyright: ©2011 Matt Mendell
// ==========================================================================
/*globals Gighub */

/** @class
  @extends SC.View
*/
Gighub.VenueViewMini = SC.View.extend(
/** @scope Gighub.VenueViewMini.prototype */ {

    contentDisplayProperties: "name location picture".w(),

    classNames: ['venue'],

    isHovering: NO,

    displayProperties: 'isHovering'.w(),

    mouseEntered: function() {
        this.set('isHovering', YES);
    },

    mouseExited: function() {
        this.set('isHovering', NO);
    },

    mouseDown: function() {
        var name = this.get('content').get('name');
        SC.routes.set('location', 'venue/' + name);
    },

    render: function(context, firstTime) {
        var content = this.get('content');
        var name = content.get('name');
        var location = content.get('location');
        var picture = content.get('picture');

        context.setClass('hover', this.get('isHovering'));

        if (picture) {
            context = context.begin('div')
                .addClass('b-pic')
                .push('<img src="' + picture + '" alt="" class="stretch" />')
                .end();
        }

        context = context.begin('div').addClass('b-name')
            .push(name).end();
        context = context.begin('div').addClass('b-location')
            .push(location).end();

        sc_super();
    }

});
