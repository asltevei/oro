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
npm install @cosmjs/proto-signing @cosmjs/encoding @cosmjs/cosmwasm-stargate @cosmjs/stargate dotenv```
