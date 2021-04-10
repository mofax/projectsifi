import { IDBPDatabase } from "idb";
import { useEffect, useState } from "react";
import { getDB } from "../tools/idb";

function useIDB() {
  const [db, setDB] = useState<IDBPDatabase>();

  useEffect(() => {
    async function loadDB() {
      setDB(await getDB());
    }

    loadDB();
  }, []);

  return db ? db : null;
}

export default useIDB;
