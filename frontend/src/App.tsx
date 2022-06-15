import React from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DataTable from "./components/DataTable";

function App() {
  return (
      <>
          <Navbar/>
            <div className="container text-primary">
                <h1>DSVendas</h1>
                <DataTable/>
            </div>
          <Footer/>
      </>

  );
}

export default App;
