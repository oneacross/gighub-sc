// ==========================================================================
// Project:   Gighub.TopView
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Gighub */

/** @class
  @extends SC.View
*/
Gighub.TopView = SC.ToolbarView.extend(
/** @scope Gighub.TopView.prototype */ {

    layout: { top: 0, left: 0, right: 0, height: 36 },
    childViews: 'labelView bandsButton venuesButton nameView logoutButton'.w(),
    anchorLocation: SC.ANCHOR_TOP,

    labelView: SC.LabelView.design({
        layout: { centerY: 0, height: 24, left: 8, width: 200 },
        controlSize: SC.LARGE_CONTROL_SIZE,
        fontWeight: SC.BOLD_WEIGHT,
        value: 'gighub'
    }),

    bandsButton: SC.ButtonView.design({
        layout: { centerY: 0, height: 24, left: 300, width: 100 },
        title: 'bands',
        target: 'Gighub.bandsController',
        action: 'show_all'
    }),

    venuesButton: SC.ButtonView.design({
        layout: { centerY: 0, height: 24, left: 400, width: 100 },
        title: 'venues',
        target: 'Gighub.venuesController',
        action: 'show_all'
    }),

    nameView: SC.LabelView.design({
        layout: { centerY: 0, height: 24, right: 100, width: 100 },
        controlSize: SC.LARGE_CONTROL_SIZE,
        fontWeight: SC.BOLD_WEIGHT,

        displayProperties: ['value'],
        valueBinding: 'Gighub.userController.name',
        isVisibleBinding: 'Gighub.userController.loggedIn',
    }),

    logoutButton: SC.ButtonView.design({
        layout: { centerY: 0, height: 24, right: 12, width: 100 },
        title: 'Logout',
        target: 'Gighub.loginController',
        action: 'logout',

        displayProperties: ['isVisible'],
        isVisibleBinding: 'Gighub.userController.loggedIn',
    })
});
