import './App.css';
import  Sidebar  from './components/Sidebar/sidebar';
import  Searchbar  from './components/Buttons/searchbar';
import  EnhancedTable  from './components/Tables/table';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import AddUser from './components/Settings/add-user';
import AccountSetting from './components/Settings/account-setting';
import Modules from './components/Settings/module';





function App() {
  return (
    <Routes>
      <Route path="/" element={<Sidebar />} />
      <Route path="/search" element={<Searchbar />} />
      <Route path="/table" element={<EnhancedTable />} />
      <Route path="/create-user" element={<AddUser />} />
      <Route path="/account-setting" element={<AccountSetting />} />
      <Route path="/modules" element={<Modules />} />




      

    </Routes>
  );
}

export default App;
