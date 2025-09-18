#include <jni.h>
#include "ReactNativeNitroBcryptOnLoad.hpp"

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void*) {
  return margelo::nitro::reactnativenitrobcrypt::initialize(vm);
}
