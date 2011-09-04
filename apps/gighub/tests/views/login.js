// ==========================================================================
// Project:   Gighub.LoginView Unit Test
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Gighub module test ok equals same stop start */

module("Gighub.LoginView");

test("test description", function() {
    var expected = "test";
    var result   = "test";
    equals(result, expected, "test should equal test");
});

test("username must not be empty", function() {
    var view = Gighub.LoginView.create();
    view.username.field.set('value', '');
    validator = SC.Validator.NotEmpty.create();
    equals(validator.validate(undefined, view.username.field), NO);
});

test("username can be frank", function() {
    var view = Gighub.LoginView.create();
    view.username.field.set('value', 'frank');
    validator = SC.Validator.NotEmpty.create();
    equals(validator.validate(undefined, view.username.field), YES);
});

test("field has a fieldValue field", function() {
    var view = Gighub.LoginView.create();
    view.username.field.set('value', 'frank');
    equals(view.username.field.get('fieldValue'), 'frank');
});

test("field value and a fieldValue are the same", function() {
    var view = Gighub.LoginView.create();
    view.username.field.set('value', 'frank');
    equals(view.username.field.get('fieldValue'), view.username.field.get('value'));
});
