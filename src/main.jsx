import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import { router } from "./Routes/Routes.jsx";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthProvider from "./Providers/AuthProvider";
import App from "./App";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App>
        <QueryClientProvider client={queryClient}>
          <div className="container mx-auto">
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>
      </App>
    </AuthProvider>
  </React.StrictMode>
);
