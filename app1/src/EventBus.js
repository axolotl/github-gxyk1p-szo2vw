// A registry of all available MFEs that have subjects other MFEs can subscribe to

// app2
const counts = import("app2/Counts");
const app2 = { counts };

// others
const app3 = {};
const app4 = {};

// returns an object of subjects as promises
export { app2, app3, app4 };
