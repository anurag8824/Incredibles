import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Sidebar from './components/SideBar';
import AddProduct from './Pages/AddProduct';
import Layout from './Pages/Layout';
import AddMerchant from './Pages/AddMerchant';
import DealsData from './Pages/DealsData';

function App() {
    return (

        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Sidebar />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="add-merchant" element={<AddMerchant />} />
          <Route path="deals-data" element={<DealsData />} />



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
