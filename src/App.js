import React from "react";
import initialState from "./components/state/initialState";
import reducers from "./components/state/reducers";
import TopNavbar from "./components/common/TopNavbar";
import Routing from "./Routing";
import { StateContext, DispatchContext } from "./components/state/contexts";
import { useImmerReducer } from "use-immer";

function App() {
  const [state, dispatch] = useImmerReducer(reducers, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <TopNavbar />
        <Routing />
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
