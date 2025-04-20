const deviceSpecs = {
    "iPhone1,1": {
        "model_name": "iPhone",
        "display": {
            "ppi": 163,
            "width": 320,
            "height": 480,
            "scale_factor": 1
        }
    },
    "iPhone1,2": {
        "model_name": "iPhone 3G",
        "display": {
            "ppi": 163,
            "width": 320,
            "height": 480,
            "scale_factor": 1
        }
    },
    "iPhone2,1": {
        "model_name": "iPhone 3GS",
        "display": {
            "ppi": 163,
            "width": 320,
            "height": 480,
            "scale_factor": 1
        }
    },
    "iPhone3,1": {
        "model_name": "iPhone 4",
        "display": {
            "ppi": 326,
            "width": 640,
            "height": 960,
            "scale_factor": 2
        }
    },
    "iPhone4,1": {
        "model_name": "iPhone 4s",
        "display": {
            "ppi": 326,
            "width": 640,
            "height": 960,
            "scale_factor": 2
        }
    },
    "iPhone5,1": {
        "model_name": "iPhone 5",
        "display": {
            "ppi": 326,
            "width": 640,
            "height": 1136,
            "scale_factor": 2
        }
    },
    "iPhone5,3": {
        "model_name": "iPhone 5c",
        "display": {
            "ppi": 326,
            "width": 640,
            "height": 1136,
            "scale_factor": 2
        }
    },
    "iPhone6,1": {
        "model_name": "iPhone 5s",
        "display": {
            "ppi": 326,
            "width": 640,
            "height": 1136,
            "scale_factor": 2
        }
    },
    "iPhone7,1": {
        "model_name": "iPhone 6 Plus",
        "display": {
            "ppi": 401,
            "width": 1080,
            "height": 1920,
            "scale_factor": 3
        }
    },
    "iPhone7,2": {
        "model_name": "iPhone 6",
        "display": {
            "ppi": 326,
            "width": 750,
            "height": 1334,
            "scale_factor": 2
        }
    },
    "iPhone8,1": {
        "model_name": "iPhone 6s",
        "display": {
            "ppi": 326,
            "width": 750,
            "height": 1334,
            "scale_factor": 2
        }
    },
    "iPhone8,2": {
        "model_name": "iPhone 6s Plus",
        "display": {
            "ppi": 401,
            "width": 1080,
            "height": 1920,
            "scale_factor": 3
        }
    },
    "iPhone8,4": {
        "model_name": "iPhone SE (1st gen)",
        "display": {
            "ppi": 326,
            "width": 640,
            "height": 1136,
            "scale_factor": 2
        }
    },
    "iPhone9,1": {
        "model_name": "iPhone 7",
        "display": {
            "ppi": 326,
            "width": 750,
            "height": 1334,
            "scale_factor": 2
        }
    },
    "iPhone9,2": {
        "model_name": "iPhone 7 Plus",
        "display": {
            "ppi": 401,
            "width": 1080,
            "height": 1920,
            "scale_factor": 3
        }
    },
    "iPhone10,1": {
        "model_name": "iPhone 8",
        "display": {
            "ppi": 326,
            "width": 750,
            "height": 1334,
            "scale_factor": 2
        }
    },
    "iPhone10,2": {
        "model_name": "iPhone 8 Plus",
        "display": {
            "ppi": 401,
            "width": 1080,
            "height": 1920,
            "scale_factor": 3
        }
    },
    "iPhone10,3": {
        "model_name": "iPhone X",
        "display": {
            "ppi": 458,
            "width": 1125,
            "height": 2436,
            "scale_factor": 3
        }
    },
    "iPhone11,2": {
        "model_name": "iPhone XS",
        "display": {
            "ppi": 458,
            "width": 1125,
            "height": 2436,
            "scale_factor": 3
        }
    },
    "iPhone11,4": {
        "model_name": "iPhone XS Max",
        "display": {
            "ppi": 458,
            "width": 1242,
            "height": 2688,
            "scale_factor": 3
        }
    },
    "iPhone11,8": {
        "model_name": "iPhone XR",
        "display": {
            "ppi": 326,
            "width": 828,
            "height": 1792,
            "scale_factor": 2
        }
    },
    "iPhone12,1": {
        "model_name": "iPhone 11",
        "display": {
            "ppi": 326,
            "width": 828,
            "height": 1792,
            "scale_factor": 2
        }
    },
    "iPhone12,3": {
        "model_name": "iPhone 11 Pro",
        "display": {
            "ppi": 458,
            "width": 1125,
            "height": 2436,
            "scale_factor": 3
        }
    },
    "iPhone12,5": {
        "model_name": "iPhone 11 Pro Max",
        "display": {
            "ppi": 458,
            "width": 1242,
            "height": 2688,
            "scale_factor": 3
        }
    },
    "iPhone13,1": {
        "model_name": "iPhone 12 mini",
        "display": {
            "ppi": 476,
            "width": 1080,
            "height": 2340,
            "scale_factor": 2.98
        }
    },
    "iPhone13,2": {
        "model_name": "iPhone 12",
        "display": {
            "ppi": 460,
            "width": 1170,
            "height": 2532,
            "scale_factor": 3
        }
    },
    "iPhone13,3": {
        "model_name": "iPhone 12 Pro",
        "display": {
            "ppi": 460,
            "width": 1170,
            "height": 2532,
            "scale_factor": 3
        }
    },
    "iPhone13,4": {
        "model_name": "iPhone 12 Pro Max",
        "display": {
            "ppi": 458,
            "width": 1284,
            "height": 2778,
            "scale_factor": 3
        }
    },
    "iPhone14,2": {
        "model_name": "iPhone 13 Pro",
        "display": {
            "ppi": 460,
            "width": 1170,
            "height": 2532,
            "scale_factor": 3
        }
    },
    "iPhone14,3": {
        "model_name": "iPhone 13 Pro Max",
        "display": {
            "ppi": 458,
            "width": 1284,
            "height": 2778,
            "scale_factor": 3
        }
    },
    "iPhone14,4": {
        "model_name": "iPhone 13 mini",
        "display": {
            "ppi": 476,
            "width": 1080,
            "height": 2340,
            "scale_factor": 2.98
        }
    },
    "iPhone14,5": {
        "model_name": "iPhone 13",
        "display": {
            "ppi": 460,
            "width": 1170,
            "height": 2532,
            "scale_factor": 3
        }
    },
    "iPhone14,6": {
        "model_name": "iPhone SE (3rd gen)",
        "display": {
            "ppi": 326,
            "width": 750,
            "height": 1334,
            "scale_factor": 2
        }
    },
    "iPhone15,2": {
        "model_name": "iPhone 14 Pro",
        "display": {
            "ppi": 460,
            "width": 1179,
            "height": 2556,
            "scale_factor": 3
        }
    },
    "iPhone15,3": {
        "model_name": "iPhone 14 Pro Max",
        "display": {
            "ppi": 460,
            "width": 1290,
            "height": 2796,
            "scale_factor": 3
        }
    },
    "iPhone15,4": {
        "model_name": "iPhone 15",
        "display": {
            "ppi": 460,
            "width": 1179,
            "height": 2556,
            "scale_factor": 3
        }
    },
    "iPhone15,5": {
        "model_name": "iPhone 15 Plus",
        "display": {
            "ppi": 460,
            "width": 1290,
            "height": 2796,
            "scale_factor": 3
        }
    },
    "iPhone16,1": {
        "model_name": "iPhone 15 Pro",
        "display": {
            "ppi": 460,
            "width": 1179,
            "height": 2556,
            "scale_factor": 3
        }
    },
    "iPhone16,2": {
        "model_name": "iPhone 15 Pro Max",
        "display": {
            "ppi": 460,
            "width": 1290,
            "height": 2796,
            "scale_factor": 3
        }
    },
    "iPhone16,5": {
        "model_name": "iPhone 16",
        "display": {
            "ppi": 460,
            "width": 1179,
            "height": 2556,
            "scale_factor": 3
        }
    },
    "iPhone16,6": {
        "model_name": "iPhone 16 Plus",
        "display": {
            "ppi": 460,
            "width": 1290,
            "height": 2796,
            "scale_factor": 3
        }
    },
    "iPhone16,7": {
        "model_name": "iPhone 16 Pro",
        "display": {
            "ppi": 460,
            "width": 1179,
            "height": 2556,
            "scale_factor": 3
        }
    },
    "iPhone16,8": {
        "model_name": "iPhone 16 Pro Max",
        "display": {
            "ppi": 460,
            "width": 1290,
            "height": 2796,
            "scale_factor": 3
        }
    },
    "iPhone16,9": {
        "model_name": "iPhone SE (4th gen)",
        "display": {
            "ppi": 326,
            "width": 750,
            "height": 1334,
            "scale_factor": 2
        }
    },
    "iPhone16,e": {
        "model_name": "iPhone 16 Ultra",
        "display": {
            "ppi": 460,
            "width": 1380,
            "height": 3000,
            "scale_factor": 3
        }
    },
    "iPad1,1": {
        "model_name": "iPad (1st generation)",
        "display": {
            "ppi": 132,
            "width": 768,
            "height": 1024,
            "scale_factor": 1
        }
    },
    "iPad2,1": {
        "model_name": "iPad 2 Wi-Fi",
        "display": {
            "ppi": 132,
            "width": 768,
            "height": 1024,
            "scale_factor": 1
        }
    },
    "iPad2,2": {
        "model_name": "iPad 2 GSM",
        "display": {
            "ppi": 132,
            "width": 768,
            "height": 1024,
            "scale_factor": 1
        }
    },
    "iPad2,3": {
        "model_name": "iPad 2 CDMA",
        "display": {
            "ppi": 132,
            "width": 768,
            "height": 1024,
            "scale_factor": 1
        }
    },
    "iPad2,4": {
        "model_name": "iPad 2 Wi-Fi (Rev A)",
        "display": {
            "ppi": 132,
            "width": 768,
            "height": 1024,
            "scale_factor": 1
        }
    },
    "iPad3,1": {
        "model_name": "iPad (3rd generation)",
        "display": {
            "ppi": 264,
            "width": 1536,
            "height": 2048,
            "scale_factor": 2
        }
    },
    "iPad3,4": {
        "model_name": "iPad (4th generation)",
        "display": {
            "ppi": 264,
            "width": 1536,
            "height": 2048,
            "scale_factor": 2
        }
    },
    "iPad4,1": {
        "model_name": "iPad Air",
        "display": {
            "ppi": 264,
            "width": 1536,
            "height": 2048,
            "scale_factor": 2
        }
    },
    "iPad4,4": {
        "model_name": "iPad mini 2",
        "display": {
            "ppi": 326,
            "width": 1536,
            "height": 2048,
            "scale_factor": 2
        }
    },
    "iPad5,1": {
        "model_name": "iPad mini 4",
        "display": {
            "ppi": 326,
            "width": 1536,
            "height": 2048,
            "scale_factor": 2
        }
    },
    "iPad5,3": {
        "model_name": "iPad Air 2",
        "display": {
            "ppi": 264,
            "width": 1536,
            "height": 2048,
            "scale_factor": 2
        }
    },
    "iPad6,3": {
        "model_name": "iPad Pro 9.7-inch",
        "display": {
            "ppi": 264,
            "width": 1536,
            "height": 2048,
            "scale_factor": 2
        }
    },
    "iPad6,7": {
        "model_name": "iPad Pro 12.9-inch (1st gen)",
        "display": {
            "ppi": 264,
            "width": 2048,
            "height": 2732,
            "scale_factor": 2
        }
    },
    "iPad6,11": {
        "model_name": "iPad (5th generation)",
        "display": {
            "ppi": 264,
            "width": 1536,
            "height": 2048,
            "scale_factor": 2
        }
    },
    "iPad7,1": {
        "model_name": "iPad Pro 12.9-inch (2nd gen)",
        "display": {
            "ppi": 264,
            "width": 2048,
            "height": 2732,
            "scale_factor": 2
        }
    },
    "iPad7,3": {
        "model_name": "iPad Pro 10.5-inch",
        "display": {
            "ppi": 264,
            "width": 1668,
            "height": 2224,
            "scale_factor": 2
        }
    },
    "iPad7,5": {
        "model_name": "iPad (6th generation)",
        "display": {
            "ppi": 264,
            "width": 1536,
            "height": 2048,
            "scale_factor": 2
        }
    },
    "iPad7,11": {
        "model_name": "iPad (7th generation)",
        "display": {
            "ppi": 264,
            "width": 1620,
            "height": 2160,
            "scale_factor": 2
        }
    },
    "iPad8,1": {
        "model_name": "iPad Pro 11-inch (1st gen)",
        "display": {
            "ppi": 264,
            "width": 1668,
            "height": 2388,
            "scale_factor": 2
        }
    },
    "iPad8,5": {
        "model_name": "iPad Pro 12.9-inch (3rd gen)",
        "display": {
            "ppi": 264,
            "width": 2048,
            "height": 2732,
            "scale_factor": 2
        }
    },
    "iPad8,9": {
        "model_name": "iPad Pro 11-inch (2nd gen)",
        "display": {
            "ppi": 264,
            "width": 1668,
            "height": 2388,
            "scale_factor": 2
        }
    },
    "iPad8,11": {
        "model_name": "iPad Pro 12.9-inch (4th gen)",
        "display": {
            "ppi": 264,
            "width": 2048,
            "height": 2732,
            "scale_factor": 2
        }
    },
    "iPad11,1": {
        "model_name": "iPad mini (5th gen)",
        "display": {
            "ppi": 326,
            "width": 1536,
            "height": 2048,
            "scale_factor": 2
        }
    },
    "iPad11,6": {
        "model_name": "iPad (8th generation)",
        "display": {
            "ppi": 264,
            "width": 1620,
            "height": 2160,
            "scale_factor": 2
        }
    },
    "iPad12,1": {
        "model_name": "iPad (9th generation)",
        "display": {
            "ppi": 264,
            "width": 1620,
            "height": 2160,
            "scale_factor": 2
        }
    },
    "iPad13,1": {
        "model_name": "iPad Air (4th gen)",
        "display": {
            "ppi": 264,
            "width": 1640,
            "height": 2360,
            "scale_factor": 2
        }
    },
    "iPad13,4": {
        "model_name": "iPad Pro 11-inch (3rd gen)",
        "display": {
            "ppi": 264,
            "width": 1668,
            "height": 2388,
            "scale_factor": 2
        }
    },
    "iPad13,16": {
        "model_name": "iPad Air (5th gen)",
        "display": {
            "ppi": 264,
            "width": 1640,
            "height": 2360,
            "scale_factor": 2
        }
    },
    "iPad13,8": {
        "model_name": "iPad Pro 12.9-inch (5th gen)",
        "display": {
            "ppi": 264,
            "width": 2048,
            "height": 2732,
            "scale_factor": 2
        }
    },
    "iPad13,18": {
        "model_name": "iPad (10th generation)",
        "display": {
            "ppi": 264,
            "width": 1640,
            "height": 2360,
            "scale_factor": 2
        }
    },
    "iPad14,3": {
        "model_name": "iPad Pro 11-inch (4th gen)",
        "display": {
            "ppi": 264,
            "width": 1668,
            "height": 2388,
            "scale_factor": 2
        }
    },
    "iPad14,1": {
        "model_name": "iPad mini (6th gen)",
        "display": {
            "ppi": 326,
            "width": 1488,
            "height": 2266,
            "scale_factor": 2
        }
    },
    "iPad14,5": {
        "model_name": "iPad Pro 12.9-inch (6th gen)",
        "display": {
            "ppi": 264,
            "width": 2048,
            "height": 2732,
            "scale_factor": 2
        }
    }
}

export default deviceSpecs;
