// ==========================================================================
// Project:   Gighub.Band
// Copyright: ©2011 Matt Mendell
// ==========================================================================

Gighub.Band = SC.Record.extend({

    name: SC.Record.attr(String),
    location: SC.Record.attr(String),
    website: SC.Record.attr(String),
    reviews: SC.Record.toMany('Gighub.VenueReview', {
        inverse: 'band'
    }),
    users: SC.Record.toMany(
        'Gighub.User',
        { isMaster: NO }
    )
});
