import React from "react";
import { AppRoutes } from "./app.routes";
import { PublicRoutes } from "./public.routes";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const Routes: React.FC = () => {
  const { logged } = useAuth();
  return (
    <BrowserRouter>{logged ? <AppRoutes /> : <AppRoutes />}</BrowserRouter>
  );
};
