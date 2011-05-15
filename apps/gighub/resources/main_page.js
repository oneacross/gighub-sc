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
        layout: { top: 40, centerX: 0, height: 150, width: 400 },
        childViews: 'loginView'.w(),
        
        loginView: Gighub.LoginView
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
        childViews: 'topView middleView'.w(),
        topView: Gighub.TopView,
        middleView: Gighub.VenueView
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
