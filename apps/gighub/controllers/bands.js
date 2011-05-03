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
    }.property('length').cacheable()

}) ;
