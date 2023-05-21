import Nav from './components/NavItems/Nav';
import Body from './components/BodyItems/Body';
import { DataProvider } from './context/DataContext';
import './App.css';

function App() {
  return (
    <>
      <DataProvider>
        <Nav />
        <Body />
      </DataProvider>
    </>
  );
}

export default App;
