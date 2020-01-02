import mock from "@/assets/input.json";
import { FormItem } from "@/features/form";

export interface FormDataResponse {
  formId: number;
  title: string;
  items: FormItem[];
}

export const getFormData = (): Promise<FormDataResponse> => {
  return Promise.resolve(mock);
};
