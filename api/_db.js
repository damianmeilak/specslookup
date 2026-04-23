const phones = [
  // SAMSUNG
  { name:'Samsung Galaxy S25 Ultra',brand:'Samsung',year:'2025',display_type:'Dynamic AMOLED 2X',resolution:'1440 x 3120 pixels',screen_size:'6.9"',rear_camera:'200MP + 50MP + 10MP + 50MP',front_camera:'12MP',chipset:'Qualcomm Snapdragon 8 Elite',ram:'12GB',storage:'256GB | 512GB | 1TB',card_slot:'No',os:'Android 15',battery:'5000 mAh',connectivity:'Wi-Fi 7, Bluetooth 5.4, NFC, 5G' },
  { name:'Samsung Galaxy S25+',brand:'Samsung',year:'2025',display_type:'Dynamic AMOLED 2X',resolution:'1440 x 3120 pixels',screen_size:'6.7"',rear_camera:'50MP + 10MP + 12MP',front_camera:'12MP',chipset:'Qualcomm Snapdragon 8 Elite',ram:'12GB',storage:'256GB | 512GB',card_slot:'No',os:'Android 15',battery:'4900 mAh',connectivity:'Wi-Fi 7, Bluetooth 5.4, NFC, 5G' },
  { name:'Samsung Galaxy S25',brand:'Samsung',year:'2025',display_type:'Dynamic AMOLED 2X',resolution:'1080 x 2340 pixels',screen_size:'6.2"',rear_camera:'50MP + 10MP + 12MP',front_camera:'12MP',chipset:'Qualcomm Snapdragon 8 Elite',ram:'12GB',storage:'128GB | 256GB',card_slot:'No',os:'Android 15',battery:'4000 mAh',connectivity:'Wi-Fi 7, Bluetooth 5.4, NFC, 5G' },
  { name:'Samsung Galaxy S24 Ultra',brand:'Samsung',year:'2024',display_type:'Dynamic AMOLED 2X',resolution:'1440 x 3088 pixels',screen_size:'6.8"',rear_camera:'200MP + 50MP + 10MP + 12MP',front_camera:'12MP',chipset:'Qualcomm Snapdragon 8 Gen 3',ram:'12GB',storage:'256GB | 512GB | 1TB',card_slot:'No',os:'Android 14',battery:'5000 mAh',connectivity:'Wi-Fi 7, Bluetooth 5.3, NFC, 5G' },
  { name:'Samsung Galaxy S24+',brand:'Samsung',year:'2024',display_type:'Dynamic AMOLED 2X',resolution:'1440 x 3088 pixels',screen_size:'6.7"',rear_camera:'50MP + 10MP + 12MP',front_camera:'12MP',chipset:'Qualcomm Snapdragon 8 Gen 3',ram:'12GB',storage:'256GB | 512GB',card_slot:'No',os:'Android 14',battery:'4900 mAh',connectivity:'Wi-Fi 7, Bluetooth 5.3, NFC, 5G' },
  { name:'Samsung Galaxy S24',brand:'Samsung',year:'2024',display_type:'Dynamic AMOLED 2X',resolution:'1080 x 2340 pixels',screen_size:'6.2"',rear_camera:'50MP + 10MP + 12MP',front_camera:'12MP',chipset:'Qualcomm Snapdragon 8 Gen 3',ram:'8GB',storage:'128GB | 256GB',card_slot:'No',os:'Android 14',battery:'4000 mAh',connectivity:'Wi-Fi 7, Bluetooth 5.3, NFC, 5G' },
  { name:'Samsung Galaxy A56',brand:'Samsung',year:'2025',display_type:'Super AMOLED',resolution:'1080 x 2340 pixels',screen_size:'6.7"',rear_camera:'50MP + 12MP + 5MP',front_camera:'12MP',chipset:'Exynos 1580',ram:'8GB',storage:'128GB | 256GB',card_slot:'No',os:'Android 15',battery:'5000 mAh',connectivity:'Wi-Fi 6, Bluetooth 5.3, NFC, 5G' },
  { name:'Samsung Galaxy A36',brand:'Samsung',year:'2025',display_type:'Super AMOLED',resolution:'1080 x 2340 pixels',screen_size:'6.7"',rear_camera:'50MP + 8MP + 5MP',front_camera:'12MP',chipset:'Qualcomm SM6475-AB Snapdragon 6s Gen 3',ram:'6GB',storage:'128GB | 256GB',card_slot:'No',os:'Android 15',battery:'5000 mAh',connectivity:'Wi-Fi 6, Bluetooth 5.3, NFC, 5G' },
  { name:'Samsung Galaxy A55',brand:'Samsung',year:'2024',display_type:'Super AMOLED',resolution:'1080 x 2340 pixels',screen_size:'6.6"',rear_camera:'50MP + 12MP + 5MP',front_camera:'32MP',chipset:'Exynos 1480',ram:'8GB',storage:'128GB | 256GB',card_slot:'No',os:'Android 14',battery:'5000 mAh',connectivity:'Wi-Fi 6, Bluetooth 5.3, NFC, 5G' },
  { name:'Samsung Galaxy A35',brand:'Samsung',year:'2024',display_type:'Super AMOLED',resolution:'1080 x 2340 pixels',screen_size:'6.6"',rear_camera:'50MP + 8MP + 5MP',front_camera:'13MP',chipset:'Exynos 1380',ram:'6GB',storage:'128GB | 256GB',card_slot:'Yes',os:'Android 14',battery:'5000 mAh',connectivity:'Wi-Fi 6, Bluetooth 5.3, NFC, 5G' },
  { name:'Samsung Galaxy A25',brand:'Samsung',year:'2023',display_type:'Super AMOLED',resolution:'1080 x 2340 pixels',screen_size:'6.5"',rear_camera:'50MP + 8MP + 2MP',front_camera:'13MP',chipset:'Exynos 1280',ram:'6GB',storage:'128GB | 256GB',card_slot:'Yes',os:'Android 14',battery:'5000 mAh',connectivity:'Wi-Fi 5, Bluetooth 5.1, NFC, 5G' },
  { name:'Samsung Galaxy A15',brand:'Samsung',year:'2024',display_type:'Super AMOLED',resolution:'1080 x 2340 pixels',screen_size:'6.5"',rear_camera:'50MP + 5MP + 2MP',front_camera:'13MP',chipset:'MediaTek Helio G99',ram:'4GB',storage:'128GB',card_slot:'Yes',os:'Android 14',battery:'5000 mAh',connectivity:'Wi-Fi 5, Bluetooth 5.3, NFC, 4G LTE' },
  { name:'Samsung Galaxy Z Fold 6',brand:'Samsung',year:'2024',display_type:'Dynamic AMOLED 2X (foldable)',resolution:'1812 x 2176 pixels (inner)',screen_size:'7.6" (inner)',rear_camera:'50MP + 10MP + 10MP',front_camera:'10MP',chipset:'Qualcomm Snapdragon 8 Gen 3',ram:'12GB',storage:'256GB | 512GB',card_slot:'No',os:'Android 14',battery:'4400 mAh',connectivity:'Wi-Fi 7, Bluetooth 5.3, NFC, 5G' },
  { name:'Samsung Galaxy Z Flip 6',brand:'Samsung',year:'2024',display_type:'Dynamic AMOLED 2X (foldable)',resolution:'1080 x 2640 pixels',screen_size:'6.7"',rear_camera:'50MP + 12MP',front_camera:'10MP',chipset:'Qualcomm Snapdragon 8 Gen 3',ram:'12GB',storage:'256GB | 512GB',card_slot:'No',os:'Android 14',battery:'4000 mAh',connectivity:'Wi-Fi 7, Bluetooth 5.3, NFC, 5G' },
  { name:'Samsung Galaxy M35',brand:'Samsung',year:'2024',display_type:'Super AMOLED',resolution:'1080 x 2340 pixels',screen_size:'6.6"',rear_camera:'50MP + 8MP + 2MP',front_camera:'13MP',chipset:'Exynos 1380',ram:'6GB',storage:'128GB | 256GB',card_slot:'Yes',os:'Android 14',battery:'6000 mAh',connectivity:'Wi-Fi 6, Bluetooth 5.3, NFC, 5G' },
  { name:'Samsung Galaxy Note 20 Ultra',brand:'Samsung',year:'2020',display_type:'Dynamic AMOLED 2X',resolution:'1440 x 3088 pixels',screen_size:'6.9"',rear_camera:'108MP + 12MP + 12MP',front_camera:'10MP',chipset:'Qualcomm Snapdragon 865+',ram:'12GB',storage:'128GB | 256GB | 512GB',card_slot:'Yes',os:'Android 10',battery:'4500 mAh',connectivity:'Wi-Fi 6, Bluetooth 5.0, NFC, 5G' },
  // APPLE
  { name:'Apple iPhone 16 Pro Max',brand:'Apple',year:'2024',display_type:'Super Retina XDR OLED',resolution:'1320 x 2868 pixels',screen_size:'6.9"',rear_camera:'48MP + 48MP + 12MP',front_camera:'12MP',chipset:'Apple A18 Pro',ram:'8GB',storage:'256GB | 512GB | 1TB',card_slot:'No',os:'iOS 18',battery:'4685 mAh',connectivity:'Wi-Fi 7, Bluetooth 5.3, NFC, 5G' },
  { name:'Apple iPhone 16 Pro',brand:'Apple',year:'2024',display_type:'Super Retina XDR OLED',resolution:'1206 x 2622 pixels',screen_size:'6.3"',rear_camera:'48MP + 48MP + 12MP',front_camera:'12MP',chipset:'Apple A18 Pro',ram:'8GB',storage:'128GB | 256GB | 512GB | 1TB',card_slot:'No',os:'iOS 18',battery:'3582 mAh',connectivity:'Wi-Fi 7, Bluetooth 5.3, NFC, 5G' },
  { name:'Apple iPhone 16 Plus',brand:'Apple',year:'2024',display_type:'Super Retina XDR OLED',resolution:'1290 x 2796 pixels',screen_size:'6.7"',rear_camera:'48MP + 12MP',front_camera:'12MP',chipset:'Apple A18',ram:'8GB',storage:'128GB | 256GB | 512GB',card_slot:'No',os:'iOS 18',battery:'4674 mAh',connectivity:'Wi-Fi 7, Bluetooth 5.3, NFC, 5G' },
  { name:'Apple iPhone 16',brand:'Apple',year:'2024',display_type:'Super Retina XDR OLED',resolution:'1179 x 2556 pixels',screen_size:'6.1"',rear_camera:'48MP + 12MP',front_camera:'12MP',chipset:'Apple A18',ram:'8GB',storage:'128GB | 256GB | 512GB',card_slot:'No',os:'iOS 18',battery:'3561 mAh',connectivity:'Wi-Fi 7, Bluetooth 5.3, NFC, 5G' },
  { name:'Apple iPhone 15 Pro Max',brand:'Apple',year:'2023',display_type:'Super Retina XDR OLED',resolution:'1290 x 2796 pixels',screen_size:'6.7"',rear_camera:'48MP + 12MP + 12MP',front_camera:'12MP',chipset:'Apple A17 Pro',ram:'8GB',storage:'256GB | 512GB | 1TB',card_slot:'No',os:'iOS 17',battery:'4422 mAh',connectivity:'Wi-Fi 6E, Bluetooth 5.3, NFC, 5G' },
  { name:'Apple iPhone 15 Pro',brand:'Apple',year:'2023',display_type:'Super Retina XDR OLED',resolution:'1179 x 2556 pixels',screen_size:'6.1"',rear_camera:'48MP + 12MP + 12MP',front_camera:'12MP',chipset:'Apple A17 Pro',ram:'8GB',storage:'128GB | 256GB | 512GB | 1TB',card_slot:'No',os:'iOS 17',battery:'3274 mAh',connectivity:'Wi-Fi 6E, Bluetooth 5.3, NFC, 5G' },
  { name:'Apple iPhone 15 Plus',brand:'Apple',year:'2023',display_type:'Super Retina XDR OLED',resolution:'1284 x 2778 pixels',screen_size:'6.7"',rear_camera:'48MP + 12MP',front_camera:'12MP',chipset:'Apple A16 Bionic',ram:'6GB',storage:'128GB | 256GB | 512GB',card_slot:'No',os:'iOS 17',battery:'4383 mAh',connectivity:'Wi-Fi 6, Bluetooth 5.3, NFC, 5G' },
  { name:'Apple iPhone 15',brand:'Apple',year:'2023',display_type:'Super Retina XDR OLED',resolution:'1179 x 2556 pixels',screen_size:'6.1"',rear_camera:'48MP + 12MP',front_camera:'12MP',chipset:'Apple A16 Bionic',ram:'6GB',storage:'128GB | 256GB | 512GB',card_slot:'No',os:'iOS 17',battery:'3349 mAh',connectivity:'Wi-Fi 6, Bluetooth 5.3, NFC, 5G' },
  { name:'Apple iPhone 14 Pro Max',brand:'Apple',year:'2022',display_type:'Super Retina XDR OLED',resolution:'1290 x 2796 pixels',screen_size:'6.7"',rear_camera:'48MP + 12MP + 12MP',front_camera:'12MP',chipset:'Apple A16 Bionic',ram:'6GB',storage:'128GB | 256GB | 512GB | 1TB',card_slot:'No',os:'iOS 16',battery:'4323 mAh',connectivity:'Wi-Fi 6E, Bluetooth 5.3, NFC, 5G' },
  { name:'Apple iPhone 14',brand:'Apple',year:'2022',display_type:'Super Retina XDR OLED',resolution:'1170 x 2532 pixels',screen_size:'6.1"',rear_camera:'12MP + 12MP',front_camera:'12MP',chipset:'Apple A15 Bionic',ram:'6GB',storage:'128GB | 256GB | 512GB',card_slot:'No',os:'iOS 16',battery:'3279 mAh',connectivity:'Wi-Fi 6, Bluetooth 5.3, NFC, 5G' },
  { name:'Apple iPhone SE (2022)',brand:'Apple',year:'2022',display_type:'Retina IPS LCD',resolution:'750 x 1334 pixels',screen_size:'4.7"',rear_camera:'12MP',front_camera:'7MP',chipset:'Apple A15 Bionic',ram:'4GB',storage:'64GB | 128GB | 256GB',card_slot:'No',os:'iOS 15',battery:'2018 mAh',connectivity:'Wi-Fi 6, Bluetooth 5.0, NFC, 5G' },
  // GOOGLE
  { name:'Google Pixel 9 Pro XL',brand:'Google',year:'2024',display_type:'LTPO OLED',resolution:'1344 x 2992 pixels',screen_size:'6.8"',rear_camera:'50MP + 48MP + 48MP',front_camera:'42MP',chipset:'Google Tensor G4',ram:'16GB',storage:'128GB',card_slot:'No',os:'Android 14',battery:'5060 mAh',connectivity:'Wi-Fi 7, Bluetooth 5.3, NFC, 5G' },
  { name:'Google Pixel 9 Pro',brand:'Google',year:'2024',display_type:'LTPO OLED',resolution:'1280 x 2856 pixels',screen_size:'6.3"',rear_camera:'50MP + 48MP + 48MP',front_camera:'42MP',chipset:'Google Tensor G4',ram:'16GB',storage:'128GB',card_slot:'No',os:'Android 14',battery:'4700 mAh',connectivity:'Wi-Fi 7, Bluetooth 5.3, NFC, 5G' },
  { name:'Google Pixel 9',brand:'Google',year:'2024',display_type:'OLED',resolution:'1080 x 2424 pixels',screen_size:'6.3"',rear_camera:'50MP + 48MP',front_camera:'10.5MP',chipset:'Google Tensor G4',ram:'12GB',storage:'128GB',card_slot:'No',os:'Android 14',battery:'4700 mAh',connectivity:'Wi-Fi 7, Bluetooth 5.3, NFC, 5G' },
  { name:'Google Pixel 8a',brand:'Google',year:'2024',display_type:'OLED',resolution:'1080 x 2400 pixels',screen_size:'6.1"',rear_camera:'64MP + 13MP',front_camera:'13MP',chipset:'Google Tensor G3',ram:'8GB',storage:'128GB',card_slot:'No',os:'Android 14',battery:'4492 mAh',connectivity:'Wi-Fi 6E, Bluetooth 5.3, NFC, 5G' },
  { name:'Google Pixel 8 Pro',brand:'Google',year:'2023',display_type:'LTPO OLED',resolution:'1344 x 2992 pixels',screen_size:'6.7"',rear_camera:'50MP + 48MP + 48MP',front_camera:'10.5MP',chipset:'Google Tensor G3',ram:'12GB',storage:'128GB',card_slot:'No',os:'Android 14',battery:'5050 mAh',connectivity:'Wi-Fi 7, Bluetooth 5.3, NFC, 5G' },
  { name:'Google Pixel 8',brand:'Google',year:'2023',display_type:'OLED',resolution:'1080 x 2400 pixels',screen_size:'6.2"',rear_camera:'50MP + 12MP',front_camera:'10.5MP',chipset:'Google Tensor G3',ram:'8GB',storage:'128GB',card_slot:'No',os:'Android 14',battery:'4575 mAh',connectivity:'Wi-Fi 7, Bluetooth 5.3, NFC, 5G' },
  // ONEPLUS
  { name:'OnePlus 13',brand:'OnePlus',year:'2025',display_type:'LTPO AMOLED',resolution:'1440 x 3168 pixels',screen_size:'6.82"',rear_camera:'50MP + 50MP + 50MP',front_camera:'32MP',chipset:'Qualcomm Snapdragon 8 Elite',ram:'12GB',storage:'256GB',card_slot:'No',os:'Android 15',battery:'6000 mAh',connectivity:'Wi-Fi 7, Bluetooth 5.4, NFC, 5G' },
  { name:'OnePlus 12',brand:'OnePlus',year:'2024',display_type:'LTPO AMOLED',resolution:'1440 x 3168 pixels',screen_size:'6.82"',rear_camera:'50MP + 64MP + 48MP',front_camera:'32MP',chipset:'Qualcomm Snapdragon 8 Gen 3',ram:'12GB',storage:'256GB',card_slot:'No',os:'Android 14',battery:'5400 mAh',connectivity:'Wi-Fi 7, Bluetooth 5.4, NFC, 5G' },
  { name:'OnePlus Nord 4',brand:'OnePlus',year:'2024',display_type:'AMOLED',resolution:'1240 x 2772 pixels',screen_size:'6.74"',rear_camera:'50MP + 8MP',front_camera:'16MP',chipset:'Qualcomm Snapdragon 7+ Gen 3',ram:'8GB',storage:'128GB',card_slot:'No',os:'Android 14',battery:'5500 mAh',connectivity:'Wi-Fi 6E, Bluetooth 5.4, NFC, 5G' },
  { name:'OnePlus Nord CE4',brand:'OnePlus',year:'2024',display_type:'AMOLED',resolution:'1080 x 2400 pixels',screen_size:'6.67"',rear_camera:'50MP + 8MP',front_camera:'16MP',chipset:'Qualcomm Snapdragon 7s Gen 2',ram:'8GB',storage:'128GB',card_slot:'No',os:'Android 14',battery:'5500 mAh',connectivity:'Wi-Fi 6E, Bluetooth 5.3, NFC, 5G' },
  // XIAOMI
  { name:'Xiaomi 15 Pro',brand:'Xiaomi',year:'2024',display_type:'LTPO AMOLED',resolution:'1440 x 3200 pixels',screen_size:'6.73"',rear_camera:'50MP + 50MP + 50MP',front_camera:'32MP',chipset:'Qualcomm Snapdragon 8 Elite',ram:'12GB',storage:'256GB',card_slot:'No',os:'Android 15',battery:'6100 mAh',connectivity:'Wi-Fi 7, Bluetooth 5.4, NFC, 5G' },
  { name:'Xiaomi 14 Ultra',brand:'Xiaomi',year:'2024',display_type:'LTPO AMOLED',resolution:'1440 x 3200 pixels',screen_size:'6.73"',rear_camera:'50MP + 50MP + 50MP + 50MP',front_camera:'32MP',chipset:'Qualcomm Snapdragon 8 Gen 3',ram:'16GB',storage:'256GB',card_slot:'No',os:'Android 14',battery:'5000 mAh',connectivity:'Wi-Fi 7, Bluetooth 5.4, NFC, 5G' },
  { name:'Xiaomi Redmi Note 14 Pro',brand:'Xiaomi',year:'2024',display_type:'AMOLED',resolution:'1220 x 2712 pixels',screen_size:'6.67"',rear_camera:'50MP + 8MP + 2MP',front_camera:'20MP',chipset:'MediaTek Dimensity 7300 Ultra',ram:'8GB',storage:'256GB',card_slot:'Yes',os:'Android 14',battery:'5500 mAh',connectivity:'Wi-Fi 6, Bluetooth 5.4, NFC, 5G' },
  { name:'Xiaomi Redmi Note 13 Pro',brand:'Xiaomi',year:'2023',display_type:'AMOLED',resolution:'1220 x 2712 pixels',screen_size:'6.67"',rear_camera:'200MP + 8MP + 2MP',front_camera:'16MP',chipset:'Qualcomm Snapdragon 7s Gen 2',ram:'8GB',storage:'256GB',card_slot:'Yes',os:'Android 13',battery:'5100 mAh',connectivity:'Wi-Fi 6, Bluetooth 5.3, NFC, 5G' },
  { name:'Xiaomi Redmi 13C',brand:'Xiaomi',year:'2023',display_type:'IPS LCD',resolution:'720 x 1600 pixels',screen_size:'6.74"',rear_camera:'50MP + 2MP',front_camera:'8MP',chipset:'MediaTek Helio G85',ram:'4GB',storage:'128GB',card_slot:'Yes',os:'Android 13',battery:'5000 mAh',connectivity:'Wi-Fi 5, Bluetooth 5.3, No NFC, 4G LTE' },
  // OPPO
  { name:'OPPO Find X8 Pro',brand:'OPPO',year:'2024',display_type:'LTPO AMOLED',resolution:'1264 x 2780 pixels',screen_size:'6.78"',rear_camera:'50MP + 50MP + 50MP + 50MP',front_camera:'32MP',chipset:'MediaTek Dimensity 9400',ram:'12GB',storage:'256GB',card_slot:'No',os:'Android 15',battery:'5910 mAh',connectivity:'Wi-Fi 7, Bluetooth 5.4, NFC, 5G' },
  { name:'OPPO Reno 12 Pro',brand:'OPPO',year:'2024',display_type:'AMOLED',resolution:'1080 x 2412 pixels',screen_size:'6.7"',rear_camera:'50MP + 8MP + 2MP',front_camera:'50MP',chipset:'MediaTek Dimensity 7300 Energy',ram:'12GB',storage:'256GB',card_slot:'No',os:'Android 14',battery:'5000 mAh',connectivity:'Wi-Fi 6, Bluetooth 5.4, NFC, 5G' },
  // SONY
  { name:'Sony Xperia 1 VI',brand:'Sony',year:'2024',display_type:'OLED',resolution:'1080 x 2340 pixels',screen_size:'6.5"',rear_camera:'52MP + 48MP + 12MP',front_camera:'12MP',chipset:'Qualcomm Snapdragon 8 Gen 3',ram:'12GB',storage:'256GB',card_slot:'Yes',os:'Android 14',battery:'5000 mAh',connectivity:'Wi-Fi 7, Bluetooth 5.4, NFC, 5G' },
  { name:'Sony Xperia 5 VI',brand:'Sony',year:'2024',display_type:'OLED',resolution:'1080 x 2340 pixels',screen_size:'6.1"',rear_camera:'48MP + 12MP',front_camera:'12MP',chipset:'Qualcomm Snapdragon 8 Gen 3',ram:'8GB',storage:'128GB',card_slot:'Yes',os:'Android 14',battery:'4000 mAh',connectivity:'Wi-Fi 6E, Bluetooth 5.4, NFC, 5G' },
  // MOTOROLA
  { name:'Motorola Edge 50 Pro',brand:'Motorola',year:'2024',display_type:'pOLED',resolution:'1220 x 2712 pixels',screen_size:'6.7"',rear_camera:'50MP + 10MP + 13MP',front_camera:'50MP',chipset:'Qualcomm Snapdragon 7 Gen 3',ram:'12GB',storage:'256GB',card_slot:'No',os:'Android 14',battery:'4500 mAh',connectivity:'Wi-Fi 6E, Bluetooth 5.4, NFC, 5G' },
  { name:'Motorola Moto G85',brand:'Motorola',year:'2024',display_type:'pOLED',resolution:'1080 x 2400 pixels',screen_size:'6.67"',rear_camera:'50MP + 8MP',front_camera:'32MP',chipset:'Qualcomm Snapdragon 6s Gen 3',ram:'8GB',storage:'128GB',card_slot:'Yes',os:'Android 14',battery:'5000 mAh',connectivity:'Wi-Fi 6, Bluetooth 5.3, NFC, 4G LTE' },
  { name:'Motorola Moto G Power 5G (2024)',brand:'Motorola',year:'2024',display_type:'IPS LCD',resolution:'1080 x 2400 pixels',screen_size:'6.7"',rear_camera:'50MP + 2MP',front_camera:'16MP',chipset:'MediaTek Dimensity 7020',ram:'4GB',storage:'128GB',card_slot:'Yes',os:'Android 14',battery:'6000 mAh',connectivity:'Wi-Fi 5, Bluetooth 5.2, No NFC, 5G' },
  // NOTHING
  { name:'Nothing Phone (2a) Plus',brand:'Nothing',year:'2024',display_type:'AMOLED',resolution:'1080 x 2412 pixels',screen_size:'6.7"',rear_camera:'50MP + 50MP',front_camera:'32MP',chipset:'MediaTek Dimensity 7350 Pro',ram:'12GB',storage:'256GB',card_slot:'No',os:'Android 14',battery:'5000 mAh',connectivity:'Wi-Fi 6, Bluetooth 5.3, NFC, 5G' },
  { name:'Nothing Phone 2a',brand:'Nothing',year:'2024',display_type:'AMOLED',resolution:'1080 x 2412 pixels',screen_size:'6.7"',rear_camera:'50MP + 50MP',front_camera:'32MP',chipset:'MediaTek Dimensity 7200 Pro',ram:'8GB',storage:'128GB',card_slot:'No',os:'Android 14',battery:'5000 mAh',connectivity:'Wi-Fi 6, Bluetooth 5.3, NFC, 5G' },
  // HUAWEI
  { name:'Huawei Pura 70 Pro',brand:'Huawei',year:'2024',display_type:'LTPO OLED',resolution:'1260 x 2844 pixels',screen_size:'6.8"',rear_camera:'50MP + 48MP + 40MP',front_camera:'13MP',chipset:'Kirin 9010',ram:'12GB',storage:'256GB',card_slot:'No',os:'HarmonyOS 4.2',battery:'5050 mAh',connectivity:'Wi-Fi 6E, Bluetooth 5.2, NFC, 4G LTE' },
  // ASUS
  { name:'ASUS ROG Phone 8 Pro',brand:'ASUS',year:'2024',display_type:'AMOLED',resolution:'1080 x 2400 pixels',screen_size:'6.78"',rear_camera:'50MP + 13MP + 32MP',front_camera:'32MP',chipset:'Qualcomm Snapdragon 8 Gen 3',ram:'16GB',storage:'512GB',card_slot:'No',os:'Android 14',battery:'5500 mAh',connectivity:'Wi-Fi 7, Bluetooth 5.3, NFC, 5G' },
  { name:'ASUS Zenfone 11 Ultra',brand:'ASUS',year:'2024',display_type:'AMOLED',resolution:'1080 x 2400 pixels',screen_size:'6.78"',rear_camera:'50MP + 13MP + 32MP',front_camera:'32MP',chipset:'Qualcomm Snapdragon 8 Gen 3',ram:'12GB',storage:'256GB',card_slot:'No',os:'Android 14',battery:'5800 mAh',connectivity:'Wi-Fi 7, Bluetooth 5.3, NFC, 5G' },
  // VIVO
  { name:'Vivo X200 Pro',brand:'Vivo',year:'2024',display_type:'LTPO AMOLED',resolution:'1260 x 2800 pixels',screen_size:'6.78"',rear_camera:'50MP + 50MP + 200MP',front_camera:'32MP',chipset:'MediaTek Dimensity 9400',ram:'16GB',storage:'256GB',card_slot:'No',os:'Android 15',battery:'6000 mAh',connectivity:'Wi-Fi 7, Bluetooth 5.4, NFC, 5G' },
];

