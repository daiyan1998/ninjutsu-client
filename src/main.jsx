import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./Routes/Routes.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Providers/AuthProvider";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className="container mx-auto">
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
