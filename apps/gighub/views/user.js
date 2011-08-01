// ==========================================================================
// Project:   Gighub.UserView
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Gighub */

/** @class
  @extends SC.View
*/
Gighub.UserView = SC.View.extend(
/** @scope Gighub.UserView.prototype */ {

    layout: { top: 36 },
    childViews: 'contentView'.w(),

    contentView: SC.View.extend(SC.ContentDisplay, {

        layout: { top: 0 },

        render: function(context, firstTime) {

            var name = Gighub.userController.get('name');
            if (name == null) {
                name = 'user does not exist';
            }

            context = context.begin('div').push(name).end();

            sc_super();
        }
    })
});
