import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Routes from "./Routes.tsx";
import "./index.css";
import { Provider } from "jotai";
import { useStore } from "./store/useStore.ts";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider store={useStore}>
			<Routes />
		</Provider>
	</StrictMode>
);
