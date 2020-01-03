# form-practice

## Start

```sh
$ yarn
$ yarn start
```

## Todo

- [x] mock data 구축 (input.json)
- [x] api directory에서 data entry point 생성
- [x] store 구조 설계
  - [x] form feature
  - [x] loading feature
- [ ] form/action 설계
  - [ ] updateForm
- [ ] 컴포넌트 설계
  - [x] /shared/Title
  - [x] /shared/Button
  - [x] /shared/Loading
  - [x] /shared/form/FormWrapper
  - [x] /shared/form/FormTitle
  - [x] /shared/form/FormOption
  - [ ] /shared/layer/Alert
- [ ] utils
  - [ ] validate

```json
{
  "id": 1, // formId
  "items": [{
    "id": 1, // itemId
    "answer": "예시 답변입니다"
  }, {
    "id": 2,
    "answer": "답변,여러개,예시답변,입니다"
  }]
}

```

<div align="center">

<sub><sup>Written by <a href="https://github.com/JaeYeopHan">@Jbee</a></sup></sub><small>✌</small>

</div>
