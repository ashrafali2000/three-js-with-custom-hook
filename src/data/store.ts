export const store: any = [
  {
    type: "image",
    toneMapped: false,
    position: [2, 0, -1],
    color: { r: 0.5, g: 0.5, b: 0.6, intensity: 2 },
    url: "/assets/360/Glen Moray House Stop-Off The Magi.png",
    bgUrl: "/assets/images/bg-360-1.png",
    cards: [
      {
        icon: true,
        position: [200, 10, 400],
        link: 1,
      },
      {
        name: "the creation",
        url: "/assets/360Buttons/the creation.png",
        position: [-400, -20, 220],
        popupName: "popupTheCreation",
        popup: true,
      },
    ],
  },
  {
    type: "image",
    toneMapped: false,
    position: [500, 0, -1],
    color: { r: 1.2, g: 1.2, b: 1.2, intensity: 0.8 },
    url: "/assets/360/inbetween tasting room and lab 360.png",
    bgUrl: "/assets/images/bg-360-2.png",
    cards: [
      {
        icon: true,
        position: [500, 0, 100],
        link: 0,
      },
      {
        icon: true,
        position: [-170, 0, 500],
        link: 2,
      },
      {
        name: "the crest",
        url: "/assets/360Buttons/the crest.png",
        position: [-600, 10, 250],
        popupName: "popupTheCrest",
        popup: true,
      },
      {
        name: "vip experience",
        url: "/assets/360Buttons/vip experience.png",
        position: [-600, 10, -250],
        popupName: "popup-VIP-Experience",
        popup: true,
      },
    ],
  },
  {
    type: "image",
    toneMapped: true,
    position: [20, 0, -55],
    color: { r: 1, g: 1, b: 0.8, intensity: 1 },
    url: "/assets/360/Glen Moray House Stop-Off Where It Bega.png",
    bgUrl: "/assets/images/bg-360-3.png",
    cards: [
      {
        name: "image3",
        icon: true,
        position: [250, 10, -300],
        link: 1,
      },
      {
        name: "glen moray art",
        url: "/assets/360Buttons/glen moray art.png",
        position: [150, 10, 580],
        popupName: "popupGlenMorayArt",
        popup: true,
      },
      {
        name: "our story",
        url: "/assets/360Buttons/our story.png",
        position: [-300, 5, 220],
        popupName: "popupOurStory",
        popup: true,
      },
    ],
  },
];
