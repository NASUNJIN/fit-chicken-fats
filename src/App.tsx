import React, { useState } from 'react';
import ChickenTable from './components/ChickenTable/ChickenTable';
import ProductsFilter from './components/Products/ProductsFilter';
import { ChickenData } from './types/ChickenData';
import DemoPage from "./components/DemoPage";
import './App.css';
import DetailSideTable from "./components/Details/DetailSideTable";

const App: React.FC = () => {
  const [filteredData, setFilteredData] = useState<ChickenData[]>([]);

  return (
    <div>
      <ProductsFilter onFilter={setFilteredData} />
      <ChickenTable filteredData={filteredData} />
      <DetailSideTable />
    </div>
  );
}

export default App;