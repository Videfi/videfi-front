import "@/styles/globals.css";
import "@/styles/radio.css";
import "@/styles/checkbox.css";
import type { AppProps } from "next/app";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { goerli, polygonMumbai } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

import { PolybaseProvider } from "@polybase/react";
import { Polybase } from "@polybase/client";
import { NAMESPACE_DEFAULT } from "@/lib/polybase/db.polybase";

const { chains, publicClient } = configureChains(
  [goerli, polygonMumbai],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Videfi",
  chains: chains as any,
  projectId: "123",
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

const polybase = new Polybase({ defaultNamespace: NAMESPACE_DEFAULT });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} theme={darkTheme()}>
        <PolybaseProvider polybase={polybase}>
          <Component {...pageProps} />
        </PolybaseProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
