// ==========================================================================
// Project:   Gighub.Venue
// Copyright: ©2011 Matt Mendell
// ==========================================================================
/*globals Gighub */

/** @class

  @extends SC.Record
  @version 0.1
*/
Gighub.Venue = SC.Record.extend(
/** @scope Gighub.Venue.prototype */ {

    name: SC.Record.attr(String),
    location: SC.Record.attr(String),
    picture: SC.Record.attr(String),
    website: SC.Record.attr(String)

});
