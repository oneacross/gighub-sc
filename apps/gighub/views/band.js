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

    contentView: SC.View.extend(SC.ContentDisplay, {
        layout: { top: 0, height: 100 },

        contentDisplayProperties: 'name location website'.w(),
        contentBinding: 'Gighub.bandController.content',

        classNames: ['band'],

        render: function(context, firstTime) {
            var name = '';
            var location = '';
            var website = '';
            var content = this.get('content');

            if (content != null) {
                name = content.get('name');
                location = content.get('location');
                website = content.get('website');
            }

            context = context.begin('div').addClass('band-name')
                             .push(name).end();
            context = context.begin('div').addClass('band-location')
                             .push(location).end();
            context = context.begin('a').addClass('band-website')
                             .attr('href', website)
                             .push('website').end();

            sc_super();
        }
    })

});
