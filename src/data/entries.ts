export type Category = "console" | "character" | "powerup";

export interface Entry {
  slug: string;
  category: Category;
  title: string;
  description: string;
  image: string;
  gallery?: string[];
}

export const entries: Entry[] = [
  // --- Consoles ---
  {
    slug: "nintendo-switch",
    category: "console",
    title: "Nintendo Switch",
    description:
      "Released in March 2017, the Nintendo Switch is a hybrid home/portable console. You can play it on your TV or take it on the go as a handheld. It has become one of Nintendo's best-selling consoles of all time and is home to many great Mario titles.",
    image: "/images/switch.webp",
    gallery: ["/images/switch.webp"],
  },
  {
    slug: "nintendo-ds",
    category: "console",
    title: "Nintendo DS",
    description:
      "The Nintendo DS, released in 2004, is a dual-screen handheld console with a touchscreen on the bottom. It was a massive success for Nintendo and featured many beloved Mario games, including New Super Mario Bros. and Mario Kart DS.",
    image: "/images/nintendo_ds.webp",
    gallery: ["/images/nintendo_ds.webp"],
  },
  {
    slug: "wii",
    category: "console",
    title: "Wii",
    description:
      "The Nintendo Wii was released in 2006 and introduced motion controls to the living room. It was a cultural phenomenon and home to classics like Super Mario Galaxy and New Super Mario Bros. Wii.",
    image: "/images/wii.webp",
    gallery: ["/images/wii.webp"],
  },

  // --- Characters ---
  {
    slug: "main-characters",
    category: "character",
    title: "Main Characters",
    description:
      "The Mario franchise has a cast of beloved main characters. Mario is the heroic plumber who always saves the day. His brother Luigi often joins him on adventures. Princess Peach is the ruler of the Mushroom Kingdom and the one most often in need of rescuing. Toad is her loyal servant.",
    image: "/images/mario.webp",
    gallery: ["/images/mario.webp", "/images/luigi.webp", "/images/peach.webp", "/images/toad.webp"],
  },
  {
    slug: "monsters-and-villains",
    category: "character",
    title: "Monsters & Villains",
    description:
      "The Mushroom Kingdom is full of dangerous creatures. Bowser, the King of the Koopas, is Mario's arch-nemesis and the most recurring villain. Goombas are the most common foot soldiers, while Koopa Troopas are shelled enemies that can be flipped and used as projectiles.",
    image: "/images/bowser.webp",
    gallery: ["/images/bowser.webp", "/images/goomba.webp", "/images/koopa-troopa.webp"],
  },

  // --- Power-ups ---
  {
    slug: "flower-powerups",
    category: "powerup",
    title: "Flower Power-ups",
    description:
      "The Fire Flower is one of the most iconic power-ups in the franchise. When Mario picks one up, he gains the ability to throw fireballs at enemies. The Ice Flower, introduced later in the series, lets Mario throw balls of ice that freeze enemies solid.",
    image: "/images/fireflower.webp",
    gallery: ["/images/fireflower.webp", "/images/ice_flower.webp"],
  },

  {
    slug: "mushroom-powerups",
    category: "powerup",
    title: "Mushroom Power-ups",
    description:
      "The Super Mushroom is the very first power-up in the series. It doubles Mario's size, turning him into Super Mario, which lets him break brick blocks and take an extra hit. The Mini Mushroom does the opposite— it shrinks Mario so he can access tiny passages.",
    image: "/images/mini_mushroom.webp",
    gallery: ["/images/mushroom.webp", "/images/mini_mushroom.webp"],
  },
  {
    slug: "special-powerups",
    category: "powerup",
    title: "Special Power-ups",
    description:
      "The Super Star makes Mario temporarily invincible, defeating any enemy on contact. The Tanooki Suit from Super Mario Bros. 3 lets Mario fly and turn into a statue. The Cat Bell from Super Mario 3D World lets Mario climb walls and pounce at enemies.",
    image: "/images/super-star.webp",
    gallery: ["/images/super-star.webp", "/images/tanooki-leaf.webp", "/images/cat-bell.webp"],
  },
];

export const categoryLabel: Record<Category, string> = {
  console: "Console",
  character: "Character",
  powerup: "Power-up",
};
