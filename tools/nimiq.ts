import HubApi from "@nimiq/hub-api";

const APP_NAME = "CryptoDID";

function initHubApi() {
  return new HubApi("https://hub.nimiq-testnet.com");
}

export { initHubApi, APP_NAME };
