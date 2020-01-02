import React from 'react'

import { FormCheckbox } from "@/components/shared/form/FormCheckbox";
import { FormItem, FormType } from '@/features/form'

import { FormInput } from './FormInput';
import { FormRadio } from './FormRadio';
import { FormSelectBox } from './FormSelectbox';
import { FormSelectOption } from './FormSelectOption';

interface IFormContentsProps extends FormItem { }

export const FormContents = (props: IFormContentsProps) => {

  const Contents = () => {
    switch (props.formType) {
      case FormType.CheckBox:
        return props.options.map(option => (
          <FormCheckbox
            key={option.id}
            {...option}
          />
        ))
      case FormType.Radio:
        return props.options.map(option => (
          <FormRadio
            key={option.id}
            {...option}
            itemId={props.itemId}
          />
        ))
      case FormType.TextInput:
        return <FormInput />
      case FormType.SelectBox:
        return (
          <FormSelectBox>
            {props.options.map(option => (
              <FormSelectOption
                key={option.id}
                {...option}
              />
            ))}
          </FormSelectBox>
        )
      default:
        return <></>
    }
  }

  return <>{Contents()}</>
}