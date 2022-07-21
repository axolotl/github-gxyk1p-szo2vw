import React, { Suspense, useEffect, useState } from "react";
const App2 = React.lazy(() => import("app2/App"));
const App3 = React.lazy(() => import("app3/App"));
const App4 = React.lazy(() => import("app4/App"));

const App = () => {
  const [count, setCount] = useState(0);

  let subscription;

  useEffect(() => {
    (async () => {
      const { app2 } = await import("./EventBus");
      const { getObservable } = await app2.counts;

      subscription = getObservable().subscribe(() => {
        setCount((prevCount) => {
          return prevCount + 1;
        });
      });
    })();

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        margin: "auto",
        alignItems: "center",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        MFE - RXJS POC
      </h1>
      <p>Total Clicks: {count}</p>
      <Suspense fallback={"loading..."}>
        <App2 />
        <div style={{ display: "flex" }}>
          <App3 />
          <App4 />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
