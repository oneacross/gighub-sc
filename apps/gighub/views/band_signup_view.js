// ==========================================================================
// Project:   Gighub.BandSignupPane
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Gighub */

/** @class
  @extends SC.PanelPane
*/
Gighub.BandSignupPage = SC.Page.design({

    mainPane: SC.PanelPane.design({

        layout: { centerX: 0, centerY: 0, width: 400, height: 200 },
        contentView: SC.View.design({

            childViews: 'message name location picture signupButton errorMessage'.w(),

            message: SC.LabelView.design({
                layout: { top: 17, left: 25, height: 25 },
                value: 'Sign up your band!',
                controlSize: SC.LARGE_CONTROL_SIZE,
                fontWeight: SC.BOLD_WEIGHT
            }),

            name: SC.View.design({
                layout: { left: 10, right: 14, top: 42, height: 26 },
                childViews: 'label field'.w(),

                label: SC.LabelView.design({
                    layout: { left: 0, width: 77, height: 18, centerY: 0 },

                    value: 'Name',
                    textAlign: SC.ALIGN_RIGHT
                }),

                field: SC.TextFieldView.design({
                    layout: { width: 230, height: 22, right: 3, centerY: 0 },

                    isEnabledBinding: SC.Binding.from('Gighub.bandController.isSigningUp')
                        .bool()
                        .transform(function(value, isForward) {
                            return !value;
                        }),
                    
                    validator: SC.Validator.NotEmpty,
                    valueBinding: 'Gighub.bandController.name'

                })
            }),

            location: SC.View.design({
                layout: { left: 10, right: 14, top: 70, height: 26 },
                childViews: 'label field'.w(),

                label: SC.LabelView.design({
                    layout: { left: 0, width: 77, height: 18, centerY: 0 },

                    value: 'Location',
                    textAlign: SC.ALIGN_RIGHT
                }),

                field: SC.TextFieldView.design({
                    layout: { width: 230, height: 22, right: 3, centerY: 0 },

                    isEnabledBinding: SC.Binding.from('Gighub.bandController.isSigningUp')
                        .bool()
                        .transform(function(value, isForward) {
                            return !value;
                        }),
                    
                    valueBinding: 'Gighub.bandController.location'

                })
            }),

            picture: SC.View.design({
                layout: { left: 10, right: 14, top: 98, height: 26 },
                childViews: 'label field'.w(),

                label: SC.LabelView.design({
                    layout: { left: 0, width: 77, height: 18, centerY: 0 },

                    value: 'Picture URL',
                    textAlign: SC.ALIGN_RIGHT
                }),

                field: SC.TextFieldView.design({
                    layout: { width: 230, height: 22, right: 3, centerY: 0 },

                    isEnabledBinding: SC.Binding.from('Gighub.bandController.isSigningUp')
                        .bool()
                        .transform(function(value, isForward) {
                            return !value;
                        }),

                    validator: SC.Validator.NotEmpty,
                    valueBinding: 'Gighub.bandController.picture'
                })
            }),

            signupButton: SC.ButtonView.design({
                layout: { height: 24, width: 80, bottom: 17, right: 17 },
                title: 'Sign up',
                isDefault: YES,
                isEnabledBinding: SC.Binding.from('Gighub.bandController.isSigningUp')
                    .bool()
                    .transform(function(value, isForward) {
                        return !value;
                    }),
                action: 'validateForm'
            }),

            validateForm: function() {
                if (this.name.field.performValidateSubmit().isError) {
                    this.errorMessage.set('value', 'Name is required');
                    return;
                }
                Gighub.bandController.beginSignup();
            },

            errorMessage: SC.LabelView.design({
                layout: { height: 40, width: 230, right: 120, bottom: 7 },
                classNames: ['error-message'],
                valueBinding: 'Gighub.bandController.error_message'
            })
        })
    })
});
