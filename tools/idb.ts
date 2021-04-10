import { openDB } from "idb";

async function getDB() {
  const db = await openDB("data-db", 1, {
    upgrade(db, oldVersion, newVersion) {
      console.log("upgrade", db.name, oldVersion, newVersion);
      db.createObjectStore("addresses", { keyPath: "address" });
    },
    blocked() {
      // …
    },
    blocking() {
      // …
    },
    terminated() {
      // …
    },
  });

  return db;
}

export { getDB };
