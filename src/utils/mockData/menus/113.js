const resMenu = {
  data: {
    cards: [
      {
        card: {
          card: {
            info: {
              id: "113",
              name: "Pizza Hut",
              cuisines: ["Pizzas", "Italian", "Fast Food", "Desserts"],
              costForTwoMessage: "₹350 for two",
            },
          },
        },
      },

      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [

                // ================= RECOMMENDED =================

                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",

                      title: "Recommended",

                      itemCards: [

                        {
                          card: {
                            info: {
                              id: "114716721",
                              name: "Margherita",
                              description:
                                "Classic mozzarella cheese pizza with signature Pizza Hut sauce.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2026/1/5/41b56b0c-c864-4081-8c9c-ed4585cb3a5c_e725dfb8-341d-4ef3-9914-e7a2634187aa.jpg",
                              price: 16900,
                            },
                          },
                        },

                        {
                          card: {
                            info: {
                              id: "23372845",
                              name: "Veggie Feast",
                              description:
                                "Sweet corn, onion, capsicum and mozzarella loaded pizza.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2026/1/5/185b654c-4ff2-42ca-991e-11caf0781cb5_9fd71142-80db-4471-bec2-f80db3b1e08f.jpg",
                              price: 26900,
                            },
                          },
                        },

                        {
                          card: {
                            info: {
                              id: "21001003",
                              name: "Tandoori Paneer Pizza",
                              description:
                                "Spicy paneer tikka cubes with onion and capsicum.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/10/12/paneerpizza.jpg",
                              price: 34900,
                            },
                          },
                        },

                        {
                          card: {
                            info: {
                              id: "21001004",
                              name: "Mexican Green Wave",
                              description:
                                "Loaded with jalapeno, onion and crunchy veggies.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/10/12/mexicanpizza.jpg",
                              price: 32900,
                            },
                          },
                        },

                      ],
                    },
                  },
                },

                // ================= VEG PIZZAS =================

                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",

                      title: "Veg Pizzas",

                      itemCards: [

                        {
                          card: {
                            info: {
                              id: "21001005",
                              name: "Double Cheese Margherita",
                              description:
                                "Extra cheesy margherita pizza with rich mozzarella.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/10/12/doublecheese.jpg",
                              price: 28900,
                            },
                          },
                        },

                        {
                          card: {
                            info: {
                              id: "21001006",
                              name: "Farmhouse Pizza",
                              description:
                                "Mushroom, onion, tomato and capsicum delight.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/10/12/farmhouse.jpg",
                              price: 34900,
                            },
                          },
                        },

                        {
                          card: {
                            info: {
                              id: "21001007",
                              name: "Corn & Cheese Pizza",
                              description:
                                "Sweet corn pizza with creamy cheese topping.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/10/12/cornpizza.jpg",
                              price: 27900,
                            },
                          },
                        },

                        {
                          card: {
                            info: {
                              id: "21001008",
                              name: "Paneer Supreme Pizza",
                              description:
                                "Loaded with paneer cubes and spicy sauces.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/10/12/paneersupreme.jpg",
                              price: 38900,
                            },
                          },
                        },

                        {
                          card: {
                            info: {
                              id: "21001009",
                              name: "Veggie Lover Pizza",
                              description:
                                "Loaded with crunchy fresh vegetables.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/10/12/veggielover.jpg",
                              price: 35900,
                            },
                          },
                        },

                        {
                          card: {
                            info: {
                              id: "21001010",
                              name: "Cheese Max Pizza",
                              description:
                                "Ultimate cheese overload pizza.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/10/12/cheesemax.jpg",
                              price: 41900,
                            },
                          },
                        },

                      ],
                    },
                  },
                },

                // ================= NON VEG PIZZAS =================

                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",

                      title: "Non Veg Pizzas",

                      itemCards: [

                        {
                          card: {
                            info: {
                              id: "21001011",
                              name: "Chicken Pepperoni Pizza",
                              description:
                                "Loaded with juicy chicken pepperoni slices.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/10/12/pepperoni.jpg",
                              price: 42900,
                            },
                          },
                        },

                        {
                          card: {
                            info: {
                              id: "21001012",
                              name: "Chicken Supreme Pizza",
                              description:
                                "Chicken chunks with cheese and veggies.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/10/12/chickensupreme.jpg",
                              price: 44900,
                            },
                          },
                        },

                        {
                          card: {
                            info: {
                              id: "21001013",
                              name: "Spicy Chicken Pizza",
                              description:
                                "Hot spicy chicken pizza with jalapenos.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/10/12/spicychicken.jpg",
                              price: 39900,
                            },
                          },
                        },

                        {
                          card: {
                            info: {
                              id: "21001014",
                              name: "BBQ Chicken Pizza",
                              description:
                                "Smoky barbecue chicken and cheese pizza.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/10/12/bbqchicken.jpg",
                              price: 46900,
                            },
                          },
                        },

                      ],
                    },
                  },
                },

                // ================= SIDES =================

                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",

                      title: "Sides & Garlic Bread",

                      itemCards: [

                        {
                          card: {
                            info: {
                              id: "21001015",
                              name: "Classic Garlic Bread",
                              description:
                                "Freshly baked buttery garlic bread.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/10/12/garlicbread.jpg",
                              price: 11900,
                            },
                          },
                        },

                        {
                          card: {
                            info: {
                              id: "21001016",
                              name: "Cheese Garlic Bread",
                              description:
                                "Garlic bread topped with melted cheese.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/10/12/cheesygarlic.jpg",
                              price: 15900,
                            },
                          },
                        },

                        {
                          card: {
                            info: {
                              id: "21001017",
                              name: "Potato Pops",
                              description:
                                "Crispy potato bites with seasoning.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/10/12/potatopops.jpg",
                              price: 9900,
                            },
                          },
                        },

                        {
                          card: {
                            info: {
                              id: "21001018",
                              name: "Cheesy Dip",
                              description:
                                "Creamy cheese dip for sides and crusts.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/10/12/cheesydip.jpg",
                              price: 4900,
                            },
                          },
                        },

                        {
                          card: {
                            info: {
                              id: "21001019",
                              name: "Veg Pasta",
                              description:
                                "Creamy white sauce pasta with veggies.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/10/12/vegpasta.jpg",
                              price: 19900,
                            },
                          },
                        },

                      ],
                    },
                  },
                },

                // ================= COMBOS =================

                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",

                      title: "Meals & Combos",

                      itemCards: [

                        {
                          card: {
                            info: {
                              id: "21001020",
                              name: "Meal for One Veg",
                              description:
                                "Personal veg pizza + garlic bread + pepsi.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/10/12/vegcombo.jpg",
                              price: 32900,
                            },
                          },
                        },

                        {
                          card: {
                            info: {
                              id: "21001021",
                              name: "Meal for One Chicken",
                              description:
                                "Chicken pizza combo with sides and beverage.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/10/12/chickencombo.jpg",
                              price: 39900,
                            },
                          },
                        },

                        {
                          card: {
                            info: {
                              id: "21001022",
                              name: "Family Feast Combo",
                              description:
                                "2 medium pizzas + garlic bread + pepsi.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/10/12/familycombo.jpg",
                              price: 89900,
                            },
                          },
                        },

                      ],
                    },
                  },
                },

                // ================= DESSERTS =================

                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",

                      title: "Desserts & Beverages",

                      itemCards: [

                        {
                          card: {
                            info: {
                              id: "21001023",
                              name: "Chocolate Lava Cake",
                              description:
                                "Warm chocolate cake with gooey center.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/10/12/lavacake.jpg",
                              price: 10900,
                            },
                          },
                        },

                        {
                          card: {
                            info: {
                              id: "21001024",
                              name: "Choco Sundae",
                              description:
                                "Vanilla ice cream topped with chocolate sauce.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/10/12/sundae.jpg",
                              price: 9900,
                            },
                          },
                        },

                        {
                          card: {
                            info: {
                              id: "21001025",
                              name: "Pepsi 500ml",
                              description:
                                "Refreshing cold beverage.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/10/12/pepsi.jpg",
                              price: 6000,
                            },
                          },
                        },

                        {
                          card: {
                            info: {
                              id: "21001026",
                              name: "Cold Coffee",
                              description:
                                "Chilled creamy cold coffee.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/10/12/coldcoffee.jpg",
                              price: 12900,
                            },
                          },
                        },

                      ],
                    },
                  },
                },

              ],
            },
          },
        },
      },
    ],
  },
};

export default resMenu;