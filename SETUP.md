# 📚 Panduan Setup & Installation

Panduan lengkap untuk setup dan menjalankan aplikasi UNIKU Academic.

## 🔧 Persyaratan Sistem

### Windows
- Windows 7 atau lebih baru
- Node.js v14+ ([Download di nodejs.org](https://nodejs.org))
- npm (disertakan dengan Node.js)
- Android Studio (untuk testing Android)
- atau Expo Go App (lebih mudah untuk testing awal)

### macOS
- macOS 10.12 atau lebih baru
- Node.js v14+
- npm atau yarn
- Xcode (untuk iOS)
- Xcode Command Line Tools

### Linux
- Node.js v14+
- npm atau yarn
- Android Studio

## ⚡ Quick Start (Rekomendasi)

### 1. Install Node.js

**Windows:**
1. Kunjungi [nodejs.org](https://nodejs.org)
2. Download LTS version
3. Jalankan installer dan ikuti panduan
4. Buka PowerShell/Command Prompt baru dan verifikasi:
```powershell
node --version
npm --version
```

**macOS/Linux:**
```bash
# Gunakan homebrew (macOS)
brew install node

# Atau gunakan nvm (Node Version Manager) - recommended
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 18
```

### 2. Clone/Buka Project

```bash
cd c:\pemrograman-mobile
# atau sesuai lokasi Anda
```

### 3. Install Dependencies

```bash
npm install
```

Ini akan menginstall semua package yang diperlukan (React, React Native, Expo, dll).

### 4. Jalankan Aplikasi

**Opsi A: Menggunakan Expo Go (Paling Mudah)**

```bash
npm start
# atau
expo start
```

Scan QR code yang muncul dengan:
- **Android**: Gunakan Expo Go App (download dari Google Play Store)
- **iOS**: Gunakan Camera app atau Expo Go App (download dari App Store)

**Opsi B: Android Emulator**

Pastikan Android Studio sudah terinstall, kemudian:
```bash
npm run android
```

**Opsi C: Web Browser (Preview)**

```bash
npm run web
```

Aplikasi akan terbuka di http://localhost:19006

## 📝 Mengedit File

Project ini dapat diedit dengan:
- **Visual Studio Code** (rekomendasi)
- **WebStorm**
- **Sublime Text**
- Editor teks lainnya

### Struktur Folder:

```
pemrograman-mobile/
├── src/
│   ├── components/        # Komponen reusable
│   │   └── LoginForm.js   # Form login component
│   ├── screens/           # Screen/Page
│   │   └── LoginScreen.js # Screen login
│   └── styles/            # Theme dan styling global
│       └── theme.js       # Warna, font, spacing
├── App.js                 # Entry point aplikasi
├── app.json               # Konfigurasi Expo
└── package.json           # Dependencies & scripts
```

## 🎨 Mengubah Tampilan

### Mengubah Warna

File: `src/styles/theme.js`

```javascript
export const COLORS = {
  primary: '#0066cc',      // Ubah warna tombol login
  background: '#f5f5f5',   // Ubah warna background
  // ... warna lainnya
};
```

### Mengubah Font Size

File: `src/styles/theme.js`

```javascript
export const FONT_SIZES = {
  large: 24,  // Ubah ukuran judul
  // ... ukuran lainnya
};
```

### Mengubah Styling Form

File: `src/components/LoginForm.js`

Edit bagian `StyleSheet.create()` di bawah component untuk mengubah tampilan.

## 🔌 Koneksi API Backend

Untuk menghubungkan dengan server, buka `src/components/LoginForm.js` dan cari fungsi `handleLogin`:

```javascript
const handleLogin = async () => {
  // ... validasi ...
  
  try {
    // Ganti bagian ini dengan API call yang sebenarnya
    const response = await fetch('https://api.uniku.ac.id/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await response.json();
    
    if (data.success) {
      onLogin({
        email: email,
        token: data.token,
      });
    } else {
      Alert.alert('Error', data.message);
    }
  } catch (error) {
    Alert.alert('Error', 'Gagal terhubung ke server');
  }
};
```

## 📦 Package Dependencies

Saat ini project menggunakan:
- `expo` - Framework untuk React Native
- `react` - Core library
- `react-native` - Framework mobile

Untuk menambah package baru:
```bash
npm install package-name
# atau
expo install package-name  # Untuk package yang kompatibel dengan Expo
```

## 🐛 Troubleshooting

### Error: "node: command not found"
- Node.js belum terinstall atau belum di-restart setelah install
- Solusi: Install Node.js dan restart terminal

### Error: "Cannot find module"
- Ada package yang belum terinstall
- Solusi: Jalankan `npm install`

### Aplikasi tidak muncul setelah scan QR
- Expo Go App tidak terinstall
- Koneksi internet bermasalah
- Solusi: Install Expo Go dari app store dan pastikan internet stabil

### Hot Reload tidak berfungsi
- Fitur ini biasanya aktif otomatis
- Jika tidak, tekan `r` di terminal saat running `expo start`

## 📚 Resource Tambahan

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Expo Documentation](https://docs.expo.dev)
- [React Documentation](https://react.dev)

## ✅ Checklist Setup Selesai

- [ ] Node.js terinstall (`node --version` menunjukkan versi)
- [ ] npm berfungsi (`npm --version` menunjukkan versi)
- [ ] Folder project sudah dibuka di VS Code atau editor
- [ ] Jalankan `npm install` berhasil
- [ ] `npm start` berfungsi dan menampilkan QR code
- [ ] Aplikasi bisa diakses melalui Expo Go atau emulator

---

Jika ada masalah, periksa [troubleshooting section](#-troubleshooting) atau konsultasikan dokumentasi Expo.
