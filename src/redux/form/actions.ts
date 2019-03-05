export interface IFormField {
  [key: string]: string | number | undefined;
  label: string;
  value: string;
  page: number;
  type?: "email" | "phone";
}

export interface IFormPayload {
  key: string;
  field: IFormField;
}

export interface IFormAction {
  type: "UPDATE_FORM";
  payload: IFormPayload;
}

export const FormActions = {
  UPDATE_FORM: "UPDATE_FORM"
};

export function updateForm(payload: IFormPayload): IFormAction {
  return { type: "UPDATE_FORM", payload };
}
