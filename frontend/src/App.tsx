import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DataTable from "./components/DataTable";
import BarChart from 'components/BarChart';
import DonutChart from 'components/DonutChart';

function App() {
  return (
      <>
          <Navbar/>
            <div className="container text-primary py-3">
                <h1>Dashboard de Vendas</h1>
                <div className="row px-3">
                  <div className="col-sm-6">
                    <h5 className="text-center text-secondary">Taxa de sucesso (%) </h5>
                    <BarChart/>
                  </div>
                  <div className="col-sm-6">
                    <h5 className="text-center text-secondary">Taxa de sucesso (%) </h5>
                    <DonutChart/>
                  </div>

                  <div className="py-3">
                    <h2 className="text-primary">Todas as vendas</h2>
                  </div>
                </div>
                <DataTable/>
            </div>
          <Footer/>
      </>

  );
}

export default App;
