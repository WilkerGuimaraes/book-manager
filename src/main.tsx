import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

import "./styles/index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/login";
import { Books } from "./pages/books";
import { queryClient } from "./_lib/react-query";
import { Register } from "./pages/register";
import { ProtectedRoute } from "./pages/books/components/protected-route";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/books",
    element: (
      <ProtectedRoute>
        <Books />
      </ProtectedRoute>
    ),
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />

      <Toaster richColors />
    </QueryClientProvider>
  </StrictMode>,
);
