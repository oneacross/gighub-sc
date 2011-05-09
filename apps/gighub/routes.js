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

        if (this.currentPagePane != null) {
            this.currentPagePane.remove();
        }

        var pagePanePath = pageName + '.' + paneName;
        var pagePane = Gighub.getPath(pagePanePath);
        pagePane.append();

        this.currentPagePane = pagePane;
    },

    bands: function() {
        this.gotoRoute({
            pageName: 'bandsPage',
            paneName: 'mainPane'
        });
    },

    band: function(params) {
        var name = params.bandName;
        this.gotoRoute({
            pageName: 'bandPage',
            paneName: 'mainPane'
        });
    }

});
