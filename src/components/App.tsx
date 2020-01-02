import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/features";
import { FORM, formActions, FormItem, formSelectors, formThunks } from "@/features/form";
import { LOADING, LoadingState } from "@/features/loading";

import { Button } from "./shared/Button";
import { FormContents } from "./shared/form/FormContents";
import { FormTitle } from "./shared/form/FormTitle";
import { FormWrapper } from "./shared/form/FormWrapper";
import { Loading } from "./shared/Loading";
import { Main } from "./shared/Main";
import { Title } from "./shared/Title";

export default () => {
  const dispatch = useDispatch()
  const loading = useSelector<RootState, LoadingState>(state => state[LOADING])
  const title = useSelector<RootState, string>(state => formSelectors.title(state[FORM]))
  const items = useSelector<RootState, FormItem[]>(state => formSelectors.currentItems(state[FORM]))

  const toNext = () => dispatch(formActions.toNext())
  const toBack = () => dispatch(formActions.toPrev())
  const handleSubmit = () => dispatch(formActions.submit())

  useEffect(() => {
    dispatch(formThunks.fetchFormData())
  }, [dispatch])

  if (loading[FORM]) {
    return <Loading />
  }

  return (
    <Main>
      <Title>{title}</Title>
      <FormWrapper>
        {items.map(item => (
          <Fragment key={`form_${item.formType}`}>
            <FormTitle>{item.title}</FormTitle>
            <FormContents options={item.options} formType={item.formType} />
          </Fragment>
        ))}
      </FormWrapper>
      <Button onClick={toBack}>Back</Button>
      <Button onClick={toNext}>Next</Button>
      <Button onClick={handleSubmit}>Submit</Button>
    </Main>
  );
};
