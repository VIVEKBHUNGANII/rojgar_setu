import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import InstallPrompt from "./components/InstallPrompt";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CustomerDashboard from "./pages/CustomerDashboard";
import LabourDashboard from "./pages/LabourDashboard";
import BookingPage from "./pages/BookingPage";
import MyBookings from "./pages/MyBookings";
import LabourProfile from "./pages/LabourProfile";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <InstallPrompt />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/customer"
              element={
                <ProtectedRoute allowedRoles={["customer"]}>
                  <CustomerDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/customer/bookings"
              element={
                <ProtectedRoute allowedRoles={["customer"]}>
                  <MyBookings />
                </ProtectedRoute>
              }
            />
            <Route
              path="/customer/book/:id"
              element={
                <ProtectedRoute allowedRoles={["customer"]}>
                  <BookingPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/labour"
              element={
                <ProtectedRoute allowedRoles={["labour"]}>
                  <LabourDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/labour/profile"
              element={
                <ProtectedRoute allowedRoles={["labour"]}>
                  <LabourProfile />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
