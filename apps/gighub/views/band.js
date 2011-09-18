// ==========================================================================
// Project:   Gighub.BandView
// Copyright: ©2011 My Company, Inc.
// ==========================================================================

Gighub.BandView = SC.View.extend({
    layout: { top: 70 },

    childViews: 'contentView'.w(),
    contentView: SC.TemplateView.extend({
        templateName: "band",
        nameBinding: 'Gighub.bandController.name',
        locationBinding: 'Gighub.bandController.location',
        websiteBinding: 'Gighub.bandController.website'
    })
});
