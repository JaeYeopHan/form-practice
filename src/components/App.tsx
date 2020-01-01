import React, { Fragment, useCallback, useState } from "react";

import { FormItem } from "@/features/form";

import { Button } from "./shared/Button";
import { FormOption } from "./shared/form/FormOption";
import { FormTitle } from "./shared/form/FormTitle";
import { FormWrapper } from "./shared/form/FormWrapper";
import { Main } from "./shared/Main";
import { Title } from "./shared/Title";

export default () => {
  const [page, setPage] = useState(0);
  const title = "Title";
  const items: FormItem[] = [
    {
      itemId: 1,
      title: "원하는 청소 스타일은 무엇인가요?",
      formType: 1,
      options: [
        {
          id: 1,
          text: "스팀청소"
        },
        {
          id: 2,
          text: "진공청소기로 청소"
        },
        {
          id: 3,
          text: "쓰레기 비우기"
        }
      ]
    },
    {
      itemId: 2,
      title: "2원하는 청소 스타일은 무엇인가요?",
      formType: 1,
      options: [
        {
          id: 1,
          text: "스팀청소"
        },
        {
          id: 2,
          text: "진공청소기로 청소"
        },
        {
          id: 3,
          text: "쓰레기 비우기"
        }
      ]
    }
  ];

  const toNext = useCallback(
    () =>
      setPage(prev => {
        if (prev === items.length - 1) {
          return prev;
        }
        return prev + 1;
      }),
    [items.length]
  );
  const toBack = useCallback(
    () =>
      setPage(prev => {
        if (prev === 0) {
          return prev;
        }
        return prev - 1;
      }),
    []
  );

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
