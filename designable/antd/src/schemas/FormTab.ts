import { GlobalRegistry } from '@designable/core'
import { ISchema } from '@formily/react'

export const FormTab: ISchema = {
  type: 'object',
  properties: {
    animated: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    centered: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    size: {
      type: 'string',
      enum: ['large', 'small', 'default'],
      'x-decorator': 'FormItem',
      'x-component': 'Radio.Group',
      'x-component-props': {
        defaultValue: 'default',
        optionType: 'button',
      },
    },
    type: {
      type: 'string',
      enum: GlobalRegistry.getDesignerMessage('settings.tabsTypeEnum'),
      'x-decorator': 'FormItem',
      'x-component': 'Radio.Group',
      'x-component-props': {
        defaultValue: 'line',
        optionType: 'button',
      },
    },
  },
}

FormTab.TabPane = {
  type: 'object',
  properties: {
    tab: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
  },
}
