// ==========================================================================
// Project:   Gighub.Venue Fixtures
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Gighub */

sc_require('models/venue');

Gighub.Venue.FIXTURES = [

    {
        guid: 1,
        name: 'HotelUtah',
        location: 'San Francisco, CA',
        picture: 'http://www.thehotelutahsaloon.com/images/utahFront.jpg',
        website: 'http://www.thehotelutahsaloon.com',
        bands: [1, 2, 3]
    },

    {
        guid: 2,
        name: 'BootlegTheater',
        location: 'Los Angeles, CA',
        picture: 'http://www.bootlegtheater.com/images/bootleg-theater-logo-nov-2009.gif',
        website: 'http://www.bootlegtheater.org',
        bands: [1, 3]
    },
];
