// Simple routing for :pageName/:paneName
Gighub.routes = SC.Object.create({
    currentPagePane: null,

    gotoRoute: function(params) {

        var pageName = params.pageName;
        if (pageName == undefined || pageName == '') {
            pageName = 'mainPage';
        }

        var paneName = params.paneName;
        if (paneName == undefined || paneName == '') {
            paneName = 'mainPane';
        }

        SC.Logger.log('pageName: ' + pageName);
        SC.Logger.log('paneName: ' + paneName);

        if (this.currentPagePane != null) {
            this.currentPagePane.remove();
        }

        var pagePanePath = pageName + '.' + paneName;
        var pagePane = Gighub.getPath(pagePanePath);
        pagePane.append();

        this.currentPagePane = pagePane;
    },

    root: function() {
        this.gotoRoute({
            pageName: 'mainPage',
            paneName: 'mainPane'
        });
    },

    bands: function() {
        this.gotoRoute({
            pageName: 'bandsPage',
            paneName: 'mainPane'
        });
    },

    band: function(params) {
        var name = params.bandName;
        Gighub.bandController.show(name);
        this.gotoRoute({
            pageName: 'bandPage',
            paneName: 'mainPane'
        });
    },

    venues: function() {
        this.gotoRoute({
            pageName: 'venuesPage',
            paneName: 'mainPane'
        });
    },

    venue: function(params) {
        var name = params.venueName;
        Gighub.venueController.show(name);
        this.gotoRoute({
            pageName: 'venuePage',
            paneName: 'mainPane'
        });
    },

    user: function(params) {
        var name = params.userName;
        Gighub.userController.set('name', name);
        this.gotoRoute({
            pageName: 'userPage',
            paneName: 'mainPane'
        });
    }

});
