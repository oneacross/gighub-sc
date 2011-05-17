// ==========================================================================
// Project:   Gighub.VenueView
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Gighub */

/** @class
  @extends SC.View
*/
Gighub.VenueView = SC.View.extend(SC.ContentDisplay, 
/** @scope Gighub.VenueView.prototype */ {

    layout: { top: 36 },
    classNames: ['venue'],

    contentDisplayProperties: 'name location website'.w(),
    contentBinding: 'Gighub.venueController.content',

    render: function(context, firstTime) {
        var name = '';
        var location = '';
        var website = '';
        var content = this.get('content');

        if (content != null) {
            name = content.get('name');
            location = content.get('location');
            website = content.get('website');
        }

        context = context.begin('div').addClass('v-name')
                         .push(name).end();
        context = context.begin('div').addClass('v-location')
                         .push(location).end();
        context = context.begin('a').addClass('v-website').attr('href', website)
                         .push('website').end();

        sc_super();
    }

});

Gighub.StarView1 = SC.ImageView.extend({

    layout: { height: 50, width: 50 },

    num: 1,
    rating: 0,

    ratingBinding: 'Gighub.venueController.rating',
    displayProperties: ['rating'],

    star: '',
    value: 'http://www.cs.uwaterloo.ca/~wics/images/star.jpg',

    updateValue: function() {
        if (this.get('rating') >= this.get('num')) {
            this.set('value', 'http://www.cs.uwaterloo.ca/~wics/images/star.jpg');
        }
        else {
            this.set('value', 'http://etc.usf.edu/clipart/37700/37717/05-star_37717_md.gif');
        }
    }.observes('rating'),

    mouseEntered: function() {
        this.set('star', this.get('value'));
        this.set('value', 'http://www1.pgcps.org/uploadedImages/Schools_and_Centers/Middle_Schools/G_James_Gholson/blue%20star.jpg');
    },

    mouseExited: function() {
        this.set('value', this.get('star'));
    }
});

Gighub.StarView2 = SC.ImageView.extend({

    layout: { left: 50, height: 50, width: 50 },

    num: 2,
    rating: 0,

    ratingBinding: 'Gighub.venueController.rating',
    displayProperties: ['rating'],

    star: '',
    value: 'http://www.cs.uwaterloo.ca/~wics/images/star.jpg',

    updateValue: function() {
        if (this.get('rating') >= this.get('num')) {
            this.set('value', 'http://www.cs.uwaterloo.ca/~wics/images/star.jpg');
        }
        else {
            this.set('value', 'http://etc.usf.edu/clipart/37700/37717/05-star_37717_md.gif');
        }
    }.observes('rating'),

    mouseEntered: function() {
        this.set('star', this.get('value'));
        this.set('value', 'http://www1.pgcps.org/uploadedImages/Schools_and_Centers/Middle_Schools/G_James_Gholson/blue%20star.jpg');
    },

    mouseExited: function() {
        this.set('value', this.get('star'));
    }
});

Gighub.StarView3 = SC.ImageView.extend({

    layout: { left: 100, height: 50, width: 50 },

    num: 3,
    rating: 0,

    ratingBinding: 'Gighub.venueController.rating',
    displayProperties: ['rating'],

    star: '',
    value: 'http://www.cs.uwaterloo.ca/~wics/images/star.jpg',

    updateValue: function() {
        if (this.get('rating') >= this.get('num')) {
            this.set('value', 'http://www.cs.uwaterloo.ca/~wics/images/star.jpg');
        }
        else {
            this.set('value', 'http://etc.usf.edu/clipart/37700/37717/05-star_37717_md.gif');
        }
    }.observes('rating'),

    mouseEntered: function() {
        this.set('star', this.get('value'));
        this.set('value', 'http://www1.pgcps.org/uploadedImages/Schools_and_Centers/Middle_Schools/G_James_Gholson/blue%20star.jpg');
    },

    mouseExited: function() {
        this.set('value', this.get('star'));
    }
});

Gighub.StarView4 = SC.ImageView.extend({

    layout: { left: 150, height: 50, width: 50 },

    num: 4,
    rating: 0,

    ratingBinding: 'Gighub.venueController.rating',
    displayProperties: ['rating'],

    star: '',
    value: 'http://www.cs.uwaterloo.ca/~wics/images/star.jpg',

    updateValue: function() {
        if (this.get('rating') >= this.get('num')) {
            this.set('value', 'http://www.cs.uwaterloo.ca/~wics/images/star.jpg');
        }
        else {
            this.set('value', 'http://etc.usf.edu/clipart/37700/37717/05-star_37717_md.gif');
        }
    }.observes('rating'),

    mouseEntered: function() {
        this.set('star', this.get('value'));
        this.set('value', 'http://www1.pgcps.org/uploadedImages/Schools_and_Centers/Middle_Schools/G_James_Gholson/blue%20star.jpg');
    },

    mouseExited: function() {
        this.set('value', this.get('star'));
    }
});

Gighub.StarView5 = SC.ImageView.extend({

    layout: { left: 200, height: 50, width: 50 },

    num: 5,
    rating: 0,

    ratingBinding: 'Gighub.venueController.rating',
    displayProperties: ['rating'],

    star: '',
    value: 'http://www.cs.uwaterloo.ca/~wics/images/star.jpg',

    updateValue: function() {
        if (this.get('rating') >= this.get('num')) {
            this.set('value', 'http://www.cs.uwaterloo.ca/~wics/images/star.jpg');
        }
        else {
            this.set('value', 'http://etc.usf.edu/clipart/37700/37717/05-star_37717_md.gif');
        }
    }.observes('rating'),

    mouseEntered: function() {
        this.set('star', this.get('value'));
        this.set('value', 'http://www1.pgcps.org/uploadedImages/Schools_and_Centers/Middle_Schools/G_James_Gholson/blue%20star.jpg');
    },

    mouseExited: function() {
        this.set('value', this.get('star'));
    }
});

Gighub.RatingView = SC.View.extend({
    layout: { top: 150, height: 50, width: 250 },

    childViews: 'star1 star2 star3 star4 star5'.w(),

    star1: Gighub.StarView1,
    star2: Gighub.StarView2,
    star3: Gighub.StarView3,
    star4: Gighub.StarView4,
    star5: Gighub.StarView5
});
