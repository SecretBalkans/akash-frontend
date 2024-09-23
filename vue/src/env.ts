const apiURLSecret =
  import.meta.env.VITE_SECRET_API ??
  "https://secretnetwork-api.lavenderfive.com:443"// "https://secretnetwork-api.lavenderfive.com:443"; //"http://localhost:1317";
const rpcURLSecret =
  import.meta.env.VITE_SECRET_RPC ??
  "https://secretnetwork-rpc.lavenderfive.com:443"; //"http://localhost:26657";
const prefixSecret = import.meta.env.VITE_ADDRESS_PREFIX ?? "secret";

const apiURLOsmosis =
  import.meta.env.VITE_OSMOSIS_API ?? "https://osmosis-api.polkachu.com"; //"http://localhost:1317";
const rpcURLOsmosis =
  import.meta.env.VITE_OSMOSIS_RPC ?? "https://rpc-osmosis.ecostake.com"//"https://rpc-osmosis-ia.cosmosia.notional.ventures"; //"http://localhost:26657";
const prefixOsmosis = import.meta.env.VITE_ADDRESS_PREFIX ?? "osmo";

export const SECRET_RPC_KEY = "secretRpc"
export const SECRET_API_KEY = "secretApi"
export const OSMOSIS_RPC_KEY = "osmosisRpc"
export const OSMOSIS_API_KEY = "osmosisApi"

const secretRPC = localStorage.getItem(SECRET_RPC_KEY)
const secretAPI = localStorage.getItem(SECRET_API_KEY)
const osmosisRPC = localStorage.getItem(OSMOSIS_RPC_KEY)
const osmosisAPI = localStorage.getItem(OSMOSIS_API_KEY)

console.log("Secret RPC: ", secretRPC)
console.log("Secret API: ", secretAPI)
console.log("Osmosis RPC: ", secretRPC)
console.log("Osmosis API: ", osmosisAPI)

export const envSecret = {
  apiURL: secretAPI ? JSON.parse(secretAPI)._rawValue : apiURLSecret,
  rpcURL: secretRPC ? JSON.parse(secretRPC)._rawValue : rpcURLSecret,
  prefix: prefixSecret,
  chainId: "secret-4",
};

export const envOsmosis = {
  apiURL: osmosisAPI ? JSON.parse(osmosisAPI)._rawValue : apiURLOsmosis,
  rpcURL: osmosisRPC ? JSON.parse(osmosisRPC)._rawValue : rpcURLOsmosis,
  prefix: prefixOsmosis,
  chainId: "osmosis-1",
};

console.log("EnvSecret: ", envSecret)
console.log("EnvOsmosis: ", envOsmosis)
