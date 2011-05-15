// ==========================================================================
// Project:   Gighub.VenueView
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Gighub */

/** @class
  @extends SC.View
*/
Gighub.VenueView = SC.View.extend(
/** @scope Gighub.VenueView.prototype */ {

    layout: { top: 36 },

    contentDisplayProperties: 'name'.w(),

    classNames: ['venue'],

    render: function(context, firstTime) {
        var content = Gighub.venueController.get('content');
        var name = content.get('name');
        var location = content.get('location');
        var website = content.get('website');

        context = context.begin('div').addClass('v-name').push(name).end();
        context = context.begin('div').addClass('v-location').push(location).end();
        context = context.begin('a').addClass('v-website').attr('href', website).push('website').end();

        sc_super();
    }

});
