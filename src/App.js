import './App.scss';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Moneycounter from './Pages/Moneycounter/Moneycounter';
import Content from './Pages/Content/Content';
import Navbar from './Pages/Navbar/Navbar';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import Cards from './Pages/Cards/Cards';



function App() {
  return (
    <>
      <section className="headerbg">
        <Navbar />
        <Header />
      </section>
      <Content />
      <section className="counterbg">
        <Moneycounter />
      </section>

      <Cards />
      <Footer />


    </>

  );
}

export default App;
