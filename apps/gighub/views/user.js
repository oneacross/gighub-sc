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

        contentDisplayProperties: 'name'.w(),
        contentBinding: 'Gighub.userController.content',

        render: function(context, firstTime) {
            var name = '';
            var content = this.get('content');

            if (content != null) {
                name = content.get('name');
            }
            else {
                name = 'user does not exist';
            }

            context = context.begin('div').push(name).end();

            sc_super();
        }
    })
});
