// ==========================================================================
// Project:   Gighub.LoginView
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Gighub */

/** @class

    This is the login view

  @extends SC.View
*/
Gighub.LoginView = SC.View.extend(
/** @scope Gighub.LoginView.prototype */ {

    childViews: 'username password loginButton errorMessage'.w(),
    layout: { left: 0, height: 130, width: 370 },

    username: SC.View.design({
        layout: { left: 17, right: 14, top: 17, height: 26 },
        childViews: 'label field'.w(),

        label: SC.LabelView.design({
            layout: { left: 0, width: 77, height: 18, centerY: 0 },

            value: 'Username',
            textAlign: SC.ALIGN_RIGHT
        }),

        field: SC.TextFieldView.design({
            layout: { width: 230, height: 22, right: 3, centerY: 0 },

            isEnabledBinding: SC.Binding.from('Gighub.loginController.isLoggingIn')
                .bool()
                .transform(function(value, isForward) {
                    return !value;
                }),
            
            validator: SC.Validator.NotEmpty,
            valueBinding: 'Gighub.loginController.username'
        })
    }),

    password: SC.View.design({
        layout: { left: 17, right: 14, top: 45, height: 26 },
        childViews: 'label field'.w(),

        label: SC.LabelView.design({
            layout: { left: 0, width: 77, height: 18, centerY: 0 },

            value: 'Password',
            textAlign: SC.ALIGN_RIGHT
        }),

        field: SC.TextFieldView.design({
            layout: { width: 230, height: 22, right: 3, centerY: 0 },

            isPassword: YES,
            isEnabledBinding: SC.Binding.from('Gighub.loginController.isLoggingIn')
                .bool()
                .transform(function(value, isForward) {
                    return !value;
                }),

            validator: SC.Validator.NotEmpty,
            valueBinding: 'Gighub.loginController.password'
        })
    }),

    loginButton: SC.ButtonView.design({
        layout: { height: 24, width: 80, bottom: 17, right: 17 },
        title: 'Login',
        isDefault: YES,
        isEnabledBinding: SC.Binding.from('Gighub.loginController.isLoggingIn')
            .bool()
            .transform(function(value, isForward) {
                return !value;
            }),

        action: 'validateForm'
    }),

    validateForm: function() {
        if (this.username.field.performValidateSubmit().isError) {
            this.errorMessage.set('value', 'Username is required');
            return;
        }
        if (this.password.field.performValidateSubmit().isError) {
            this.errorMessage.set('value', 'Password is required');
            return;
        }
        Gighub.loginController.beginLogin();
    },

    errorMessage: SC.LabelView.design({
        layout: { height: 40, width: 230, right: 120, bottom: 7 },
        classNames: ['error-message'],
        valueBinding: 'Gighub.loginController.errorMessage'
    })
});
