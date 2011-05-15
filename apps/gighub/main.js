// ==========================================================================
// Project:   Gighub
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Gighub */

Gighub.main = function main() {

    // using fixture content for now
    var bands = Gighub.store.find(Gighub.Band);
    Gighub.bandsController.set('content', bands);

    // routes
    SC.routes.add('bands', Gighub.routes, 'bands');
    SC.routes.add('band/:bandName', Gighub.routes, 'band');
    SC.routes.add('venue/:venueName', Gighub.routes, 'venue');
    SC.routes.add('', Gighub.routes, 'root');
    //SC.routes.wantsHistory = YES;
};

function main() { Gighub.main(); }
