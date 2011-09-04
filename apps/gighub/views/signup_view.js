// ==========================================================================
// Project:   Gighub.SignupView
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Gighub */

/** @class
  @extends SC.View
*/
Gighub.SignupView = SC.View.extend(
/** @scope Gighub.SignupView.prototype */ {

    childViews: 'message username email password signupButton errorMessage'.w(),
    layout: { left: 420, height: 185, width: 370 },

    message: SC.LabelView.design({
        layout: { top: 17, left: 25, height: 25 },
        value: 'New to Gighub? Join us!',
        controlSize: SC.LARGE_CONTROL_SIZE,
        fontWeight: SC.BOLD_WEIGHT
    }),

    username: SC.View.design({
        layout: { left: 10, right: 14, top: 42, height: 26 },
        childViews: 'label field'.w(),

        label: SC.LabelView.design({
            layout: { left: 0, width: 77, height: 18, centerY: 0 },

            value: 'Username',
            textAlign: SC.ALIGN_RIGHT
        }),

        field: SC.TextFieldView.design({
            layout: { width: 230, height: 22, right: 3, centerY: 0 },

            isEnabledBinding: SC.Binding.from('Gighub.userController.isSigningUp')
                .bool()
                .transform(function(value, isForward) {
                    return !value;
                }),
            
            validator: SC.Validator.NotEmpty,
            valueBinding: 'Gighub.userController.signup_username'

        })
    }),

    email: SC.View.design({
        layout: { left: 10, right: 14, top: 70, height: 26 },
        childViews: 'label field'.w(),

        label: SC.LabelView.design({
            layout: { left: 0, width: 77, height: 18, centerY: 0 },

            value: 'Email',
            textAlign: SC.ALIGN_RIGHT
        }),

        field: SC.TextFieldView.design({
            layout: { width: 230, height: 22, right: 3, centerY: 0 },

            isEnabledBinding: SC.Binding.from('Gighub.userController.isSigningUp')
                .bool()
                .transform(function(value, isForward) {
                    return !value;
                }),
            
            validator: SC.Validator.NotEmpty,
            valueBinding: 'Gighub.userController.signup_email'

        })
    }),

    password: SC.View.design({
        layout: { left: 10, right: 14, top: 98, height: 26 },
        childViews: 'label field'.w(),

        label: SC.LabelView.design({
            layout: { left: 0, width: 77, height: 18, centerY: 0 },

            value: 'Password',
            textAlign: SC.ALIGN_RIGHT
        }),

        field: SC.TextFieldView.design({
            layout: { width: 230, height: 22, right: 3, centerY: 0 },

            isPassword: YES,
            isEnabledBinding: SC.Binding.from('Gighub.userController.isSigningUp')
                .bool()
                .transform(function(value, isForward) {
                    return !value;
                }),

            validator: SC.Validator.NotEmpty,
            valueBinding: 'Gighub.userController.signup_password'
        })
    }),

    signupButton: SC.ButtonView.design({
        layout: { height: 24, width: 80, bottom: 17, right: 17 },
        title: 'Sign up',
        isDefault: YES,
        isEnabledBinding: SC.Binding.from('Gighub.userController.isSigningUp')
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
        if (this.email.field.performValidateSubmit().isError) {
            this.errorMessage.set('value', 'email is required');
            return;
        }
        if (this.password.field.performValidateSubmit().isError) {
            this.errorMessage.set('value', 'password is required');
            return;
        }
        Gighub.userController.beginSignup();
    },

    errorMessage: SC.LabelView.design({
        layout: { height: 40, width: 230, right: 120, bottom: 7 },
        classNames: ['error-message'],
        valueBinding: 'Gighub.userController.signup_error_message'
    })
});
