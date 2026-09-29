# UNIKU Academic - Sistem Informasi Akademik

Aplikasi mobile untuk Sistem Informasi Akademik kampus UNIKU dengan tampilan minimalis dan user experience yang optimal.

## 📱 Features

- **Form Login Minimalis**: Interface login yang bersih dan intuitif
- **Validasi Input**: Validasi email dan password yang komprehensif
- **Loading State**: Indikator loading saat proses autentikasi
- **Error Handling**: Pesan error yang informatif untuk membantu pengguna
- **Responsive Design**: Tampilan yang responsif di berbagai ukuran layar

## 🚀 Getting Started

### Prerequisites

- Node.js (versi 14 atau lebih tinggi)
- npm atau yarn
- Expo CLI (optional, untuk development lebih mudah)

### Installation

1. **Buka folder project**
```bash
cd pemrograman-mobile
```

2. **Install dependencies**
```bash
npm install
```

3. **Jalankan aplikasi**

**Untuk Android:**
```bash
npm run android
# atau
expo start --android
```

**Untuk iOS:**
```bash
npm run ios
# atau
expo start --ios
```

**Untuk Web (Preview):**
```bash
npm run web
# atau
expo start --web
```

4. **Development Mode**
```bash
npm start
# atau
expo start
```

Setelah menjalankan `expo start`, Anda bisa menekan:
- `a` untuk membuka di Android emulator
- `i` untuk membuka di iOS simulator
- `w` untuk membuka di web browser

## 📁 Project Structure

```
uniku-academic/
├── src/
│   ├── components/
│   │   └── LoginForm.js          # Komponen form login
│   ├── screens/
│   │   └── LoginScreen.js         # Screen untuk login
│   └── styles/
│       └── (folder untuk custom styles)
├── App.js                         # Main application entry point
├── app.json                       # Expo configuration
├── package.json                   # Project dependencies
└── README.md                      # Dokumentasi project
```

## 🎨 Design Details

### Tampilan Minimalis
- Background color: `#f5f5f5` (abu-abu terang)
- Form background: `#ffffff` (putih)
- Primary color: `#0066cc` (biru)
- Text color: `#1a1a1a` (hitam gelap)

### Komponen Form
1. **Header**
   - Judul: "UNIKU Academic"
   - Subtitle: "Sistem Informasi Akademik"

2. **Input Email/Username**
   - Placeholder: "Masukkan email atau username"
   - Validasi format email
   - AutoCapitalize: off

3. **Input Password**
   - Placeholder: "Masukkan password"
   - Secure text entry (password tersembunyi)

4. **Login Button**
   - Background color: `#0066cc`
   - Loading state dengan teks "Sedang login..."

5. **Forgot Password Link**
   - Link untuk fitur lupa password (ready untuk development lebih lanjut)

## ✅ Validasi

Form melakukan validasi untuk:
- ✓ Email tidak boleh kosong
- ✓ Password tidak boleh kosong
- ✓ Format email yang valid
- ✓ Error handling dengan Alert

## 🔧 Development

### Modifikasi Form

Untuk mengubah styling atau tambah field baru, edit file:
- [src/components/LoginForm.js](src/components/LoginForm.js) - Komponen form
- [src/screens/LoginScreen.js](src/screens/LoginScreen.js) - Screen container

### Koneksi API

Untuk menghubungkan dengan backend, ubah bagian pada `LoginForm.js` di fungsi `handleLogin`:

```javascript
// Ganti simulasi API call dengan actual API:
// const response = await fetch('YOUR_API_ENDPOINT', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({ email, password })
// });
// const data = await response.json();
// onLogin(data);
```

## 📦 Dependencies

- **expo**: Framework React Native
- **react**: Core library
- **react-native**: Mobile development library
- **expo-status-bar**: Status bar component

## 🛠️ Available Scripts

| Script | Deskripsi |
|--------|-----------|
| `npm start` | Memulai development server Expo |
| `npm run android` | Membuka aplikasi di Android emulator |
| `npm run ios` | Membuka aplikasi di iOS simulator |
| `npm run web` | Membuka aplikasi di web browser |

## 📝 License

Proprietary - UNIKU Campus

## 👨‍💻 Author

Created for UNIKU Academic Information System

---

**Note**: Ini adalah starting point untuk aplikasi akademik. Anda perlu mengintegrasikan dengan backend API yang sesuai untuk production use.
