require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty bottom system blame develop remember clump grace opera flower general'; 
let testAccounts = [
"0xea24ecd0b26d4d9f460f30592c87b7ed0b8d92cf98e89c81d3bcba595ad7dd65",
"0x10b5c6b84f66280261221418e9cfa534870a396b41da9c4bfd3b8bb79a10d694",
"0x6e6897d3340de27460340c5f6fd3d830ee5bcd2532fb1a426e8c198d805f8a3a",
"0x6a00107c8e1aa7f2f0c6ae49174f2906bd0597c09ee2767131490e5565ed2991",
"0x4320b069ae89881151a38d3547c0737dd1bbe36ab65e2fc7f3945997c446309f",
"0x78bf27aca8e4f3a63eb5d69ecc2b63ec0827df44d0b2925dcfde4c7e2fc9c643",
"0xbbe3b7167417415b8ea98f9bd4ec9c600b8fabd3a93a7ea3eb5a86a62547ac9b",
"0x5512c142bb8495c49d5a4568552651aad900ac598f28350618624b67a83d7494",
"0xb7c31ab14bd82866e57270568268edfcfc02d53b958c3b3a5b99bb94c6a46647",
"0x49b292c23698b74d42aa671a3c2d6343751cea28464c83a845aacfb39b0b8fc1"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

