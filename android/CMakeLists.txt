project(ReactNativeNitroBcrypt)
cmake_minimum_required(VERSION 3.9.0)

set (PACKAGE_NAME ReactNativeNitroBcrypt)
set (CMAKE_VERBOSE_MAKEFILE ON)
set (CMAKE_CXX_STANDARD 20)

# Enable Raw Props parsing in react-native (for Nitro Views)
add_compile_options(-DRN_SERIALIZABLE_STATE=1)

# Define C++ library and add all sources
add_library(${PACKAGE_NAME} SHARED 
	src/main/cpp/cpp-adapter.cpp
        ../cpp/external/Bcrypt.cpp/src/bcrypt.cpp
        ../cpp/external/Bcrypt.cpp/src/blowfish.cpp
	../cpp/HybridReactNativeNitroBcrypt.cpp
	../cpp/HybridReactNativeNitroBcrypt.hpp
        
)

# Add Nitrogen specs :)
include(${CMAKE_SOURCE_DIR}/../nitrogen/generated/android/ReactNativeNitroBcrypt+autolinking.cmake)

# Set up local includes
include_directories(
        "src/main/cpp"
        "../cpp/external/Bcrypt.cpp/include"
        "../cpp"
)

find_library(LOG_LIB log)

# Link all libraries together
target_link_libraries(
        ${PACKAGE_NAME}
        ${LOG_LIB}
        android                                   # <-- Android core
)
