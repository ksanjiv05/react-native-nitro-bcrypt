# 🔐 React Native Nitro Bcrypt

`react-native-nitro-bcrypt` is a **super-fast, native password hashing library** for React Native, powered by [Nitro Modules](https://github.com/mrousavy/nitro).
It wraps the **OpenBSD bcrypt algorithm** (via [Bcrypt.cpp](https://github.com/hilch/Bcrypt.cpp)) and exposes it to JS/TS with minimal overhead.

✅ Works on **Android** and **iOS**
✅ Written in **C++** with Nitro for near-native performance
✅ Drop-in alternative to `bcrypt` for React Native apps

---

## 📦 Installation

```sh
# npm
npm install react-native-nitro-bcrypt

# or yarn
yarn add react-native-nitro-bcrypt
```

Then install pods for iOS:

```sh
cd ios
npx pod-install
```

---

## ⚡️ Requirements

- React Native **0.72+** (tested with 0.81.1)
- Nitro Modules set up in your app ([docs](https://mrousavy.com/nitro))
- iOS 13+ / Android 24+

---

## 🚀 Usage

```ts
import { ReactNativeNitroBcrypt } from 'react-native-react-native-nitro-bcrypt'

async function run() {
  // Generate hash with default cost (12)
  const hash = ReactNativeNitroBcrypt.generateHash('super-secret-password')
  console.log('Hash:', hash)

  // Generate hash with custom cost (e.g. 14)
  const strongHash = ReactNativeNitroBcrypt.generateHash(
    'super-secret-password',
    14
  )

  // Validate password
  const isValid = ReactNativeNitroBcrypt.validatePassword(
    'super-secret-password',
    hash
  )
  console.log('Password valid?', isValid)
}

run()
```

---

## 🛠 API

### `generateHash(password: string, cost?: number | null): Promise<string>`

Hashes a password using bcrypt.

- `password`: the plaintext password.
- `cost`: optional number (default = `12`). Higher cost = more secure but slower.

Example:

```ts
const hash = Bcrypt.generateHash('mypassword')
const hash2 = Bcrypt.generateHash('mypassword', 14)
```

---

### `validatePassword(password: string, hash: string): Promise<boolean>`

Checks if the provided password matches the given bcrypt hash.

```ts
const isValid = Bcrypt.validatePassword('mypassword', hash)
```

---

## ⚙️ Platform Notes

- **Android**: Uses CMake to compile bcrypt C++ sources.
- **iOS**: Linked via CocoaPods. Make sure to run `npx pod-install`.

---

## 📖 Example App

See the [`example/`](./example) folder for a working React Native app using this module.

Run locally:

```sh
cd example
yarn install
npx pod-install
yarn ios   # or yarn android
```

---

## 📜 License

MIT © 2025 — \[Your Name]

---

👉 Do you also want me to add **badges** (npm version, build status, downloads) and a **TypeScript declaration snippet** at the top of the README? That’ll make it look more like a professional open-source package.
