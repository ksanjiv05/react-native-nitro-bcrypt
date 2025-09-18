import { type HybridObject } from 'react-native-nitro-modules'

export interface ReactNativeNitroBcrypt extends HybridObject<{ ios: 'c++', android: 'c++' }> {
  generateHash(password: string, cost?: number): string
  validatePassword(password: string, hash: string): boolean
}