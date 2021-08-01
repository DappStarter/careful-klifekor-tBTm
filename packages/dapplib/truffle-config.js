require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue off smooth fine birth pumpkin minor grid clip swift topic'; 
let testAccounts = [
"0x443d70c9e818bef09212ee78a232dcd6074878d256afd38c2914206bacd7e930",
"0xf12895ef43f660c70bf47562aa0e9c6d91408027d121f41bbd34301b129c195b",
"0xcf54ef933269f15813e1f96fe49a3bf84f9a00767ee09232296163f35045e8ad",
"0x0efb8fa656df21404d5d1d9df2e0d153bf2f2b74aa5d6fb45b484827fa6fea2d",
"0x17ed53f33d0cdfe2b8a4474f23c7180b625fc98836c9ea2a1eeea7638500b0ce",
"0xb887cd83bea5c9a785d789ebf88fcd98aacffa0c2e951aeafb458ec1b93ba564",
"0x5578f28686cb632110053474bfffc2ba6c8a7bcc4eeb178ac6879f4f1863583c",
"0xd51977ca8e1df3b4c6ab47a30e8bc34cdb61dc15d183b5f90ce98c0951815902",
"0x53214cd6b19db7f16b5ddd8c94dba0cda28bee36cf0164bdcff214437f6bbdd3",
"0x3b626ed8851c315575ae7decc6f90d4756b8b301f567583c12c0ecc704706202"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


