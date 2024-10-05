import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Layout from './Pages/Layout';
import DealsData from './Pages/DealsData';
import ProductData from './Pages/ProductData';
import EditDeal from './Pages/EditDeal';
import Admin from './Pages/Admin';
import DashBoard from './Pages/DashBoard';
import Invoices from './Pages/Invoices';
import DynamicDeal from './Pages/DynamicDeal';

function App() {
    return (

        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Admin />} />
          <Route path="dashboard" element={<DashBoard />} />

          <Route path="dynamic-deals" element={<DynamicDeal/>} />
          <Route path="invoices" element={<Invoices />} />

          

          <Route path="deals-data" element={<DealsData />} />
          <Route path="product-data" element={<ProductData />} />
          <Route path="edit/deal/:id" element={<EditDeal />} />




          add-merchant
          {/* <Route path="sign-in" element={<SignPage />} /> */}
          {/* <Route path="user-form" element={<UserForm />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>

    );
}

export default App;
