# ZigChain Auto Swap + Add Liquidity Bot (Multi-Wallet)

Bot ini melakukan auto swap dan auto add liquidity di jaringan ZigChain Testnet.  
Mendukung multi-wallet, 100x transaksi per wallet, dan jeda aman antar transaksi.

---

## 🔧 Fitur
- ✅ Auto swap native token (uzig)
- 💧 Auto add liquidity dengan 2 token native
- 👥 Multi-wallet dari file .env
- 🔁 100x swap & liquidity per wallet
- ⏱️ Jeda 3 detik antar transaksi (untuk menghindari nonce error)
- ⚠️ Tanpa belief_price untuk menghindari spread error

---

## 📦 Install Dependencies

`bash
npm install @cosmjs/proto-signing @cosmjs/encoding @cosmjs/cosmwasm-stargate @cosmjs/stargate dotenv
