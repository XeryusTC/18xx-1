const game = {
  info: {
    title: "1825: Everything",
    subtitle: "All 1825 units + expansions",
    designer: "Fransis Tresham",
    background: "gray",
    width: 150,
    color_10: "orange",
    titleX: 50,
    hexCoords: true,
    currency: "GBP"
  },

  links: {
    bgg: "https://boardgamegeek.com/boardgame/937/1825-unit-1"
  },

  tokens: ["Round"],
  ipo: false,
  bank: "£99,999",

  players: [
    { number: 4, certLimit: 37, capital: "£630" },
    { number: 5, certLimit: 31, capital: "£504" },
    { number: 6, certLimit: 26, capital: "£420" },
    { number: 7, certLimit: 21, capital: "£360" },
    { number: 8, certLimit: 19, capital: "£315" },
    { number: 9, certLimit: 17, capital: "£280" }
  ],

  // Railway companies
  companies: [
    // Major companies
    {
      name: "London & North Western",
      abbrev: "LNWR",
      tokens: ["Free", "Free", "£40", "£100", "£100", "£100"],
      color: "black",
      shares: [
        { quantity: 1, label: "Presidency IPO £200", percent: 20, shares: 2 },
        { quantity: 8, label: "IPO £100", percent: 10, shares: 1 }
      ]
    },
    {
      name: "Great Western",
      abbrev: "GWR",
      tokens: ["Free", "Free", "£40", "£100", "£100", "£100", "£100"],
      color: "green",
      shares: [
        { quantity: 1, label: "Presidency IPO £90", percent: 20, shares: 2 },
        { quantity: 8, label: "IPO £90", percent: 10, shares: 1 }
      ]
    },
    {
      name: "Midland",
      abbrev: "MR",
      tokens: ["Free", "£40", "£100", "£100"],
      color: "red",
      shares: [
        { quantity: 1, label: "Presidency IPO £82", percent: 20, shares: 2 },
        { quantity: 8, label: "IPO £82", percent: 10, shares: 1 }
      ]
    },
    {
      name: "North Eastern",
      abbrev: "NER",
      tokens: ["Free", "£40", "£100", "£100"],
      color: "green",
      shares: [
        { quantity: 1, label: "Presidency IPO £82", percent: 20, shares: 2 },
        { quantity: 8, label: "IPO £82", percent: 10, shares: 1 }
      ]
    },
    {
      name: "London & South Western",
      abbrev: "LSW",
      tokens: ["Free", "£40", "£100", "£100"],
      color: "black",
      shares: [
        { quantity: 1, label: "Presidency IPO £76", percent: 20, shares: 2 },
        { quantity: 8, label: "IPO £76", percent: 10, shares: 1 }
      ]
    },
    {
      name: "Great Eastern",
      abbrev: "GER",
      tokens: ["Free", "£40", "£100", "£100"],
      color: "black",
      shares: [
        { quantity: 1, label: "Presidency IPO £76", percent: 20, shares: 2 },
        { quantity: 8, label: "IPO £76", percent: 10, shares: 1 }
      ]
    },
    {
      name: "North British",
      abbrev: "NBR",
      tokens: ["Free", "£40", "£100", "£100"],
      color: "brown",
      shares: [
        { quantity: 1, label: "Presidency IPO £76", percent: 20, shares: 2 },
        { quantity: 8, label: "IPO £76", percent: 10, shares: 1 }
      ]
    },
    {
      name: "Caledonian",
      abbrev: "CR",
      tokens: ["Free", "£40", "£100", "£100"],
      color: "blue",
      shares: [
        { quantity: 1, label: "Presidency IPO £76", percent: 20, shares: 2 },
        { quantity: 8, label: "IPO £76", percent: 10, shares: 1 }
      ]
    },
    {
      name: "South Eastern & Chatham",
      abbrev: "SEC",
      tokens: ["Free", "£40", "£100", "£100"],
      color: "black",
      shares: [
        { quantity: 1, label: "Presidency IPO £71", percent: 20, shares: 2 },
        { quantity: 8, label: "IPO £71", percent: 10, shares: 1 }
      ]
    },
    {
      name: "Great Central",
      abbrev: "GCR",
      tokens: ["Free", "£40", "£100"],
      color: "black",
      shares: [
        { quantity: 1, label: "Presidency IPO £71", percent: 20, shares: 2 },
        { quantity: 8, label: "IPO £71", percent: 10, shares: 1 }
      ]
    },
    {
      name: "Great Northern",
      abbrev: "GNR",
      tokens: ["Free", "£40", "£100"],
      color: "black",
      shares: [
        { quantity: 1, label: "Presidency IPO £71", percent: 20, shares: 2 },
        { quantity: 8, label: "IPO £71", percent: 10, shares: 1 }
      ]
    },
    {
      name: "Lancashire & Yorkshire",
      abbrev: "L&Y",
      tokens: ["Free", "£40", "£100"],
      color: "purple",
      shares: [
        { quantity: 1, label: "Presidency IPO £71", percent: 20, shares: 2 },
        { quantity: 8, label: "IPO £71", percent: 10, shares: 1 }
      ]
    },
    {
      name: "London, Brighton & South Coast",
      abbrev: "LBS",
      tokens: ["Free", "£40", "£100"],
      color: "yellow",
      shares: [
        { quantity: 1, label: "Presidency IPO £67", percent: 20, shares: 2 },
        { quantity: 8, label: "IPO £67", percent: 10, shares: 1 }
      ]
    },
    {
      name: "Glasgow & South Western",
      abbrev: "GSW",
      tokens: ["Free", "£40", "£100"],
      color: "black",
      shares: [
        { quantity: 1, label: "Presidency IPO £67", percent: 20, shares: 2 },
        { quantity: 8, label: "IPO £67", percent: 10, shares: 1 }
      ]
    },
    // Minor companies
    {
      name: "London, Tilbury & Southend",
      abbrev: "LTS",
      tokens: ["Free"],
      color: "black",
      shares: [
        { quantity: 1, label: "Presidency Train: 2+2 Value: £600", percent: 40, shares:2 },
        { quantity: 3, percent: 20, shares: 1 }
      ]
    },
    {
      name: "Furness",
      abbrev: "FR",
      tokens: ["Free"],
      color: "black",
      shares: [
        { quantity: 1, label: "Presidency Train: 5 Value: £550", percent: 40, shares:2 },
        { quantity: 3, percent: 20, shares: 1 }
      ]
    },
    {
      name: "Great North of Scotland",
      abbrev: "GNS",
      tokens: ["Free"],
      color: "black",
      shares: [
        { quantity: 1, label: "Presidency Train: 5 Value: £550", percent: 40, shares:2 },
        { quantity: 3, percent: 20, shares: 1 }
      ]
    },
    {
      name: "Somerset & Dorset",
      abbrev: "SDR",
      tokens: ["Free"],
      color: "black",
      shares: [
        { quantity: 1, label: "Presidency Train: 5 Value: £550", percent: 40, shares:2 },
        { quantity: 3, percent: 20, shares: 1 }
      ]
    },
    {
      name: "Taff Vale",
      abbrev: "TV",
      tokens: ["Free"],
      color: "black",
      shares: [
        { quantity: 1, label: "Presidency Train: 4T Value: £480", percent: 40, shares:2 },
        { quantity: 3, percent: 20, shares: 1 }
      ]
    },
    {
      name: "Midland & Greant Northern",
      abbrev: "MGN",
      tokens: ["Free"],
      color: "black",
      shares: [
        { quantity: 1, label: "Presidency Train: 4T Value: £480", percent: 40, shares:2 },
        { quantity: 3, percent: 20, shares: 1 }
      ]
    },
    {
      name: "Cambrian",
      abbrev: "Cam",
      tokens: ["Free"],
      color: "black",
      shares: [
        { quantity: 1, label: "Presidency Train: 3U Value: £410", percent: 40, shares:2 },
        { quantity: 3, percent: 20, shares: 1 }
      ]
    },
    {
      name: "Highland",
      abbrev: "HR",
      tokens: ["Free"],
      color: "black",
      shares: [
        { quantity: 1, label: "Presidency Train: 3U Value: £410", percent: 40, shares:2 },
        { quantity: 3, percent: 20, shares: 1 }
      ]
    },
    {
      name: "North Staffordshire",
      abbrev: "NSR",
      tokens: ["Free"],
      color: "black",
      shares: [
        { quantity: 1, label: "Presidency Train: 3T Value: £370", percent: 40, shares:2 },
        { quantity: 3, percent: 20, shares: 1 }
      ]
    },
    {
      name: "Maryport & Carlisle",
      abbrev: "MCR",
      tokens: ["Free"],
      color: "black",
      shares: [
        { quantity: 1, label: "Presidency Train: 3T Value: £370", percent: 40, shares:2 },
        { quantity: 3, percent: 20, shares: 1 }
      ]
    }
  ],

  trains: [
    {
      name: "2",
      quantity: 7,
      price: "£180",
      color: "yellow",
      info: [ { color: "brown", note: "Rusted by 5" } ]
    },
    {
      name: "3",
      quantity: 6,
      price: "£300",
      color: "green",
      info: [ { color: "yellow", note: "Permanent" } ]

    },
    {
      name: "4",
      quantity: 5,
      price: "£430",
      color: "green",
      info: [ { color: "yellow", note: "Permanent" } ]

    },
    {
      name: "5",
      quantity: 4,
      price: "£550",
      color: "brown",
      info: [ { color: "yellow", note: "Permanent" } ]

    },
    {
      name: "3T",
      quantity: 7,
      price: "£370",
      color: "brown",
      info: [ { color: "yellow", note: "Permanent" } ]

    },
    {
      name: "3U",
      quantity: 5,
      price: "£410",
      color: "brown",
      info: [ { color: "yellow", note: "Permanent" } ]

    },
    {
      name: "6",
      quantity: 3,
      price: "£650",
      color: "gray",
      info: [ { color: "yellow", note: "Permanent" } ]

    },
    {
      name: "2+2",
      quantity: 3,
      price: "£300",
      color: "gray",
      info: [ { color: "yellow", note: "Permanent" } ]

    },
    {
      name: "4T",
      quantity: 2,
      price: "£480",
      color: "gray",
      info: [ { color: "yellow", note: "Permanent" } ]

    },
    {
      name: "7",
      quantity: 2,
      price: "£720",
      color: "gray",
      info: [ { color: "yellow", note: "Permanent" } ]
    },
    {
      name: "4+4E",
      quantity: 2,
      price: "£830",
      color: "gray",
      info: [ { color: "yellow", note: "Permanent" } ]

    },
  ],

  privates: [
    {
      name: "Swansea and Mumbles",
      price: "£30",
      revenue: "£5",
      description: "",
    },
    {
      name: "Tanfield Wagon Way",
      price: "£60",
      revenue: "£75",
      description: "",
    },
    {
      name: "Cromford and High Peak",
      price: "£75",
      revenue: "£12",
      description: "",
    },
    {
      name: "Canterbury and Whitstable",
      price: "£130",
      revenue: "£20",
      description: "",
    },
    {
      name: "Stockton and Darlington",
      price: "£160",
      revenue: "£25",
      description: "",
    },
    {
      name: "Liverpool and Manchester",
      price: "£210",
      revenue: "£30",
      description: "",
    },
  ],

  phases: [
    {
      name: "Phase 1",
      limit: "4",
      number: "7",
      tiles: "yellow"
    },
    {
      name: "Phase 2",
      limit: "4",
      number: "6",
      tiles: "green"
    },
    {
      name: "Phase 3",
      limit: "3",
      number: "4",
      tiles: "brown",
      notes: "2 trains rust. Russet, green-russet and russet-brown tiles are available. 3T and 3U are available after purchase of the 5 train."
    },
    {
      name: "Phase 4",
      limit: "no limit",
      number: "3",
      tiles: "gray",
      notes: "Grey and grey-russet tiles are available. 4T and 2+2 are available after the purchase of the 6 train."
    },
    {
      name: "Phase 5",
      limit: "no limit",
      number: "2",
      tiles: "gray",
      notes: "4+4E becomes available after the purchase of the 7 train."
    }
  ],

  pools: [
    {
      name: "Stock market",
      notes: []
    }
  ],

  rounds: [
    { name: "OR4", color: "gray" },
    { name: "OR3", color: "brown" },
    { name: "OR2", color: "green" },
    { name: "OR1", color: "yellow" },
    { name: "SR", color: "white" },
  ],

  turns: [
    {
      name: "Stock Round",
      steps: [
        "Sell any number of shares, or sell your private",
        "Buy one share"
      ],
      ordered: true
    },
    {
      name: "Operating Round",
      steps: [
        "Lay or upgrade track",
        "Place a station",
        "Make payments for the previous steps",
        "Run trains and declare dividends",
        "Adjust share price",
        "Buy trains"
      ],
      ordered: true
    }
  ],

  stock: {
    type: "1D",
    par: {
      color: "yellow",
    },
    movement: {
      left: ["Withheld revenue", "Minor has fewer than 40% in player's hands"],
      right: ["Paid dividends"]
    },
    market: [
      { label: "Closed", color: "black", textColor: "white" },
      { value: 5, label: 5, legend: 0 },
      { value: 10, label: 10, legend: 0 },
      { value: 16, label: 16, legend: 0 },
      { value: 24, label: 24, legend: 0 },
      { value: 34, label: 34, legend: 0 },
      { value: 42, label: 42, legend: 0 },
      { value: 49, label: 49, legend: 0 },
      { value: 55, label: 55, legend: 1 },
      { value: 61, label: 61, legend: 1 },
      { value: 67, label: 67, legend: 1 },
      { value: 71, label: 71, legend: 1 },
      { value: 76, label: 76, legend: 1 },
      { value: 82, label: 82, legend: 1 },
      { value: 90, label: 90, legend: 1 },
      { value: 100, label: 100, legend: 1 },
      61,
      67,
      71,
      76,
      82,
      90,
      100,
      112,
      126,
      142,
      160,
      180,
      205,
      230,
      255,
      280,
      300,
      320,
      340,
      360,
      380,
      400,
      420,
      440,
      460,
      480,
      { label: "End game", color: "green", textColor: "white" }
    ],
    legend: [
      {
        color: "yellow",
        description:
        "Shares of this corporation do not count toward the certificate limit",
        icon: "certificate",
      },
      {
        color: "gray",
        description: "Major company par values",
        icon: "money-bill-wave",
      }
    ]
  },

  tiles: {
    // K2, K7 have no tiles, K4 doesn't exist?
    //   U1, U2, U3, K1, K3, K5, K6, R1.1, R2, R3.1
    // Yellow
     "1": 1 + 1 + 1,
     "2": 1 + 1 + 1,
     "3": 1 + 1 + 1                 + 1   + 1,
     "4": 3 + 1 + 3                 + 1,
     "5": 2 + 2 + 2,
     "6": 2 + 2 + 2                 + 2,
     "7": 2 + 3 + 3,
     "8": 8 + 4 + 6                 + 2         + 1,
     "9": 7 + 4 + 5                             + 2,
    "55": 1 + 1 + 1,
    "56": 1 + 1 + 1,
    "58":                         2       + 2,
    "69":     1              + 1    + 1,
    "114":    1,
    "115":        1                       + 1,
    "198|1825":                 + 1,
    "199|1825":                 + 1,
    //   U1, U2, U3, K1, K3, K5, K6, R1.1, R2, R3.1
    // Green
    "10":                             1   + 1,
    "11":                       + 2 + 1         + 1,
    "12": 2 + 3 + 2,
    "13": 1     + 1                 + 1,
    "14": 2 + 2 + 3                 + 1         + 1,
    "15": 2 + 2 + 3          + 1,
    "16": 1 + 1 + 1 + 1,
    "17":             1,
    "18":     1     + 1,
    "19": 1 + 2 + 1 + 1,
    "20": 1 + 1     + 1,
    "21":             1,
    "22":             1,
    "23": 3 + 2 + 3                 + 1,
    "24": 3 + 2 + 3                 + 1,
    "25": 1 + 1,
    "26": 1 + 1 + 1,
    "27": 1 + 1 + 1,
    "28": 1 + 1 + 1,
    "29": 1 + 1 + 1,
    "30":             1,
    "31":             1,
    "52": 2 + 2 + 2,
    "81":         1,
    "82":                       + 1,
    "83":                       + 1,
    "87": 1,
    "88": 1,
    //   U1, U2, U3, K1, K3, K5, K6, R1.1, R2, R3.1
    // Russet
    "32": 1,
    "33":     1,
    "34": 1 + 1 + 1,
    "35":                           + 1   + 1,
    "37":                           + 1   + 1,
    "38": 2 + 3 + 2,
    "39":     1 + 1 + 1,
    "40":     1     + 1,
    "41": 1 + 1 + 1 + 1,
    "42": 1 + 1 + 1 + 1,
    "43":     1 + 1 + 1,
    "44":     1 + 1 + 1,
    "45": 1     + 1,
    "46": 1     + 1,
    "47": 1 + 1 + 1 + 1,
    "63":         2,
    "64": 1 + 1,
    "65": 1 + 1,
    "66": 1 + 1 + 2,
    "67": 1 + 1 + 1,
    "68": 1 + 1,
    "118":        1,
    //   U1, U2, U3, K1, K3, K5, K6, R1.1, R2, R3.1
    // Grey
    "48":                1,
    "49":     1        + 1,
    "50":     1        + 2,
    "51":     2        + 3,
    "60":                2,
    "166":               4,
    "167":               4,
    "168":               2,
    // Brown
    "W9":                                   1,
    //   U1, U2, U3, K1, K3, K5, K6, R1.1, R2, R3.1
    // Mixed colors
    "119":                    1 + 2,
    "200":                      + 2,
  },

  map: {
    hexes: [
    ]
  }
};

export default game;
