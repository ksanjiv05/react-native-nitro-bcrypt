#pragma once
#include <vector>
#include "HybridReactNativeNitroBcryptSpec.hpp"

namespace margelo::nitro::reactnativenitrobcrypt {
class HybridReactNativeNitroBcrypt : public HybridReactNativeNitroBcryptSpec {
    public:
        HybridReactNativeNitroBcrypt() : HybridObject(TAG), HybridReactNativeNitroBcryptSpec() {}
       
        std::string generateHash(const std::string& password, std::optional<double> cost) override;
        bool validatePassword(const std::string& password, const std::string& hash) override;
    };
} // namespace margelo::nitro::reactnativenitrobcrypt
