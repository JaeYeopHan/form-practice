import { FormItem } from "@/features/form";

import mock from "../../assets/input.json";

export interface FormDataResponse {
  formId: number;
  title: string;
  items: FormItem[];
}

export const fetchFormData = () => {
  return Promise.resolve(mock);
};
