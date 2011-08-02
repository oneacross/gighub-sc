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
        middleView: SC.View.design({
            layout: { top: 50 },
            childViews: 'nameView noBandView signupBandView'.w(),

            nameView: SC.LabelView.design({
                layout: { top: 0 },
                contentBinding: 'Gighub.userController.content',
                contentValueKey: 'name',
                controlSize: SC.LARGE_CONTROL_SIZE
            }),

            noBandView: SC.LabelView.design({
                layout: { top: 30, left: 20 },
                value: 'Are you in a band?'
            }),

            signupBandView: SC.ButtonView.design({
                layout: { top: 30, left: 150, width: 150 },
                title: 'Sign up your band!',
                target: 'Gighub.bandsController',
                action: 'signup_pane'
            })
        })
    })
});
