import { useState } from "react";

import "./App.css";
import Gridlights from "./components/gridlights";

function App() {
  const [order, setOrder] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);
  const config = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ];

  const deActivateCells = () => {
    setIsDeactivating(true);
    const timer = setInterval(() => {
      setOrder((origOrder) => {
        const newOrder = origOrder.slice();
        newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivating(false);
        }

        return newOrder;
      });
    }, 500);
  };
  const activateCells = (index) => {
    const newOrder = [...order, index];
    setOrder(newOrder);

    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      deActivateCells();
    }
  };
  return (
    <>
      <div className="gridlight">
        <h1 style={{ backgroundColor: "yellow" }}>Gridlight</h1>
        <div
          className="grid"
          style={{
            gridTemplateColumns: `repeat(${config[0].length},1fr

        )`,
          }}
        >
          {config.flat(1).map((value, index) => {
            return value ? (
              <Gridlights
                key={index}
                label={`Gridlights ${index}`}
                onClick={() => activateCells(index)}
                filled={order.includes(index)}
                isDisabled={order.includes(index) || isDeactivating}
              />
            ) : (
              <span />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
