import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FormCheckbox } from "@/components/shared/form/FormCheckbox";
import { RootState } from "@/features";
import { FORM, formActions, FormItem, formSelectors, formThunks, FormType } from "@/features/form";
import { LOADING, LoadingState } from "@/features/loading";

import { Button } from "./shared/Button";
import { Empty } from "./shared/Empty";
import { FormInput } from './shared/form/FormInput';
import { FormRadio } from './shared/form/FormRadio';
import { FormSelectBox } from './shared/form/FormSelectbox';
import { FormTitle } from "./shared/form/FormTitle";
import { FormWrapper } from "./shared/form/FormWrapper";
import { Loading } from "./shared/Loading";
import { Main } from "./shared/Main";
import { Title } from "./shared/Title";

export default () => {
  const dispatch = useDispatch()
  const loading = useSelector<RootState, LoadingState>(state => state[LOADING])
  const title = useSelector<RootState, string>(state => formSelectors.title(state[FORM]))
  const item = useSelector<RootState, FormItem>(state => formSelectors.currentItem(state[FORM]))

  const handleUpdate = (value: string) => dispatch(formActions.updateAnswer({ [item.itemId]: value }))
  const handleNextClick = () => dispatch(formActions.toNext())
  const handleBackClick = () => dispatch(formActions.toPrev())
  const handleSubmitClick = () => console.log(`submit`)

  useEffect(() => {
    dispatch(formThunks.fetchFormData())
  }, [dispatch])

  const FormComponent = {
    [FormType.CheckBox]: FormCheckbox,
    [FormType.Radio]: FormRadio,
    [FormType.TextInput]: FormInput,
    [FormType.SelectBox]: FormSelectBox,
  }[item.formType] || Empty

  if (loading[FORM]) {
    return <Loading />
  }

  return (
    <Main>

      <Title>{title}</Title>
      <FormWrapper>
        <FormTitle>{item.title}</FormTitle>
        <FormComponent onUpdate={handleUpdate} options={item.options} />
      </FormWrapper>
      <Button onClick={handleBackClick}>Back</Button>
      <Button onClick={handleNextClick}>Next</Button>
      <Button onClick={handleSubmitClick}>Submit</Button>
    </Main>
  );
};
