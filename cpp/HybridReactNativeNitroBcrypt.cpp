#include "HybridReactNativeNitroBcrypt.hpp"
#include "bcrypt.h"

namespace margelo::nitro::reactnativenitrobcrypt {

std::string HybridReactNativeNitroBcrypt::generateHash(const std::string& password, std::optional<double> cost) {
    unsigned int rounds = cost.has_value() ? static_cast<unsigned int>(*cost) : 12;
    std::string hash = bcrypt::generateHash(password,rounds);
    return hash;
}


bool HybridReactNativeNitroBcrypt::validatePassword(const std::string& password, const std::string& hash) {
    return bcrypt::validatePassword(password,hash);
}

} // namespace margelo::nitro::reactnativenitrobcrypt
