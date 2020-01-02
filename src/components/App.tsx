import React, { useEffect } from "react";
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
  const item = useSelector<RootState, FormItem>(state => formSelectors.currentItem(state[FORM]))

  const handleNextClick = () => dispatch(formActions.toNext())
  const handleBackClick = () => dispatch(formActions.toPrev())
  const handleSubmitClick = () => console.log(`submit`)

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
        <FormTitle>{item.title}</FormTitle>
        <FormContents {...item} />
      </FormWrapper>
      <Button onClick={handleBackClick}>Back</Button>
      <Button onClick={handleNextClick}>Next</Button>
      <Button onClick={handleSubmitClick}>Submit</Button>
    </Main>
  );
};
