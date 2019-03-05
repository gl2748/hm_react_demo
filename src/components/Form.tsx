import React, { useState, Dispatch } from "react";
import "./Form.css";
import { IFormField } from "../redux/form/actions";
import { IForm } from "../redux/form/reducer";

export interface IFormProps {
  form: IForm;
  update: (arg0: string, arg1: IFormField) => void;
  page: number;
  forceUpdate: Dispatch<{}>;
}

export const Form: React.FunctionComponent<IFormProps> = ({
  form,
  update,
  page,
  forceUpdate
}: IFormProps) => {
  const handleChange = (key: string, field: IFormField) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    field.value = e.target.value;
    update(key, field);
    forceUpdate({});
  };
  const buildForm = (
    page: number,
    form: IForm,
    handleChange: (
      key: string,
      field: IFormField
    ) => (e: React.ChangeEvent<HTMLInputElement>) => void
  ) =>
    Object.keys(form).map((key: string) => {
      if (form[key].page === page) {
        return (
          <div className="col" key={key}>
            <div>
              <label>{form[key].label}</label>
            </div>
            <input
              type={form[key].type}
              value={form[key].value}
              onChange={handleChange(key, form[key])}
            />
          </div>
        );
      }
    });

  const currentForm = buildForm(page, form, handleChange);
  return <div className="flex-grid">{currentForm}</div>;
};
