import { FormActions, IFormField, IFormAction } from "./actions";

export interface IForm {
  [s: string]: IFormField;
}

export interface IAppState {
  form: IForm;
}

export const initialState: IAppState = {
  form: {
    firstName: {
      label: "First Name",
      value: "",
      page: 1
    },
    lastName: {
      label: "Last Name",
      value: "",
      page: 1
    },
    phone: {
      label: "Phone Number",
      value: "",
      type: "phone",
      page: 2
    },
    email: {
      label: "Email",
      value: "",
      type: "email",
      page: 2
    }
  }
};

export const form = (state = initialState.form, action: IFormAction) => {
  switch (action.type) {
    case FormActions.UPDATE_FORM:
      state[action.payload.key] = action.payload.field;
      return state;
    default:
      return state;
  }
};
