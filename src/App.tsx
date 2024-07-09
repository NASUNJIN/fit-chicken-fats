import React, { useState } from "react";
import ChickenTable from "./components/ChickenTable/ChickenTable";
import ProductsFilter from "./components/Products/ProductsFilter";
import { ChickenData } from "./types/ChickenData";
import "./App.css";
import ComparisonTable from "./components/Comparison/ComparisonTable";

const App: React.FC = () => {
    const [filteredData, setFilteredData] = useState<ChickenData[]>([]);

    return (
        <div>
            <ProductsFilter onFilter={setFilteredData} />
            <ChickenTable filteredData={filteredData} />
            <ComparisonTable />
        </div>
    );
};

export default App;
