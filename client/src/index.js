import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { evmWallets } from "@particle-network/connect";
import { ModalProvider } from "@particle-network/connect-react-ui";
import {
  Polygon,
  Ethereum,
  EthereumGoerli,
} from "@particle-network/common";
import { WalletEntryPosition } from "@particle-network/auth";

ReactDOM.render(
  <BrowserRouter>
    <ModalProvider
      walletSort={["Particle Auth", "Wallet"]}
      particleAuthSort={[
        "email",
        "phone",
        "google",
        "apple",
        "twitter",
        "linkedin",
        "github",
        "discord",
      ]}
      options={{
        projectId: "d5aebb5a-3367-49ec-842f-b102dec2b7f3",
        clientKey: "cCmbnz7bvheoleVhfG5VjIIz8ndL9SAoL55FQtEM",
        appId: "ecfe4138-15a4-42cb-bb6f-c4ed753496d3",
        chains: [Polygon, Ethereum, EthereumGoerli],
        particleWalletEntry: {
          displayWalletEntry: true,
          defaultWalletEntryPosition: WalletEntryPosition.BR,
          supportChains: [Ethereum, EthereumGoerli],
        },
        wallets: [...evmWallets({ qrcode: false })],
      }}
      language="en"
      theme={"light"}
    >
      <App />
    </ModalProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
