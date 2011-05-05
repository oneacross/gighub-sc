// ==========================================================================
// Project:   Gighub
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Gighub */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
Gighub.main = function main() {

  // Step 1: Instantiate Your Views
  // The default code here will make the mainPane for your application visible
  // on screen.  If you app gets any level of complexity, you will probably 
  // create multiple pages and panes.  
  Gighub.getPath('mainPage.mainPane').append();

  // Step 2. Set the content property on your primary controller.
  // This will make your app come alive!

  var bands = Gighub.store.find(Gighub.Band);
  Gighub.bandsController.set('content', bands);

  // setup a route to show a band page
  SC.routes.add('bands/show/:id', Gighub.bandsController.show);
};

function main() { Gighub.main(); }
