require("dotenv").config();

const { DirectSecp256k1Wallet } = require("@cosmjs/proto-signing");
const { fromHex } = require("@cosmjs/encoding");
const { SigningCosmWasmClient } = require("@cosmjs/cosmwasm-stargate");
const { GasPrice } = require("@cosmjs/stargate");

const RPC = "https://testnet-rpc.zigchain.com";
const CONTRACT = "zig15jqg0hmp9n06q0as7uk3x9xkwr9k3r7yh4ww2uc0hek8zlryrgmsamk4qg";

const REPEAT = 100;
const DELAY_MS = 3000;

const SWAP_AMOUNT = "10000";
const LIQ_AMOUNT1 = "10000";
const LIQ_AMOUNT2 = "6942";
const LIQ_DENOM1 = "coin.zig10rfjm85jmzfhravjwpq3hcdz8ngxg7lxd0drkr.uoro";
const LIQ_DENOM2 = "uzig";

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runForWallet(pkHex, walletIndex) {
  try {
    const wallet = await DirectSecp256k1Wallet.fromKey(fromHex(pkHex), "zig");
    const [account] = await wallet.getAccounts();
    const sender = account.address;

    const gasPrice = GasPrice.fromString("0.025uzig");
    const client = await SigningCosmWasmClient.connectWithSigner(RPC, wallet, { gasPrice });

    console.log(`🚀 Wallet ${walletIndex} (${sender}) mulai proses`);

    for (let i = 1; i <= REPEAT; i++) {
      // === 1. SWAP ===
      const swapMsg = {
        swap: {
          max_spread: "0.02",
          offer_asset: {
            amount: SWAP_AMOUNT,
            info: {
              native_token: {
                denom: "uzig",
              },
            },
          },
        },
      };

      const swapFunds = [{ denom: "uzig", amount: SWAP_AMOUNT }];

      try {
        const swapResult = await client.execute(
          sender,
          CONTRACT,
          swapMsg,
          "auto",
          `Swap ${i}`,
          swapFunds
        );
        console.log(`✅ [Wallet ${walletIndex}] Swap ${i}/100 sukses: ${swapResult.transactionHash}`);
      } catch (err) {
        console.error(`❌ [Wallet ${walletIndex}] Swap ${i}/100 gagal:`, err.message || err);
      }

      await delay(DELAY_MS);

      // === 2. ADD LIQUIDITY ===
      const liqMsg = {
        provide_liquidity: {
          assets: [
            {
              amount: LIQ_AMOUNT1,
              info: {
                native_token: {
                  denom: LIQ_DENOM1,
                },
              },
            },
            {
              amount: LIQ_AMOUNT2,
              info: {
                native_token: {
                  denom: LIQ_DENOM2,
                },
              },
            },
          ],
          slippage_tolerance: "0.5",
        },
      };

      const liqFunds = [
        { denom: LIQ_DENOM1, amount: LIQ_AMOUNT1 },
        { denom: LIQ_DENOM2, amount: LIQ_AMOUNT2 },
      ];

      try {
        const liqResult = await client.execute(
          sender,
          CONTRACT,
          liqMsg,
          "auto",
          `Liquidity ${i}`,
          liqFunds
        );
        console.log(`💧 [Wallet ${walletIndex}] Add Liquidity ${i}/100 sukses: ${liqResult.transactionHash}`);
      } catch (err) {
        console.error(`❌ [Wallet ${walletIndex}] Add Liquidity ${i}/100 gagal:`, err.message || err);
      }

      await delay(DELAY_MS);
    }

    console.log(`🎉 Wallet ${walletIndex} selesai semua!`);
  } catch (err) {
    console.error(`❌ Wallet ${walletIndex} error:`, err.message || err);
  }
}

async function main() {
  const keys = process.env.PRIVATE_KEYS?.split(",") || [];
  if (keys.length === 0) {
    console.error("❌ PRIVATE_KEYS belum diatur di file .env");
    return;
  }

  for (let i = 0; i < keys.length; i++) {
    await runForWallet(keys[i], i + 1);
  }
}

main();
