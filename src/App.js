import './App.css';
import { Cover } from './components/Cover/Cover';
import Header from './components/Header/Header';
import { Marketplace } from './components/Marketplace/Marketplace';
import { Supplier } from './components/Supplier/Supplier';

function App() {
  return (
    <>
      <Header/>
      <Cover/>
      <Supplier/>
      <Marketplace/>
    </>
  );
}

export default App;
