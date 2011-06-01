// ==========================================================================
// Project:   Gighub.Band
// Copyright: ©2011 Matt Mendell
// ==========================================================================
/*globals Gighub */

/** @class
  @extends SC.Record
  @version 0.1
*/
Gighub.Band = SC.Record.extend(
/** @scope Gighub.Band.prototype */ {

    name: SC.Record.attr(String),
    location: SC.Record.attr(String),
    picture: SC.Record.attr(String),
    reviews: SC.Record.toMany('Gighub.VenueReview', {
        inverse: 'band'
    })

});
