import { useState } from "react";
import "./App.css";
import Item from "./component/Item";
import Cart from "./component/Cart";

import { ItemContext } from "./context/ItemContext";

function App() {
  const [itemCount, setItemCount] = useState({});

  return (
    <>
      {/* wrap ItemContext around components that need to access them */}
      <ItemContext.Provider value={{ itemCount, setItemCount }}>
        <div className="cart">
          <Cart id="cart1"></Cart>
        </div>
        <div className="itemHolder">
          <Item className="item" id="item1">
            Item 1
          </Item>
          <Item className="item" id="item2">
            Item 2
          </Item>
          <Item className="item" id="item3">
            Item 3
          </Item>
          <Item className="item" id="item4">
            Item 4
          </Item>
        </div>
      </ItemContext.Provider>
    </>
  );
}

export default App;
