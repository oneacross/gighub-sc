// ==========================================================================
// Project:   Gighub.LoginView Unit Test
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Gighub module test ok equals same stop start */
var view, field;

module("Gighub.LoginView", {
    setup: function () {
        view = Gighub.LoginView.create();
        field = view.username.field;
    }
});

test("username must not be empty when user submits form", function() {
    field.set('value', '');
    var result = field.performValidateSubmit();
    equals(result.isError, YES);
    equals(result.get('message'), 'Invalid.NotEmpty(Field)');
});

test("username can be frank when user submits form", function() {
    field.set('value', 'frank');
    equals(field.performValidateSubmit(), YES);
});

