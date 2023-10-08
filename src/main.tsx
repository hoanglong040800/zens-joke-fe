import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/home";
import { QueryClient, QueryClientProvider } from "react-query";
import { CssBaseline } from "@mui/material";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CssBaseline />

      <HomePage />
    </QueryClientProvider>
  </React.StrictMode>
);
