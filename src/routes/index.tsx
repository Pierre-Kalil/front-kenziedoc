import React from "react";
import { Route, Routes } from "react-router-dom";
import { DashboardPatient } from "../pages/dashboardPatient";
import { DashboardProfessional } from "../pages/dashboardProfessional";
import { DashboardSecretary } from "../pages/dashboardSecretary";
import { Home } from "../pages/home";
import { Login } from "../pages/Login";
import { RegisterMain } from "../pages/registerMain";
import { RegisterPatient } from "../pages/registerPatient";
import { RegisterProfessional } from "../pages/registerProfessional";
import { RegisterSecretary } from "../pages/registerSecretary";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboardpatient" element={<DashboardPatient />} />
      <Route
        path="/dashboardprofessional"
        element={<DashboardProfessional />}
      />
      <Route path="/dashboardadmin" element={<DashboardSecretary />} />

      <Route path="/registermain" element={<RegisterMain />} />

      <Route path="registerpatient" element={<RegisterPatient />} />
      <Route path="registerprofessional" element={<RegisterProfessional />} />
      <Route path="registersecretary" element={<RegisterSecretary />} />

      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
}
