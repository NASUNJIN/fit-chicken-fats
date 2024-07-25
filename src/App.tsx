import React, { useState } from "react";
import ChickenTable from "./components/ChickenTable/ChickenTable";
import ProductsFilter from "./components/Products/ProductsFilter";
import "./App.css";
import ComparisonTable from "./components/Comparison/ComparisonTable";
import SearchBox from "./components/SearchBox/SearchBox";
import Footer from "./components/Common/Footer";
import Header from "./components/Common/Header";
import Explanation from "./components/Common/Explanation";
import AverageTable from "./components/AverageTable/AverageTable";

const App: React.FC = () => {
    const [showExplanation, setShowExplanation] = useState(false);

    const toggleClick = () => { setShowExplanation(!showExplanation); };

    return (
        <>
            <Header toggleClick={toggleClick} />
            <div className="flex justify-end">
                {showExplanation ? <Explanation /> : null}
            </div>
            <div className="flex flex-col items-center justify-center p-1 px-3">
                <div className="flex flex-col w-4/5">
                    <ProductsFilter />
                    <AverageTable />
                    <div className="flex w-full">
                        <div className="flex flex-col items-center flex-grow">
                            <SearchBox />
                            <ChickenTable />
                        </div>
                        <div className="mt-20 ml-10 lg:py-10 sm:w-full sm:py-5 flex-shrink-0">
                            <ComparisonTable />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default App;
