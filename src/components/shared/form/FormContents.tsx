import React from 'react'
import { useDispatch } from 'react-redux';

import { FormCheckbox } from "@/components/shared/form/FormCheckbox";
import { formActions, FormType, RefinedFormItem } from '@/features/form'

import { FormInput } from './FormInput';
import { FormRadio } from './FormRadio';
import { FormSelectBox } from './FormSelectbox';
import { FormSelectOption } from './FormSelectOption';

interface IFormContentsProps extends RefinedFormItem { }

export const FormContents = (props: IFormContentsProps) => {
  const dispatch = useDispatch()
  const handleUpdate = (itemId: number) =>
    (value: string) => dispatch(formActions.updateAnswer({ [itemId]: value }))

  const Contents = () => {
    switch (props.formType) {
      case FormType.CheckBox:
        return (
          <FormCheckbox
            onUpdate={handleUpdate(props.itemId)}
            optionsById={props.optionsById}
            optionIds={props.optionIds}
          />
        )
      case FormType.Radio:
        return (
          <FormRadio
            onUpdate={handleUpdate(props.itemId)}
            optionsById={props.optionsById}
            optionIds={props.optionIds}
          />
        )
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