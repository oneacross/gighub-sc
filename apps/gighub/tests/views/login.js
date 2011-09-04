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

test("username must not be empty - not partial change", function() {
    field.set('value', '');
    var result = field.performValidate(NO);
    equals(result.isError, YES);
    equals(result.get('message'), 'Invalid.NotEmpty(Field)');
});

test("username can be frank - not partial change", function() {
    field.set('value', 'frank');
    equals(field.performValidate(NO), YES);
});

test("field has a fieldValue field", function() {
    field.set('value', 'frank');
    equals(field.get('fieldValue'), 'frank');
});

test("field value and a fieldValue are the same", function() {
    field.set('value', 'frank');
    equals(field.get('fieldValue'), field.get('value'));
});

test("username can be frank - performValidate", function() {
    field.set('value', 'frank');
    var result = field.performValidate(YES);
    equals(result, SC.VALIDATE_OK);
});

test("username is not valid", function() {
    field.isValid = function() { return NO; };
    field.set('value', '');
    equals(field.isValid(), NO);
});

//test("username must not be empty - performValidate", function() {
//    field.isValid = function() { return NO; };
//    field.set('value', '');
//    var result = field.performValidate(YES);
//    equals(result.isError, YES);
//});
