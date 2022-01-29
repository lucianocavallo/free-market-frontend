import ReactDom from "react-dom";
import { App } from "./App";
import { ContextProvider } from "./context/context";

ReactDom.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
