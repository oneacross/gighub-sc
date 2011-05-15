// ==========================================================================
// Project:   Gighub.User
// Copyright: ©2011 Matt Mendell
// ==========================================================================
/*globals Gighub */

/** @class

  @extends SC.Record
  @version 0.1
*/
Gighub.User = SC.Record.extend(
/** @scope Gighub.User.prototype */ {

    name: SC.Record.attr(String),
    password: SC.Record.attr(String),
    primary_ident_type: SC.Record.attr(String),
    primary_ident_guid: SC.Record.attr(Number)

});
