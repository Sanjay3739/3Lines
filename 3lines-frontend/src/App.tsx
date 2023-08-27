import './App.css';
import  Sidebar  from './components/Sidebar/sidebar';
import  Searchbar  from './components/Buttons/searchbar';
import  EnhancedTable  from './components/Tables/table';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Sidebar />} />
      <Route path="/search" element={<Searchbar />} />
      <Route path="/table" element={<EnhancedTable />} />

      
      

    </Routes>
  );
}

export default App;
