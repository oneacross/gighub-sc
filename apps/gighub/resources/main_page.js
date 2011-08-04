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
            childViews: 'nameView noBandView bandView'.w(),

            nameView: SC.LabelView.design({
                layout: { top: 0 },
                contentBinding: 'Gighub.userController.content',
                contentValueKey: 'name',
                controlSize: SC.LARGE_CONTROL_SIZE
            }),

            noBandView: SC.View.design({

                layout: { top: 30 },
                childViews: 'labelView buttonView'.w(),

                bandsBinding: 'Gighub.userController*content.bands',

                bands_did_change: function() {
                    if (this.get('bands') == null || this.get('bands').length == 0) {
                        this.set('isVisible', YES);
                    }
                    else {
                        this.set('isVisible', NO);
                    }
                }.observes('bands'),

                labelView: SC.LabelView.design({
                    layout: { top: 3, left: 20 },
                    value: 'Are you in a band?'
                }),

                buttonView: SC.ButtonView.design({
                    layout: { top: 0, left: 150, width: 150 },
                    title: 'Sign up your band!',
                    target: 'Gighub.bandsController',
                    action: 'signup_pane'
                })
            }),

            bandView: SC.View.design({

                isVisible: NO,
                layout: { top: 30 },
                childViews: 'labelView listView'.w(),

                bandsBinding: 'Gighub.userController*content.bands',

                bands_did_change: function() {
                    if (this.get('bands') == null || this.get('bands').length == 0) {
                        this.set('isVisible', NO);
                    }
                    else {
                        this.set('isVisible', YES);
                    }
                }.observes('bands'),

                labelView: SC.LabelView.design({
                    layout: { top: 0, left: 20 },
                    value: 'Behold, your bands!'
                }),

                listView: SC.LabelView.design({
                    layout: { top: 20, left: 20, width: 150 },
                    valueBinding: 'Gighub.userController.bands_string'
                })
            })
        })

    })
});
