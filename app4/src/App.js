import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(99);

  let subscription;

  useEffect(() => {
    (async () => {
      const { app2 } = await import("app1/EventBus");
      const { getObservable } = await app2.counts;

      subscription = getObservable().subscribe((modifyCount) => {
        setCount((prevCount) => {
          return prevCount + modifyCount * 2;
        });
      });
    })();

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div>
      <div
        style={{
          margin: "10px",
          padding: "10px",
          textAlign: "center",
          fontSize: "2rem",
        }}
      >
        <h3>
          <small>-/+</small> 2
        </h3>
        {count} 💚
      </div>
    </div>
  );
};

export default App;
