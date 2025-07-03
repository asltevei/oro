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

```bash
npm install @cosmjs/proto-signing @cosmjs/encoding @cosmjs/cosmwasm-stargate @cosmjs/stargate dotenv```

📝 Setup .env
Buat file .env di root project, isi seperti ini:

ini
```bash
PRIVATE_KEYS=pk_hex1,pk_hex2,pk_hex3```
Contoh:

ini
```bash
PRIVATE_KEYS=2bc1271d566fecc92338aaa...,9ff2c13e6adbbb...,aabbccdd123456...
⚠️ Jangan pakai 0x di depan, pisahkan dengan koma tanpa spasi

---

🚀 Cara Jalankan
```bash
node multi-swap-addliq.js
