import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AddStartup from './pages/AddStartup';
import Investor from './pages/Investor';
import AccountSettings from './pages/settings/AccountSettings';
import NotFound from './pages/NotFound';
import PrivateRoute from './components/auth/PrivateRoute';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Public routes */}
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        
        {/* Protected routes */}
        <Route element={<PrivateRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add-startup" element={<AddStartup />} />
          <Route path="investor/*" element={<Investor />} />
          <Route path="settings/*" element={<AccountSettings />} />
        </Route>

        {/* Catch all */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App