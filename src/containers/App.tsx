import React, { FunctionComponent, useState, useReducer } from "react";
import { connect } from "react-redux";
import "./App.css";
import { Form } from "../components/Form";
import { IAppState, IForm } from "../redux/form/reducer";
import { Dispatch } from "redux";
import { updateForm, IFormField } from "../redux/form/actions";

export interface IStateProps {
  form: IForm;
}

export interface IDispatchProps {
  update: Function;
}

const mapStateToProps = (state: IAppState): IStateProps => {
  return {
    form: state.form
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => {
  return {
    update: (key: string, field: IFormField) =>
      dispatch(updateForm({ key, field }))
  };
};

const App: FunctionComponent<any> = props => {
  const { form, update } = props;
  const [page, updateFormPage] = useState(1);
  const [ignore, forceUpdate] = useReducer(x => x + 1, 0);
  const maxPage = Object.keys(form).reduce((acc, curr) => {
    if (form[curr].page > acc) {
      return form[curr].page;
    }
    return acc;
  }, 0);
  const handleClick = (page: number) => (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    updateFormPage(page);
  };
  return (
    <div className="App center shadow">
      <Form form={form} page={page} update={update} forceUpdate={forceUpdate} />
      {page !== maxPage && (
        <button onClick={handleClick(page + 1)}>next</button>
      )}
      {page !== 1 && <button onClick={handleClick(page - 1)}>previous</button>}
    </div>
  );
};

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
export default ConnectedApp;
