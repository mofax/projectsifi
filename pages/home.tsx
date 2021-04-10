import Head from "next/head";
import useIDB from "../react-hooks/useIDB";
import Button from "../components/Button/Button";
import { APP_NAME, initHubApi } from "../tools/nimiq";

export default function Home() {
  const db = useIDB();

  if (!db) {
    return <div></div>;
  }

  const chooseAddress = async () => {
    const hubApi = initHubApi();
    const result = await hubApi.chooseAddress({ appName: APP_NAME });
    const dbtx = db
      .transaction("addresses", "readwrite")
      .objectStore("addresses");

    dbtx.add(result);
    console.log(result);
  };

  return (
    <>
      <Head>
        <title>Project Sifi</title>
      </Head>
      <div>
        <div>
          We use the nimiq blockchain to verify transactions, please choose an
          address to continue
        </div>
        <Button onClick={chooseAddress}>Choose Address</Button>
      </div>
    </>
  );
}
