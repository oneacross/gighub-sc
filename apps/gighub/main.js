// ==========================================================================
// Project:   Gighub
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Gighub */

Gighub.main = function main() {

    var bands = Gighub.store.find(Gighub.Band);
    Gighub.bandsController.set('content', bands);

    var venues = Gighub.store.find(Gighub.Venue);
    Gighub.venuesController.set('content', venues);

    // routes
    SC.routes.add('bands', Gighub.routes, 'bands');
    SC.routes.add('band/:bandName', Gighub.routes, 'band');
    SC.routes.add('venues', Gighub.routes, 'venues');
    SC.routes.add('venue/:venueName', Gighub.routes, 'venue');
    SC.routes.add('user/:userName', Gighub.userController, 'index');
    SC.routes.add('', Gighub.routes, 'root');
    //SC.routes.wantsHistory = YES;
};

function main() { Gighub.main(); }
