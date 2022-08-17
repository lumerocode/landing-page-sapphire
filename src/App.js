import './App.css';
import Author from './components/Author/Author';
import { Cover } from './components/Cover/Cover';
import { Creator } from './components/Creator/Creator';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Join from './components/Join/Join';
import { Marketplace } from './components/Marketplace/Marketplace';
import { Supplier } from './components/Supplier/Supplier';

function App() {
  return (
    <>
      <Header/>
      <Cover/>
      <Supplier/>
      <Marketplace/>
      <Creator/>
      <Author/>
      <Join/>
      <Footer/>
    </>
  );
}

export default App;
