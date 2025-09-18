import { NitroModules } from 'react-native-nitro-modules'
import type { ReactNativeNitroBcrypt as ReactNativeNitroBcryptSpec } from './specs/react-native-nitro-bcrypt.nitro'

export const ReactNativeNitroBcrypt =
  NitroModules.createHybridObject<ReactNativeNitroBcryptSpec>('ReactNativeNitroBcrypt')