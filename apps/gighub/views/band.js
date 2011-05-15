// ==========================================================================
// Project:   Gighub.BandView
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Gighub */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
Gighub.BandView = SC.View.extend(
/** @scope Gighub.BandView.prototype */ {

    layout: { top: 36 },

    contentDisplayProperties: 'name'.w(),

    classNames: ['band'],

    render: function(context, firstTime) {
        var content = Gighub.bandController.get('content');
        var name = content.get('name');
        var location = content.get('location');
        var website = content.get('website');

        context = context.begin('div').addClass('band-name').push(name).end();
        context = context.begin('div').addClass('band-location').push(location).end();
        context = context.begin('a').addClass('band-website').attr('href', website).push('website').end();

        sc_super();
    }

});
