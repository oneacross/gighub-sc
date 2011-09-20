// ==========================================================================
// Project:   Gighub
// Copyright: ©2011 Matt Mendell
// ==========================================================================

Gighub = SC.Application.create({

    NAMESPACE: 'Gighub',
    VERSION: '0.1.0',

    store: SC.Store.create().from('Gighub.FixturesDataSource')
});
