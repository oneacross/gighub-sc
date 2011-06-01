// ==========================================================================
// Project:   Gighub.VenueReview
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Gighub */

/** @class
  @extends SC.Record
  @version 0.1
*/
Gighub.VenueReview = SC.Record.extend(
/** @scope Gighub.VenueReview.prototype */ {

    venue: SC.Record.toOne('Gighub.Venue', {
        inverse: 'reviews'
    }),

    band: SC.Record.toOne('Gighub.Band', {
        inverse: 'reviews'
    }),

    rating: SC.Record.attr(Number),
    review: SC.Record.attr(String)

});
