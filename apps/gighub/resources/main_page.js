// ==========================================================================
// Project:   Gighub - mainPage
// Copyright: ©2011 Matt Mendell
// ==========================================================================
/*globals Gighub */

// Gighub's main page
Gighub.mainPage = SC.Page.design({

  mainPane: SC.MainPane.design({
    childViews: 'middleView topView'.w(),

    topView: Gighub.TopView,

    middleView: SC.View.design({
        layout: { top: 40 },
        childViews: 'loginView signupView'.w(),

        loginView: Gighub.LoginView,
        signupView: Gighub.SignupView
    })
  })
});

// The Bands page
Gighub.bandsPage = SC.Page.design({

  mainPane: SC.MainPane.design({
    childViews: 'middleView topView'.w(),

    topView: Gighub.TopView,

    middleView: SC.ScrollView.design({
        hasHorizontalScroller: NO,
        layout: { top: 36, bottom: 32, left: 0, right: 0 },
        contentView: SC.ListView.design({
            contentBinding: "Gighub.bandsController.arrangedObjects",
            selectionBinding: "Gighub.bandsController.selection",
            exampleView: Gighub.BandViewMini,
            rowHeight: 100
        })
    })

  })

});

// The Band page
Gighub.bandPage = SC.Page.design({
    mainPane: SC.MainPane.design({
        childViews: 'topView middleView'.w(),
        topView: Gighub.TopView,
        middleView: Gighub.BandView
    })
});

// The Venue page
Gighub.venuePage = SC.Page.design({
    mainPane: SC.MainPane.design({
        childViews: 'topView middleView ratingView'.w(),
        topView: Gighub.TopView,
        middleView: Gighub.VenueView,
        ratingView: Gighub.RatingView
    })
});

// The Venues page
Gighub.venuesPage = SC.Page.design({
    mainPane: SC.MainPane.design({
        childViews: 'topView middleView'.w(),

        topView: Gighub.TopView,

        middleView: SC.ScrollView.design({
            hasHorizontalScroller: NO,
            layout: { top: 36, left: 0, right: 0 },
            contentView: SC.ListView.design({
                contentBinding: 'Gighub.venuesController.arrangedObjects',
                selectionBinding: 'Gighub.venuesController.selection',
                exampleView: Gighub.VenueViewMini,
                rowHeight: 100
            })
        })
    })
});

// The User page
Gighub.userPage = SC.Page.design({
    mainPane: SC.MainPane.design({
        childViews: 'topView middleView'.w(),

        topView: Gighub.TopView,
        middleView: SC.TemplateView.design({
            layout: { top: 200 },

            templateName: 'user',
            nameBinding: 'Gighub.userController.name',
            lengthBinding: 'Gighub.bandsController.length',
            noBands: function() {
                SC.Logger.info('length is ' + this.get('length'));
                return this.get('length') === 0;
            }.property('length'),

            // Add this button the the noBands view
            BandSignupButtonView: SC.ButtonView.design({
                layout: { top: 0, left: 150, width: 150 },
                title: 'Sign up your band!',
                target: 'Gighub.bandController',
                action: 'signup_pane'
            })
        })
    })
});
