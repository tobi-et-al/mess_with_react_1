import { createContext, Fragment, useContext, useState } from "react";
import "./styles.css";

// add context type for default
type contextType = number[] | any[];
export const defaultContextValue: contextType = [];
export const setValue = (arg1: any) => {};
export const MainContext = createContext({
  value: defaultContextValue,
  setValue
});

export const MainProvider = ({ children }: { children: any }) => {
  const [value, setValue] = useState(defaultContextValue as contextType);
  return (
    <MainContext.Provider value={{ value: value, setValue }}>
      {children}
    </MainContext.Provider>
  );
};

export const DumbComponent = () => {
  const { value, setValue } = useContext(MainContext);

  const updateValue = () => {
    let x = [...value];
    x.push(Math.random());
    setValue(x);
  };

  return (
    <Fragment>
      <br />
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <label className="btn btn-secondary">
          <input
            type="radio"
            name="options"
            id="option1"
            onClick={updateValue}
          />
          Negative
        </label>
        <label className="btn btn-secondary">
          <input
            type="radio"
            name="options"
            id="option1"
            onClick={updateValue}
          />
          Positive
        </label>
      </div>
      <br />
      <hr />
      <div
        className="mx-auto"
        style={{ overflowWrap: "break-word", width: "200px" }}
      >
        {value.join()}
      </div>
    </Fragment>
  );
};

export default function App() {
  return (
    <MainProvider>
      <div className="App">
        <DumbComponent></DumbComponent>
      </div>
    </MainProvider>
  );
}
