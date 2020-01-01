# form-practice

## Start

```sh
$ yarn
$ yarn start
```

## Todo

- [ ] mock data 구축 (input.json)
- [ ] api directory에서 data entry point 생성
- [ ] store 구조 설계
  - [ ] form feature
  - [ ] loading feature
- [ ] form/action 설계
  - [ ] updateForm
- [ ] 컴포넌트 설계
  - [ ] shared/Title
  - [ ] shared/FormTitle
  - [ ] shared/BackButton
  - [ ] shared/NextButton
  - [ ] shared/SubmitButton
  - [ ] shared/Alert
  - [ ] shared/Loading
  - [ ] shared/form/CheckBox
  - [ ] shared/form/Radio
  - [ ] shared/form/TextInput
  - [ ] shared/form/SelectBox
- [ ] utils
  - [ ] validate

```ts
enum FormType {
  CheckBox = 1,
  Radio = 2,
  TextInput = 3,
  SelectBox = 4,
}

interface FormOption {
  id: number
  text: string
}

interface FormItem {
  itemId: number
  title: string
  formType: FormType
  options: FormOption[]
}

interface FormDataResponse {
  formId: number
  title: string
  items: FormItem[]
}

interface FormState extends FormDataResponse {
  answers: { id: Pick<FormItem, 'itemId'>, answer: string }
}

const initialState: FormState = {}
```

<div align="center">

<sub><sup>Written by <a href="https://github.com/JaeYeopHan">@Jbee</a></sup></sub><small>✌</small>

</div>
