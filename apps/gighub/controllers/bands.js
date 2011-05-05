// ==========================================================================
// Project:   Gighub.bandsController
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Gighub */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/
Gighub.bandsController = SC.ArrayController.create(
/** @scope Gighub.bandsController.prototype */ {

    summary: function() {
        var len = this.get('length'), ret;

        if (len && len > 0) {
            ret = len === 1 ? "1 band" : "%@ bands".fmt(len);
        }
        else {
            ret = "No bands";
        }
        return ret;
    }.property('length').cacheable(),

    showOne: function(arg) {
        // get the band from the id and render the page
        Gighub.getPath('mainPage.mainPane').remove();
        Gighub.getPath('bandPage.mainPane').append();
        SC.routes.set('location', 'bands/show/1');
    },

    showAll: function(arg) {
        Gighub.getPath('bandPage.mainPane').remove();
        Gighub.getPath('mainPage.mainPane').append();
        SC.routes.set('location', 'bands');
    }

}) ;