function normalize(str) {
  return str.toLowerCase().replace(/[\s\-_.()]/g, '');
}

function scoreMatch(phone, query) {
  const q = normalize(query);
  const name = normalize(phone.name);
  const nameLower = phone.name.toLowerCase();
  const qLower = query.toLowerCase();

  if (name === q) return 1000;
  if (name.startsWith(q)) return 950;
  if (name.includes(q)) return 900;

  const qWords = qLower.split(/\s+/).filter(w => w.length > 0);
  const nameWords = nameLower.split(/\s+/);

  let matched = 0;
  let exactWordMatches = 0;
  for (const w of qWords) {
    if (nameWords.some(nw => nw === w)) { matched++; exactWordMatches++; }
    else if (nameWords.some(nw => nw.includes(w) || w.includes(nw))) matched++;
  }

  const ratio = matched / Math.max(qWords.length, 1);
  if (ratio === 0) return 0;

  let score = Math.round(ratio * 700) + exactWordMatches * 20;
  score += parseInt(phone.year || '2020') - 2018;
  return score;
}

function search(query) {
  return phones
    .map(p => ({ phone: p, score: scoreMatch(p, query) }))
    .filter(r => r.score > 20)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6)
    .map(r => r.phone);
}

function getBrands() {
  return [...new Set(phones.map(p => p.brand))].sort();
}

module.exports = { phones, search, getBrands };
