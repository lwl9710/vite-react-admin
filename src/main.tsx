import ReactDOM from "react-dom/client";

import Router from "@/router";

const rootElement: HTMLElement = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(rootElement).render(<Router></Router>);