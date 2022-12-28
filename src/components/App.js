import { ItemListContainer } from "./ItemListContainer";
import NavBar from "./NavBar";

function App() {
  return (
    <>
    <header>
      <h1 className="titulo">CompuComponentes</h1>
      <NavBar/>
    </header>
    <ItemListContainer saludo = "hola"/>
    </>
  )
}

export default App;

