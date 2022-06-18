import React from "react";
import "./hojas-de-estilo/style.css";


//Components
import NavBar from "./components/NavBar/NavBar";
import ItemCounter from "./components/Items/ItemCounter";
import ItemList from "./components/Items/ItemList";

const App = () => {
  return (
    <div>
      <NavBar />
      <div>
        <div>
          <div className = "container">
            <ItemList/>
          </div>

          <div>
            <ItemCounter
              stock={10}
              initial={1}
              onAdd={(cantidadDeProductos) =>
                console.log(`cantidadDeProductos: ${cantidadDeProductos}`)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
