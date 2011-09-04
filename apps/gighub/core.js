// ==========================================================================
// Project:   Gighub
// Copyright: ©2011 Matt Mendell
// ==========================================================================
/*globals Gighub */

/** @namespace
  @extends SC.Object
*/
Gighub = SC.Application.create(
  /** @scope Gighub.prototype */ {

    NAMESPACE: 'Gighub',
    VERSION: '0.1.0',

    store: SC.Store.create().from('Gighub.DataSource')
});
