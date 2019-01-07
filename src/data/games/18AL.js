const game = {
  // Generic Game Info
  info: {
    title: "18AL",
    designer: "Mark Derrick",
    background: "green",
    width: 150,
    color_10: "orange",
    orientation: "horizontal",
    extraTotalWidth: 150,
    titleX: 575,
    titleY: 1275
  },

  // Extra Tokens
  tokens: ["Round"],

  // Need an IPO sheet
  ipo: true,

  bank: "$8,000",

  players: [
    {
      number: 3,
      certLimit: 25,
      capital: "$600"
    },
    {
      number: 4,
      certLimit: 12,
      capital: "$500"
    },
    {
      number: 5,
      certLimit: 10,
      capital: "$400"
    }
  ],

  // Railway Companies
  companies: [
    {
      name: "Louisville & Nashville Railroad",
      abbrev: "L&N",
      tokens: ["Free", "$40", "$100", "$100"],
      color: "purple",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    },
    {
      name: "Mobile & Ohio Railroad",
      abbrev: "M&O",
      tokens: ["Free", "$40", "$100", "$100"],
      color: "orange",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    },
    {
      name: "Western Railway of Alabama",
      abbrev: "WRA",
      tokens: ["Free", "$40", "$100", "$100"],
      color: "red",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    },
    {
      name: "Alabama, Tennessee & Northern Railroad",
      abbrev: "ATN",
      tokens: ["Free", "$40", "$100"],
      color: "black",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    },
    {
      name: "Atlanta, Birmingham & Coast Railroad",
      abbrev: "ABC",
      tokens: ["Free", "$40"],
      color: "darkGreen",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    },
    {
      name: "Tennessee, Alabama & Georgia Railway",
      abbrev: "TAG",
      tokens: ["Free", "$40"],
      color: "yellow",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    }
  ],

  trains: [
    {
      name: "2",
      quantity: 5,
      price: "$100",
      color: "yellow",
      info: [
        {
          color: "green",
          note: "Rusted by 4"
        }
      ]
    },
    {
      name: "3",
      quantity: 4,
      price: "$180",
      color: "green",
      info: [
        {
          color: "brown",
          note: "Rusted by 6"
        }
      ]
    },
    {
      name: "4",
      quantity: 3,
      price: "$300",
      color: "green",
      info: [
        {
          color: "brown",
          note: "Rusted by 7"
        }
      ]
    },
    {
      name: "5",
      quantity: 2,
      price: "$450",
      color: "brown",
      info: [
        {
          color: "yellow",
          note: "Permanent"
        }
      ]
    },
    {
      name: "6",
      quantity: 1,
      price: "$630",
      color: "brown",
      info: [
        {
          color: "yellow",
          note: "Permanent"
        }
      ]
    },
    {
      name: "7",
      quantity: 1,
      price: "$700",
      color: "brown",
      info: [
        {
          color: "yellow",
          note: "Permanent"
        }
      ]
    },
    {
      name: "4D",
      quantity: 5,
      price: "$800",
      color: "brown",
      info: [
        {
          color: "yellow",
          note: "Permanent"
        }
      ]
    }
  ],

  privates: [
    {
      name: "Tuscumbia Railway",
      price: "$20",
      revenue: "$5"
    },
    {
      name: "South & North Alabama Railroad",
      price: "$40",
      revenue: "$10"
    },
    {
      name: "Brown & Sons Lumber Co.",
      price: "$70",
      revenue: "$15"
    },
    {
      name: "Memphis & Charleston Railroad",
      price: "$100",
      revenue: "$20"
    },
    {
      name: "New Decatur Yards",
      price: "$120",
      revenue: "$20"
    }
  ],

  phases: [
    {
      name: "2",
      limit: "4",
      number: "6",
      tiles: "yellow"
    },
    {
      name: "3",
      limit: "4",
      number: "5",
      tiles: "green",
      notes: "Private companies may be purchased"
    },
    {
      name: "4",
      rust: "2",
      limit: "3",
      number: "4",
      tiles: "green",
      notes: "Multiple trains may be purchased in one operating turn"
    },
    {
      name: "5",
      limit: "2",
      number: "3",
      tiles: "brown",
      notes: "Private companies are closed"
    },
    {
      name: "6",
      limit: "2",
      number: "2",
      rust: "3",
      tiles: "brown",
      notes: "Coal fields are closed"
    },
    {
      name: "7",
      limit: "2",
      number: "2",
      rust: "4",
      tiles: "brown"
    },
    {
      name: "4D",
      limit: "2",
      number: "6",
      rust: "4",
      tiles: "brown",
      notes: "Grey Birmingham tile available"
    }
  ],

  pools: [
    {
      name: "Market",
      notes: [
        {
          color: "orange",
          note: "Shares in the market pay dividends to the corporation"
        },
        {
          color: "brown",
          icon: "exclamation",
          note:
          "No more than 50% of a corporation's shares may be in the market at any time"
        },
        {
          color: "red",
          icon: "times",
          note: "Shares cannot be sold during the first stock round"
        }
      ]
    }
  ],

  rounds: [
    {
      name: "OR3",
      color: "brown"
    },
    {
      name: "OR2",
      color: "green"
    },
    {
      name: "OR1",
      color: "yellow"
    },
    {
      name: "SR",
      color: "gray"
    }
  ],

  turns: [
    {
      name: "Stock Round",
      steps: [
        "Sell any number of shares",
        "Buy one share",
        "Sell any number of shares"
      ],
      ordered: true
    },
    {
      name: "Operating Round",
      steps: [
        "Lay or upgrade track",
        "Purchase a station",
        "Run trains",
        "Pay dividends or withhold revenue",
        "Purchase trains"
      ],
      ordered: true,
      optional: ["Purchase private companies"]
    }
  ],

  stock: {
    type: "2D",
    par: {
      values: [105, 90, 75, 70, 60]
    },
    movement: {
      up: ["Sold out"],
      down: ["Every share sold"],
      left: ["Withheld revenue"],
      right: ["Paid dividends"]
    },
    market: [
      [
        { label: 60, arrow: "down" },
        65,
        70,
        75,
        80,
        { label: 90, par: true },
        { label: 105, par: true },
        120,
        135,
        150,
        170,
        190,
        215,
        240,
        270,
        300
      ],
      [
        { label: 55, arrow: "down" },
        60,
        65,
        { label: 70, par: true },
        { label: 75, par: true },
        80,
        90,
        105,
        120,
        135,
        150,
        170,
        190,
        215,
        { label: 240, arrow: "up" }
      ],
      [
        { label: 50, legend: 0, arrow: "down" },
        55,
        { label: 60, par: true },
        65,
        70,
        75,
        80,
        90,
        105,
        120,
        135,
        150,
        { label: 170, arrow: "up" }
      ],
      [
        { label: 45, legend: 0, arrow: "down" },
        { label: 50, legend: 0 },
        55,
        60,
        65,
        70,
        75,
        80,
        90,
        105,
        { label: 120, arrow: "up" }
      ],
      [
        { label: 40, legend: 0, arrow: "down" },
        { label: 45, legend: 0 },
        { label: 50, legend: 0 },
        55,
        60,
        65,
        70,
        { label: 75, arrow: "up" }
      ],
      [
        { label: 35, legend: 0, arrow: "down" },
        { label: 40, legend: 0 },
        { label: 45, legend: 0 },
        { label: 50, legend: 0 },
        { label: 55, legend: 0, arrow: "up" }
      ],
      [
        { label: 30, legend: 0 },
        { label: 35, legend: 0 },
        { label: 40, legend: 0 },
        { label: 45, legend: 0 },
        { label: 50, legend: 0, arrow: "up" }
      ]
    ],
    legend: [
      {
        color: "yellow",
        description:
        "Shares of this corporation do not count toward the certificate limit",
        icon: "certificate"
      }
    ]
  },

  tiles: {
    // Yellow
    "3": 3,
    "4": 3,
    "5": 3,
    "6": 3,
    "7": 5,
    "8": 11,
    "9": 10,
    "57": 4,
    "58": 3,
    "441": 1,
    "445": 1,
    // Green
    "14": 4,
    "15": 4,
    "16": 1,
    "17": 1,
    "19": 1,
    "20": 1,
    "23": 4,
    "24": 4,
    "25": 1,
    "26": 1,
    "27": 1,
    "28": 1,
    "29": 1,
    "142": 2,
    "143": 2,
    "144": 2,
    "442": 1,
    "443": 1,
    // Brown
    "39": 1,
    "40": 1,
    "41": 3,
    "42": 3,
    "43": 2,
    "44": 1,
    "45": 2,
    "46": 2,
    "47": 2,
    "70": 1,
    "63": 7,
    "444": 2,
    // Gray
    "446": 1
  },

  map: {
    hexes: [
      {
        color: "plain",
        hexes: [
          "B1",
          "E2",
          "A4",
          "B5",
          "D5",
          "C6",
          "E6",
          "A8",
          "G8",
          "B9",
          "D9",
          "F9",
          "H9",
          "A10",
          "C10",
          "E10",
          "F11",
          "H11",
          "G12",
          "D13",
          "F13",
          "A14",
          "G14",
          "A16",
          "C16"
        ]
      },
      {
        color: "offboard",
        offBoardTrack: [{ side: 1 }, { side: 2 }],
        cities: [
          {
            companies: [
              {
                label: "L&N",
                color: "purple"
              }
            ],
            name: {
              name: "Nashville",
              bgColor: "offboard"
            }
          }
        ],
        offBoardRevenue: {
          angle: 180,
          percent: 0.75,
          revenues: [
            {
              color: "yellow",
              cost: "40"
            },
            {
              color: "brown",
              cost: "50"
            }
          ]
        },
        hexes: ["D1"]
      },
      {
        color: "offboard",
        offBoardTrack: [{ side: 6 }],
        offBoardRevenue: {
          name: {
            name: "Corinth"
          },
          revenues: [
            {
              color: "yellow",
              cost: "40"
            },
            {
              color: "brown",
              cost: "30"
            }
          ]
        },
        hexes: ["A2"]
      },
      {
        color: "offboard",
        offBoardTrack: [{ side: 2 }],
        offBoardRevenue: {
          name: {
            name: "Chattanooga"
          },
          revenues: [
            {
              color: "yellow",
              cost: "30"
            },
            {
              color: "brown",
              cost: "50"
            }
          ]
        },
        hexes: ["G2"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            angle: 180,
            percent: 0.333,
            name: {
              name: "Florence"
            }
          }
        ],
        water: {
          percent: 0.333,
          cost: "$20"
        },
        hexes: ["B3"]
      },
      {
        color: "plain",
        cities: [
          {
            angle: 180,
            percent: 0.25,
            name: {
              name: "Decatur"
            }
          }
        ],
        water: {
          percent: 0.5,
          cost: "$20"
        },
        hexes: ["D3"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            angle: 180,
            percent: 0.333,
            name: {
              name: "Stevenson"
            }
          }
        ],
        water: {
          percent: 0.333,
          cost: "$20"
        },
        hexes: ["F3"]
      },
      {
        color: "plain",
        borders: [{
          color: "water",
          side: 1
        }],
        hexes: ["C2"]
      },
      {
        color: "plain",
        borders: [{
          color: "water",
          side: 4
        }],
        water: {
          cost: "$20"
        },
        hexes: ["C4"]
      },
      {
        color: "plain",
        water: {
          cost: "$20"
        },
        hexes: ["B7", "C12", "B13", "C14", "E14", "B15", "D15", "E16"]
      },
      {
        color: "plain",
        water: {
          percent: 0.38
        },
        mountain: {
          angle: 180,
          percent: 0.13,
          cost: "$60"
        },
        hexes: ["E4"]
      },
      {
        color: "gray",
        track: [{ side: 1, type: "sharp" }],
        towns: [
          {
            rotation: -60,
            angle: 30,
            percent: 0.57735,
            name: {
              name: "Rome"
            }
          }
        ],
        values: [
          {
            angle: 210,
            percent: 0.25,
            value: 10
          }
        ],
        hexes: ["G4"]
      },
      {
        color: "yellow",
        cities: [
          {
            name: {
              name: "Gadsden",
              reverse: true
            },
            companies: [
              {
                label: "TAG",
                color: "yellow"
              }
            ]
          }
        ],
        values: [
          {
            value: 20,
            angle: 90,
            percent: 0.667
          }
        ],
        track: [{ side: 4 }, { side: 5 }],
        hexes: ["F5"]
      },
      {
        color: "gray",
        values: [
          {
            value: 30,
            angle: 90,
            percent: 0.667
          }
        ],
        cities: [
          {
            name: {
              name: "Tupelo"
            },
            companies: [
              {
                color: "black",
                label: "ATN"
              }
            ]
          }
        ],
        track: [{ side: 1 }, { side: 5 }, { side: 6 }],
        hexes: ["A6"]
      },
      {
        color: "plain",
        mountain: {
          cost: "$60"
        },
        hexes: ["G6"]
      },
      {
        color: "plain",
        mountain: {
          cost: "$60",
          angle: -30,
          percent: 0.5
        },
        cities: [
          {
            angle: 150,
            percent: 0.4,
            name: {
              name: "Birmingham"
            }
          }
        ],
        hexes: ["D7"]
      },
      {
        color: "plain",
        cities: [
          {
            name: {
              name: "Anniston"
            },
            companies: [
              {
                color: "darkGreen",
                label: "ABC"
              }
            ]
          }
        ],
        hexes: ["F7"]
      },
      {
        color: "offboard",
        offBoardTrack: [{ side: 1 }, { side: 2 }],
        offBoardRevenue: {
          name: {
            name: "Atlanta"
          },
          revenues: [
            {
              color: "yellow",
              cost: "40"
            },
            {
              color: "brown",
              cost: "70"
            }
          ]
        },
        hexes: ["H7"]
      },
      {
        color: "plain",
        cities: [
          {
            name: {
              name: "Tuscaloosa"
            }
          }
        ],
        hexes: ["C8"]
      },
      {
        color: "gray",
        cities: [{ name: { name: "Oxmoor" } }],
        values: [
          {
            value: 30,
            angle: 60,
            percent: 0.667
          }
        ],
        track: [{ side: 1 }, { side: 3 }, { side: 5 }],
        hexes: ["E8"]
      },
      {
        color: "plain",
        cities: [
          {
            name: {
              name: "West Point"
            }
          }
        ],
        hexes: ["G10"]
      },
      {
        color: "plain",
        cities: [
          {
            name: {
              name: "York"
            }
          }
        ],
        hexes: ["B11"]
      },
      {
        color: "yellow",
        values: [
          {
            value: 20,
            angle: 180,
            percent: 0.6
          }
        ],
        cities: [
          {
            percent: 0.3,
            name: {
              name: "Selma"
            }
          }
        ],
        track: [{ side: 6, type: "gentle" }],
        hexes: ["D11"]
      },
      {
        color: "gray",
        cities: [
          {
            size: 2,
            name: {
              name: "Meridian",
              offset: 25
            }
          }
        ],
        offBoardRevenue: {
          angle: 180,
          percent: 0.6,
          revenues: [
            {
              color: "yellow",
              cost: "30"
            },
            {
              color: "brown",
              cost: "40"
            }
          ]
        },
        track: [{ side: 1 }, { side: 4 }, { side: 5 }],
        hexes: ["A12"]
      },
      {
        color: "plain",
        cities: [
          {
            name: {
              name: "Montgomery"
            },
            companies: [
              {
                color: "red",
                label: "WRA"
              }
            ]
          }
        ],
        hexes: ["E12"]
      },
      {
        color: "gray",
        track: [{ side: 2, type: "sharp" }],
        towns: [
          {
            angle: 90,
            percent: 0.57735,
            name: {
              name: "Phenix City"
            }
          }
        ],
        values: [
          {
            angle: 270,
            percent: 0.25,
            value: 10
          }
        ],
        hexes: ["H13"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            name: {
              name: "Dothan"
            }
          }
        ],
        hexes: ["F15"]
      },
      {
        color: "offboard",
        offBoardTrack: [{ side: 3 }, { side: 4 }],
        offBoardRevenue: {
          reverse: true,
          name: {name: "Gulf of Mexico"},
          revenues: [
            {
              color: "yellow",
              cost: "30"
            },
            {
              color: "brown",
              cost: "40"
            }
          ]
        },
        hexes: ["G16"]
      },
      {
        color: "offboard",
        offBoardTrack: [{ side: 3 }, { side: 4 }, { side: 5 }],
        cities: [
          {
            companies: [
              {
                label: "M&O",
                color: "orange"
              }
            ],
            name: {
              name: "Mobile",
              bgColor: "offboard",
              reverse: true
            }
          }
        ],
        offBoardRevenue: {
          percent: 0.75,
          revenues: [
            {
              color: "yellow",
              cost: "40"
            },
            {
              color: "brown",
              cost: "50"
            }
          ]
        },
        hexes: ["B17"]
      }
    ]
  }
};

export default game;
