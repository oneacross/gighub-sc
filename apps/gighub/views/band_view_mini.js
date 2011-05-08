// ==========================================================================
// Project:   Gighub.BandViewMini
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Gighub */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
Gighub.BandViewMini = SC.View.extend(
/** @scope Gighub.BandViewMini.prototype */ {

    contentDisplayProperties: "name location picture".w(),

    classNames: ['band'],

    isHovering: NO,

    displayProperties: 'isHovering'.w(),

    mouseEntered: function() {
        this.set('isHovering', YES);
    },

    mouseExited: function() {
        this.set('isHovering', NO);
    },

    render: function(context, firstTime) {
        var content = this.get('content');
        var name = content.get('name');
        var location = content.get('location');
        var picture = content.get('picture');

        context.setClass('hover', this.get('isHovering'));

        if (picture) {
            context = context.begin('div').addClass('b-pic').push('<img src="' + picture + '" alt="" class="stretch" />').end();
        }

        context = context.begin('div').addClass('b-name').push(name).end();
        context = context.begin('div').addClass('b-location').push(location).end();

        sc_super();
    }

});
