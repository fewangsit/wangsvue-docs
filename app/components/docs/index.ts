/**
 * Component Demo Registry
 *
 * Maps demo component paths to their dynamic import functions.
 * This registry is used by ComponentDemo.vue to load demo components dynamically.
 */

export const componentRegistry: Record<
  string,
  () => Promise<{ default: Component }>
> = {
  // Button components
  'button/Basic': () => import('./button/Basic.vue'),
  'button/Severity': () => import('./button/Severity.vue'),
  'button/Size': () => import('./button/Size.vue'),
  'button/Icon': () => import('./button/Icon.vue'),
  'button/IconOnly': () => import('./button/IconOnly.vue'),
  'button/Badge': () => import('./button/Badge.vue'),
  'button/Tooltip': () => import('./button/Tooltip.vue'),
  'button/Loading': () => import('./button/Loading.vue'),
  'button/Raised': () => import('./button/Raised.vue'),
  'button/Text': () => import('./button/Text.vue'),
  'button/Outlined': () => import('./button/Outlined.vue'),
  'button/Template': () => import('./button/Template.vue'),

  // Icon components
  'icon/Basic': () => import('./icon/Basic.vue'),
  'icon/Severity': () => import('./icon/Severity.vue'),
  'icon/Tooltip': () => import('./icon/Tooltip.vue'),
  'icon/Gallery': () => import('./icon/Gallery.vue'),

  // InputText components
  'inputtext/Basic': () => import('./inputtext/Basic.vue'),
  'inputtext/Placeholder': () => import('./inputtext/Placeholder.vue'),
  'inputtext/CharacterRestrictions': () =>
    import('./inputtext/CharacterRestrictions.vue'),
  'inputtext/MaxLengthPrevention': () =>
    import('./inputtext/MaxLengthPrevention.vue'),
  'inputtext/ValidationOnBlur': () =>
    import('./inputtext/ValidationOnBlur.vue'),
  'inputtext/AvailabilityCheck': () =>
    import('./inputtext/AvailabilityCheck.vue'),
  'inputtext/ExistingValues': () => import('./inputtext/ExistingValues.vue'),
  'inputtext/ValidationStates': () =>
    import('./inputtext/ValidationStates.vue'),
  'inputtext/Disabled': () => import('./inputtext/Disabled.vue'),
  'inputtext/Slots': () => import('./inputtext/Slots.vue'),
  'inputtext/FormIntegration': () => import('./inputtext/FormIntegration.vue'),

  // Textarea components
  'textarea/Basic': () => import('./textarea/Basic.vue'),
  'textarea/AutoResize': () => import('./textarea/AutoResize.vue'),
  'textarea/Validation': () => import('./textarea/Validation.vue'),
  'textarea/Size': () => import('./textarea/Size.vue'),
  'textarea/CharacterLimit': () => import('./textarea/CharacterLimit.vue'),
  'textarea/InvalidState': () => import('./textarea/InvalidState.vue'),
  'textarea/Disabled': () => import('./textarea/Disabled.vue'),
  'textarea/FormIntegration': () => import('./textarea/FormIntegration.vue'),

  // InputNumber components
  'inputnumber/Basic': () => import('./inputnumber/Basic.vue'),
  'inputnumber/MinMax': () => import('./inputnumber/MinMax.vue'),
  'inputnumber/Currency': () => import('./inputnumber/Currency.vue'),
  'inputnumber/PrefixSuffix': () => import('./inputnumber/PrefixSuffix.vue'),
  'inputnumber/Sizes': () => import('./inputnumber/Sizes.vue'),
  'inputnumber/FormIntegration': () =>
    import('./inputnumber/FormIntegration.vue'),

  // InputEmail components
  'inputemail/Basic': () => import('./inputemail/Basic.vue'),
  'inputemail/Validation': () => import('./inputemail/Validation.vue'),
  'inputemail/ExistingCheck': () => import('./inputemail/ExistingCheck.vue'),
  'inputemail/AsyncCheck': () => import('./inputemail/AsyncCheck.vue'),
  'inputemail/FormIntegration': () =>
    import('./inputemail/FormIntegration.vue'),

  // InputCurrency components
  'inputcurrency/Basic': () => import('./inputcurrency/Basic.vue'),
  'inputcurrency/Currencies': () => import('./inputcurrency/Currencies.vue'),
  'inputcurrency/Validation': () => import('./inputcurrency/Validation.vue'),
  'inputcurrency/Sizes': () => import('./inputcurrency/Sizes.vue'),
  'inputcurrency/FormIntegration': () =>
    import('./inputcurrency/FormIntegration.vue'),

  // InputPhoneNumber components
  'inputphonenumber/Basic': () => import('./inputphonenumber/Basic.vue'),
  'inputphonenumber/Validation': () =>
    import('./inputphonenumber/Validation.vue'),
  'inputphonenumber/MaxDigits': () =>
    import('./inputphonenumber/MaxDigits.vue'),
  'inputphonenumber/FormIntegration': () =>
    import('./inputphonenumber/FormIntegration.vue'),

  // InputURL components
  'inputurl/Basic': () => import('./inputurl/Basic.vue'),
  'inputurl/Protocol': () => import('./inputurl/Protocol.vue'),
  'inputurl/Validation': () => import('./inputurl/Validation.vue'),
  'inputurl/Slots': () => import('./inputurl/Slots.vue'),
  'inputurl/FormIntegration': () => import('./inputurl/FormIntegration.vue'),

  // InputBadge components
  'inputbadge/Basic': () => import('./inputbadge/Basic.vue'),
  'inputbadge/Email': () => import('./inputbadge/Email.vue'),
  'inputbadge/Validation': () => import('./inputbadge/Validation.vue'),
  'inputbadge/Editable': () => import('./inputbadge/Editable.vue'),
  'inputbadge/FormIntegration': () =>
    import('./inputbadge/FormIntegration.vue'),

  // InputRangeNumber components
  'inputrangenumber/Basic': () => import('./inputrangenumber/Basic.vue'),
  'inputrangenumber/Placeholders': () =>
    import('./inputrangenumber/Placeholders.vue'),
  'inputrangenumber/Validation': () =>
    import('./inputrangenumber/Validation.vue'),
  'inputrangenumber/FormIntegration': () =>
    import('./inputrangenumber/FormIntegration.vue'),

  // Badge components
  'badge/Basic': () => import('./badge/Basic.vue'),
  'badge/Severity': () => import('./badge/Severity.vue'),
  'badge/Removable': () => import('./badge/Removable.vue'),
  'badge/Disabled': () => import('./badge/Disabled.vue'),
  'badge/Format': () => import('./badge/Format.vue'),
  'badge/DynamicSeverity': () => import('./badge/DynamicSeverity.vue'),
  'badge/Tooltips': () => import('./badge/Tooltips.vue'),
  'badge/Editable': () => import('./badge/Editable.vue'),

  // BadgeGroup components
  'badgegroup/Basic': () => import('./badgegroup/Basic.vue'),
  'badgegroup/Limit': () => import('./badgegroup/Limit.vue'),
  'badgegroup/ObjectLabels': () => import('./badgegroup/ObjectLabels.vue'),
  'badgegroup/CustomMore': () => import('./badgegroup/CustomMore.vue'),
  'badgegroup/DialogContent': () => import('./badgegroup/DialogContent.vue'),

  // Checkbox components
  'checkbox/Basic': () => import('./checkbox/Basic.vue'),
  'checkbox/Binary': () => import('./checkbox/Binary.vue'),
  'checkbox/TriState': () => import('./checkbox/TriState.vue'),
  'checkbox/Disabled': () => import('./checkbox/Disabled.vue'),
  'checkbox/Readonly': () => import('./checkbox/Readonly.vue'),
  'checkbox/Tooltip': () => import('./checkbox/Tooltip.vue'),
  'checkbox/CustomValues': () => import('./checkbox/CustomValues.vue'),
  'checkbox/WithinTable': () => import('./checkbox/WithinTable.vue'),

  // ToggleSwitch components
  'toggleswitch/Basic': () => import('./toggleswitch/Basic.vue'),
  'toggleswitch/TriState': () => import('./toggleswitch/TriState.vue'),
  'toggleswitch/Disabled': () => import('./toggleswitch/Disabled.vue'),
  'toggleswitch/Invalid': () => import('./toggleswitch/Invalid.vue'),
  'toggleswitch/Readonly': () => import('./toggleswitch/Readonly.vue'),
  'toggleswitch/Tooltip': () => import('./toggleswitch/Tooltip.vue'),
  'toggleswitch/CustomValues': () => import('./toggleswitch/CustomValues.vue'),

  // Menu components
  'menu/Basic': () => import('./menu/Basic.vue'),
  'menu/Popup': () => import('./menu/Popup.vue'),
  'menu/Nested': () => import('./menu/Nested.vue'),
  'menu/Icons': () => import('./menu/Icons.vue'),
  'menu/Router': () => import('./menu/Router.vue'),
  'menu/Template': () => import('./menu/Template.vue'),

  // TabMenu components
  'tabmenu/Basic': () => import('./tabmenu/Basic.vue'),
  'tabmenu/Types': () => import('./tabmenu/Types.vue'),
  'tabmenu/Icons': () => import('./tabmenu/Icons.vue'),
  'tabmenu/Router': () => import('./tabmenu/Router.vue'),
  'tabmenu/ActiveIndex': () => import('./tabmenu/ActiveIndex.vue'),
  'tabmenu/TrailingLine': () => import('./tabmenu/TrailingLine.vue'),

  // Dialog components
  'dialog/Basic': () => import('./dialog/Basic.vue'),
  'dialog/Modal': () => import('./dialog/Modal.vue'),
  'dialog/Position': () => import('./dialog/Position.vue'),
  'dialog/Maximizable': () => import('./dialog/Maximizable.vue'),
  'dialog/Draggable': () => import('./dialog/Draggable.vue'),
  'dialog/Responsive': () => import('./dialog/Responsive.vue'),
  'dialog/Template': () => import('./dialog/Template.vue'),

  // DialogConfirm components
  'dialogconfirm/Basic': () => import('./dialogconfirm/Basic.vue'),
  'dialogconfirm/Severity': () => import('./dialogconfirm/Severity.vue'),
  'dialogconfirm/Messages': () => import('./dialogconfirm/Messages.vue'),
  'dialogconfirm/Lists': () => import('./dialogconfirm/Lists.vue'),
  'dialogconfirm/Buttons': () => import('./dialogconfirm/Buttons.vue'),
  'dialogconfirm/Template': () => import('./dialogconfirm/Template.vue')
}
