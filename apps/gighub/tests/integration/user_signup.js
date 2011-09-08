// ==========================================================================
// Project:   Gighub user signup integration test
// Copyright: ©2011 Matt Mendell
// ==========================================================================
/*globals Gighub module test ok equals same stop start */

module('Given a Gighub website', {
    setup: function() {
        SC.RunLoop.begin();
        Gighub.main();
        SC.RunLoop.end();
    },

    teardown: function() {
        SC.RunLoop.begin();
        Gighub.getPath('mainPage.mainPane').remove();
        Gighub.store.reset();
        SC.RunLoop.end();
    }
});

test("view is bound to controller", function() {
    SC.RunLoop.begin();
    Gighub.getPath('mainPage.mainPane.middleView.signupView.username.field').set('value', 'Jack');
    SC.RunLoop.end();

    var name = Gighub.userController.get('signup_username');
    equals(name, 'Jack', 'the view is bound to the controller');
});

test("Jack can signup", function() {
    // Create the data source
    //var data_source = SC.store.create().from('Gighub.DataSource');

    // Jack fills out signup form
    SC.RunLoop.begin();
    Gighub.getPath('mainPage.mainPane.middleView.signupView.username.field').set('value', 'Jack');
    Gighub.getPath('mainPage.mainPane.middleView.signupView.email.field').set('value', 'jack@aol.com');
    Gighub.getPath('mainPage.mainPane.middleView.signupView.password.field').set('value', 'eggs');
    SC.RunLoop.end();

    // user hits submit (actually hits server)
    Gighub.getPath('mainPage.mainPane.middleView.signupView').validateForm();

    var error_msg = Gighub.userController.get('signup_error_message');
    equals(error_msg, '', 'error message should be empty');

    //var signed_in_user = Gighub.userController.get('content').get('name');
    //equals(signed_in_user, 'Jack', 'Jack should be signed in');

    // destroy jack
    var query = SC.Query.local(Gighub.User, 'name = Jack');
    // FIXME: store is not setup to find a User, (security)
    var jack = Gighub.store.find(query);
    jack.destroy();
    Gighub.store.commitRecords();
});

