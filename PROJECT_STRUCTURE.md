# 🗂️ Project Structure Guide

Panduan lengkap struktur folder dan file dalam project UNIKU Academic.

## 📁 Struktur Folder

```
pemrograman-mobile/
│
├── 📁 src/                           # Source code aplikasi
│   │
│   ├── 📁 components/                # Komponen reusable
│   │   └── LoginForm.js              # Form login component
│   │
│   ├── 📁 screens/                   # Pages/Screens
│   │   └── LoginScreen.js            # Screen untuk halaman login
│   │
│   ├── 📁 services/                  # API & external services
│   │   └── api.js                    # API client dan authentication service
│   │
│   └── 📁 styles/                    # Styling & theme
│       └── theme.js                  # Color, font, spacing constants
│
├── App.js                             # Main entry point aplikasi
├── app.json                           # Konfigurasi Expo
├── package.json                       # Dependencies & npm scripts
├── .babelrc                           # Babel configuration
├── .gitignore                         # Git ignore rules
├── .gitattributes                     # Git attributes
│
├── README.md                          # Dokumentasi utama
├── SETUP.md                           # Panduan setup & installation
└── PROJECT_STRUCTURE.md               # File ini
```

## 📄 Penjelasan File Utama

### `App.js` - Main Entry Point
File utama yang dijalankan pertama kali. Memuat semua komponen dan setup dasar aplikasi.

```javascript
// Struktur dasar:
// - Impor StatusBar dan LoginScreen
// - Render LoginScreen sebagai komponen utama
```

### `src/components/LoginForm.js` - Login Form Component
Komponen form login yang dapat digunakan di berbagai screen. Fitur:
- Input email/username
- Input password (secure)
- Tombol login
- Validasi input
- Error handling
- Loading state

### `src/screens/LoginScreen.js` - Login Screen
Screen/page yang menampilkan LoginForm. Bisa menambahkan:
- Additional UI elements
- Navigation logic
- State management

### `src/styles/theme.js` - Theme & Styling Constants
File pusat untuk semua styling constants:
- COLORS: Palet warna aplikasi
- FONT_SIZES: Ukuran font standar
- FONT_WEIGHTS: Bobot font
- SPACING: Jarak/padding standar
- BORDER_RADIUS: Radius border standar
- SHADOWS: Shadow effects

Keuntungan menggunakan theme file:
- Konsistensi styling di seluruh aplikasi
- Mudah mengubah tema warna global
- Maintainability lebih baik

### `src/services/api.js` - API Services
Berisi utility untuk komunikasi dengan backend:
- `apiClient`: HTTP client dengan method GET, POST, PUT, DELETE
- `authService`: Authentication related API calls
- `userService`: User profile related API calls

Contoh penggunaan:
```javascript
import { authService } from './src/services/api';

const handleLogin = async (email, password) => {
  const response = await authService.login(email, password);
  // Handle response...
};
```

## 🔄 Data Flow

```
App.js
  └─→ LoginScreen
       └─→ LoginForm
            ├─→ Input: Email/Username
            ├─→ Input: Password
            └─→ Button: Login
                 └─→ handleLogin()
                      └─→ Validasi input
                           └─→ API call (authService.login)
                                └─→ onLogin callback
                                     └─→ Update LoginScreen state
```

## 🎯 Component Communication

### LoginForm → LoginScreen
Form mengirim data melalui callback `onLogin`:
```javascript
<LoginForm onLogin={handleLogin} />

const handleLogin = (userInfo) => {
  // userInfo = { email, token }
  setUserData(userInfo);
  setIsLoggedIn(true);
};
```

### Theme Constants Usage
Gunakan di mana pun Anda butuh styling:
```javascript
import { COLORS, FONT_SIZES, SPACING } from '../styles/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    padding: SPACING.lg,
    fontSize: FONT_SIZES.large,
  },
});
```

## 🔌 Integrasi API

### Step 1: Update API Base URL
File: `src/services/api.js`
```javascript
const API_BASE_URL = 'https://your-backend.com/api/v1';
```

### Step 2: Gunakan authService di LoginForm
```javascript
import { authService } from '../services/api';

const handleLogin = async () => {
  try {
    const response = await authService.login(email, password);
    onLogin(response);
  } catch (error) {
    Alert.alert('Error', error.message);
  }
};
```

## 📦 Dependencies

Lihat `package.json` untuk list lengkap dependencies:

```json
{
  "dependencies": {
    "expo": "^50.0.0",
    "react": "^18.2.0",
    "react-native": "^0.73.0"
  }
}
```

## 🚀 Menambah Feature Baru

### Menambah Screen Baru

1. Buat file baru di `src/screens/`:
```javascript
// src/screens/HomeScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
```

2. Import di `App.js` dan render conditional berdasarkan login state

### Menambah Komponen Baru

1. Buat file baru di `src/components/`:
```javascript
// src/components/CustomButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ text, onPress, ...props }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} {...props}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
```

2. Import dan gunakan di component lain

### Menambah API Service

Edit `src/services/api.js` dan tambahkan service baru:
```javascript
export const courseService = {
  async getCourses(token) {
    return apiClient.get('/courses', {
      Authorization: `Bearer ${token}`,
    });
  },
};
```

## 🎨 Styling Tips

### Menggunakan Theme
```javascript
import { COLORS, SPACING, FONT_SIZES } from '../styles/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: SPACING.lg,
    backgroundColor: COLORS.background,
  },
  text: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.darkGray,
  },
});
```

### Responsive Design
```javascript
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,  // 90% dari screen width
    height: height * 0.5, // 50% dari screen height
  },
});
```

## 🐛 Debugging Tips

1. **Console logs**:
   ```javascript
   console.log('Debug:', variable);
   ```

2. **React Native Debugger**: Install dari https://github.com/jhen0409/react-native-debugger

3. **Expo Dev Tools**: Tekan `d` di terminal saat `expo start`

## 📋 Checklist Development

- [ ] Setup project selesai
- [ ] Mengerti struktur folder
- [ ] Bisa menjalankan aplikasi
- [ ] Bisa memodifikasi styling via theme.js
- [ ] Bisa menambah komponen baru
- [ ] Bisa koneksi dengan API

---

Untuk pertanyaan lebih lanjut, lihat README.md atau SETUP.md
