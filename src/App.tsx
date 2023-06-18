import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/main/mainLayout";

const Home = lazy(() => import("./pages/home/home"));
const SignIn = lazy(() => import("./pages/signin/signin"));


const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading ....</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/signup" element={<SignIn isSignUp={true} />} />
            <Route path="/signin" element={<SignIn />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default AppRoutes;
