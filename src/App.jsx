import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import ComparisonPage from "./pages/ComparisonPage";
import EducationPage from "./pages/EducationPage";
import HajiPage from "./pages/HajiPage";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import SimulatorPage from "./pages/SimulatorPage";
import UmrohPage from "./pages/UmrohPage";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/simulator" element={<SimulatorPage />} />
        <Route path="/perbandingan-bank" element={<ComparisonPage />} />
        <Route path="/pendaftaran" element={<RegistrationPage />} />
        <Route path="/edukasi" element={<EducationPage />} />
        <Route path="/tabungan-haji" element={<HajiPage />} />
        <Route path="/tabungan-umroh" element={<UmrohPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
