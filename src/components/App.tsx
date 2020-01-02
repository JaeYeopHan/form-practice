import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/features";
import { fetchFormData, FORM, FormState } from "@/features/form";
import { LOADING, LoadingState } from "@/features/loading";

import { Button } from "./shared/Button";
import { FormOption } from "./shared/form/FormOption";
import { FormTitle } from "./shared/form/FormTitle";
import { FormWrapper } from "./shared/form/FormWrapper";
import { Loading } from "./shared/Loading";
import { Main } from "./shared/Main";
import { Title } from "./shared/Title";

export default () => {
  const dispatch = useDispatch()
  const formState = useSelector<RootState, FormState>(state => state[FORM])
  const loading = useSelector<RootState, LoadingState>(state => state[LOADING])
  const [page, setPage] = useState(0);
  const { title, items } = formState

  const toNext = () =>
    setPage(prev => {
      if (prev === items.length - 1) {
        return prev;
      }
      return prev + 1;
    })

  const toBack = () =>
    setPage(prev => {
      if (prev === 0) {
        return prev;
      }
      return prev - 1;
    })


  useEffect(() => {
    dispatch(fetchFormData())
  }, [dispatch])

  if (loading[FORM]) {
    return <Loading />
  }

  return (
    <Main>
      <Title>{title}</Title>
      <FormWrapper>
        {items
          .filter((_, index) => index === page)
          .map(item => (
            <Fragment key={`form_${item.formType}`}>
              <FormTitle>{item.title}</FormTitle>
              {item.options.map(option => (
                <FormOption
                  key={option.id}
                  {...option}
                  formType={item.formType}
                />
              ))}
            </Fragment>
          ))}
      </FormWrapper>
      <Button onClick={toBack}>Back</Button>
      <Button onClick={toNext}>Next</Button>
      <Button onClick={() => console.log(`submit`)}>Submit</Button>
    </Main>
  );
};
