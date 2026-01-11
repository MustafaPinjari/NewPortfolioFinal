export type WorkTile = {
  title: string;
  description: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
};

export const workTiles: WorkTile[] = [
  {
    description: `Here are things`,
    title: `I've worked on`,
    image: {
      src: '/static/images/project/OverAll.png',
      width: 1200,
      height: 1500,
    },
  },
  {
    description: 'I built',
    title: 'Infinite Tsukuyomi',
    image: {
      src: '/static/images/project/IT.png',
      width: 1600,
      height: 1800,
    },
  },
  {
    description: `I maintained`,
    title: 'Emit',
    image: {
      src: '/static/images/project/Emit.png',
      width: 1200,
      height: 1400,
    },
  },
  {
    description: `I built`,
    title: 'Guesture Flow',
    image: {
      src: '/static/images/project/GF.png',
      width: 1200,
      height: 1400,
    },
  },
  {
    description: `I built`,
    title: 'NextGenCV',
    image: {
      src: '/static/images/project/NextGenCV.png',
      width: 1200,
      height: 1400,
    },
  },
  {
    description: `I built`,
    title: 'ExoPlanet',
    image: {
      src: '/static/images/project/EP.png',
      width: 1200,
      height: 1400,
    },
  },
  {
    description: `I built`,
    title: 'RetroGames',
    image: {
      src: '/static/images/project/RG.png',
      width: 1200,
      height: 1400,
    },
  },
];
