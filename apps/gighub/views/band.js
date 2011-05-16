// ==========================================================================
// Project:   Gighub.BandView
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Gighub */

/** @class
  @extends SC.View
*/
Gighub.BandView = SC.View.extend(
/** @scope Gighub.BandView.prototype */ {

    layout: { top: 36 },
    childViews: 'contentView'.w(),

    contentView: SC.View.extend({
        layout: { top: 0, height: 100 },
        contentBinding: 'Gighub.bandController.content',

        displayDidChange: function() {
            this.set('layerNeedsUpdate', YES);
        }.observes('content'),

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
    })

});
