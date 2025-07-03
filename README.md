# 🔁 ZigChain Auto Swap + Add Liquidity Bot (Multi-Wallet)

Bot ini menjalankan auto swap dan auto add liquidity di jaringan ZigChain Testnet secara otomatis.  
Support banyak wallet (multi-wallet) via .env, berjalan 100x per wallet dengan jeda aman antar transaksi.

---

## 🔧 Fitur Utama

- ✅ Auto Swap native token uzig
- 💧 Auto Tambah Likuiditas (uzig + token lain)
- 👥 Multi-wallet dari .env
- 🔁 100x transaksi per wallet
- ⏱️ Delay 3 detik setiap transaksi
- ⚠️ Aman dari spread error (tanpa belief_price)
- 🛠️ Mudah dikustom

---

## 📦 Install Dependency

```bash
npm install @cosmjs/proto-signing @cosmjs/encoding @cosmjs/cosmwasm-stargate @cosmjs/stargate dotenv

📝 Setup .env
Buat file .env di root project, isi seperti ini:

PRIVATE_KEYS=pk_hex1,pk_hex2,pk_hex3
Contoh:

PRIVATE_KEYS=2bc1271d566fecc92338aaa...,9ff2c13e6adbbb...,aabbccdd123456...
⚠️ Jangan pakai 0x di depan, pisahkan dengan koma tanpa spasi

🚀 Cara Jalankan

node index.js
