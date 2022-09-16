import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import DashBoard from './components/DashBoard';
import AddProduct from './features/products/AddProduct';
import Users from './features/users/Users';
import Products from './features/products/Products';
import Orders from './features/orders/Orders';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="flex">
      <div>
        <SideBar />
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<DashBoard />} />
        <Route path="products" element={<Products />} />
        <Route path="newProduct" element={<AddProduct />} />
        <Route path="users" element={<Users />} />
        <Route path="orders" element={<Orders />} />
      </Routes>
    </div>
  );
}

export default App;
