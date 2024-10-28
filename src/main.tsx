import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { persistQueryClient } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { ThemeProvider } from "./components/theme-provider.tsx";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			gcTime: 1000 * 60 * 60,
			staleTime: 1000 * 60 * 5, // 5 minutes
		},
	},
});

const localStoragePersister = createSyncStoragePersister({
	storage: window.localStorage,
});

persistQueryClient({
	queryClient,
	persister: localStoragePersister,
});

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
				<App />
			</ThemeProvider>
		</QueryClientProvider>
	</StrictMode>
);
