// ==========================================================================
// Project:   Gighub.User
// Copyright: ©2011 Matt Mendell
// ==========================================================================

Gighub.User = SC.Record.extend({

    name: SC.Record.attr(String),
    bands: SC.Record.toMany(
        'Gighub.Band',
        { isMaster: YES, inverse: 'users' }
    )

});
