import React from "react";
import initialState from "./components/state/initialState";
import reducers from "./components/state/reducers";
import Pages from "./components/pages/Template/Pages";
import { StateContext, DispatchContext } from "./components/state/contexts";
import { useImmerReducer } from "use-immer";

function App() {
  const [state, dispatch] = useImmerReducer(reducers, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <Pages />
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}
export default App;
