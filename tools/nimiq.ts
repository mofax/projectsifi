import HubApi from "@nimiq/hub-api";

function initHubApi() {
  return new HubApi("https://hub.nimiq-testnet.com");
}

export { initHubApi };
