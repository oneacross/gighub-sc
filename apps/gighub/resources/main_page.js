// ==========================================================================
// Project:   Gighub - mainPage
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Gighub */

// This page describes the main user interface for your application.
Gighub.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'middleView topView'.w(),

    topView: SC.ToolbarView.design({
        layout: { top: 0, left: 0, right: 0, height: 36 },
        childViews: 'labelView addButton'.w(),
        anchorLocation: SC.ANCHOR_TOP,

        labelView: SC.LabelView.design({
            layout: { centerY: 0, height: 24, left: 8, width: 200 },
            controlSize: SC.LARGE_CONTROL_SIZE,
            fontWeight: SC.BOLD_WEIGHT,
            value: 'gighub'
        }),

        addButton: SC.ButtonView.design({
            layout: { centerY: 0, height: 24, right: 12, width: 100 },
            title: "Login"
        })
    }),

    middleView: SC.View.design({
        layout: { top: 36, bottom: 0, left: 0, right: 0 },
        childViews: 'bandsButton venuesButton listenersButton'.w(),

        bandsButton: SC.ButtonView.design({
            layout: { centerX: 0, top: 80, height: 36, width: 200 },
            title: 'the bands',
            action: 'show_all',
            target: 'Gighub.bandsController'
        }),

        venuesButton: SC.ButtonView.design({
            layout: { centerX: 0, top: 120, height: 36, width: 200 },
            title: 'the venues'
        }),

        listenersButton: SC.ButtonView.design({
            layout: { centerX: 0, top: 160, height: 36, width: 200 },
            title: 'the listeners'
        })
    })

  })

});

// The page to list all bands
Gighub.bandsPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'middleView topView'.w(),

    topView: SC.ToolbarView.design({
        layout: { top: 0, left: 0, right: 0, height: 36 },
        childViews: 'labelView addButton'.w(),
        anchorLocation: SC.ANCHOR_TOP,

        labelView: SC.LabelView.design({
            layout: { centerY: 0, height: 24, left: 8, width: 200 },
            controlSize: SC.LARGE_CONTROL_SIZE,
            fontWeight: SC.BOLD_WEIGHT,
            value: 'gighub'
        }),

        addButton: SC.ButtonView.design({
            layout: { centerY: 0, height: 24, right: 12, width: 100 },
            title: "Login"
        })
    }),

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

// This page shows one band
Gighub.bandPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'middleView topView'.w(),

    topView: SC.ToolbarView.design({
        layout: { top: 0, left: 0, right: 0, height: 36 },
        childViews: 'labelView bandsButton addButton'.w(),
        anchorLocation: SC.ANCHOR_TOP,

        labelView: SC.LabelView.design({
            layout: { centerY: 0, height: 24, left: 8, width: 200 },
            controlSize: SC.LARGE_CONTROL_SIZE,
            fontWeight: SC.BOLD_WEIGHT,
            value: 'gighub'
        }),

        bandsButton: SC.ButtonView.design({
            layout: { centerY: 0, height: 24, right: 200, width: 100 },
            title: 'the bands',
            action: 'show_all',
            target: 'Gighub.bandsController'
        }),

        addButton: SC.ButtonView.design({
            layout: { centerY: 0, height: 24, right: 12, width: 100 },
            title: "Login"
        })
    }),

    middleView: SC.TemplateView.design({
        contentBinding: 'Gighub.bandController.content',
        templateName: 'band'
    })
  })

});
