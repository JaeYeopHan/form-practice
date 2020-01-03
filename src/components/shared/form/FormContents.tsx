import React from 'react'
import { useDispatch } from 'react-redux';

import { FormCheckbox } from "@/components/shared/form/FormCheckbox";
import { formActions, FormItem, FormType } from '@/features/form'

import { FormInput } from './FormInput';
import { FormRadio } from './FormRadio';
import { FormSelectBox } from './FormSelectbox';

interface IFormContentsProps extends FormItem { }

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
            options={props.options}
          />
        )
      case FormType.Radio:
        return (
          <FormRadio
            onUpdate={handleUpdate(props.itemId)}
            options={props.options}
          />
        )
      case FormType.TextInput:
        return <FormInput onUpdate={handleUpdate(props.itemId)} />
      case FormType.SelectBox:
        return (
          <FormSelectBox
            onUpdate={handleUpdate(props.itemId)}
            options={props.options}
          />
        )
      default:
        return <></>
    }
  }

  return <>{Contents()}</>
}