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

    name: '',
    location: '',
    website: '',

    nameBinding: 'Gighub.venueController.name',
    locationBinding: 'Gighub.venueController.location',
    websiteBinding: 'Gighub.venueController.website',
    displayProperties: ['name', 'location', 'website'],

    classNames: ['venue'],

    render: function(context, firstTime) {
        context = context.begin('div').addClass('v-name')
                         .push(this.get('name')).end();
        context = context.begin('div').addClass('v-location')
                         .push(this.get('location')).end();
        context = context.begin('a').addClass('v-website').attr('href', this.get('website'))
                         .push('website').end();

        sc_super();
    }

});

Gighub.RatingView = SC.View.extend({
    layout: { top: 150, height: 50, width: 250 },

    rating: 0,

    ratingBinding: 'Gighub.venueController.rating',
    displayProperties: ['rating'],

    render: function(context) {

        // create stars
        for (i = 1; i < 6; i += 1) {
            var star_url = 'http://etc.usf.edu/clipart/37700/37717/05-star_37717_md.gif';
            if (i <= this.get('rating')) {
                star_url = 'http://www.cs.uwaterloo.ca/~wics/images/star.jpg';
            }
            context = context.begin('span').addClass('v-star');
            context = context.begin('img').attr('src', star_url).addClass('stretch').end();
            context = context.end();
        }

        sc_super();
    }
});
