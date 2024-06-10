type ProjectModifierType =
  | 'Default'
  | 'Hybrid'
  | 'Icon'
  | 'Text'
  | 'Sublegend Hybrid'
  | 'Icon/Text Hybrid'
  | 'Text Hybrid'
  | 'Icon Alternate';

type ProjectSublegends =
  | 'None'
  | 'Katakana'
  | 'Hangul'
  | 'Hiragana'
  | 'Cyrillic'
  | 'Functional'
  | 'Icon';

export type VendorName =
  | 'Aiglatson Studio'
  | 'Angry Miao'
  | 'Ashkeebs'
  | 'Bowl Keyboards'
  | 'CandyKeys'
  | 'CannonKeys'
  | 'DailyClack'
  | 'Delta Key Co'
  | 'Deskhero'
  | 'Divinikey'
  | 'Drop'
  | 'EloquentClicks'
  | 'FancyCustoms'
  | 'Geonworks'
  | 'HIBI'
  | 'iLumkb'
  | 'Kbdfans'
  | 'Keebz n Cables'
  | 'Keygem'
  | 'ktechs'
  | 'MaxGaming'
  | 'MechMods'
  | 'MonacoKeys'
  | 'Monokei'
  | 'NovelKeys'
  | 'ProtoTypist'
  | 'Protozoa'
  | 'Rheset'
  | 'Sanyo'
  | 'SwagKeys'
  | 'SwitchKeys'
  | 'TORO Studio'
  | 'Vala'
  | 'Yushakobo'
  | 'zFrontier';

export interface ProjectVendor {
  region: string;
  name: VendorName;
  url: string;
}

export interface IProject {
  name: string;
  id: string;
  previewImages: string[];
  interestCheckUrl?: string;
  designer: string;
  materials?: string;
  modifiers: ProjectModifierType;
  sublegends: ProjectSublegends;
  colors: {
    main: string;
    legends: string[];
  };
  status: string;
  shipping?: string;
  vendors?: ProjectVendor[];
}

// import previewImageOneDark from './images/kap-one-dark.jpg';
// import previewImageActive from './images/kap-active.png';
// import previewImageCalculator from './images/kap-calculator.jpg';
// import previewImageDolch from './images/kap-dolch.png';
import previewImageGeneration from './images/kap-generation.jpg';
// import previewImageHarajuku from './images/kap-harajuku.png';
// import previewImageKawaii from './images/kap-kawaii.png';
// import previewImageMegaKeycaps from './images/kap-mega-keycaps.png';
import previewImageMvClassicDark from './images/kap-mv-classic-dark.jpg';
import previewImageMvClassicLight from './images/kap-mv-classic-light.jpg';
// import previewImagePX16 from './images/kap-px-16.png';
// import previewImageSuperKeycaps from './images/kap-super-keycaps.jpg';
import previewImageWhiteOnBlack from './images/kap-white-on-black.jpg';
// import previewImageWhiteRabbit from './images/kap-white-rabbit.png';
// import previewImageYaroze from './images/kap-yaroze.jpg';
// import previewImageYarozeNovelties from './images/kap-yaroze-novelties.jpg';
// import previewImageMatchpoint from './images/kap-matchpoint.jpg';
// import previewImageRebootWolf from './images/kap-reboot-wolf.jpg';
// import previewImageScuderiaTurismo from './images/kap-scuderia-turismo.jpg';

const KAP_MV_CLASSIC_VENDORS: ProjectVendor[] = [
  {
    region: 'US',
    name: 'CannonKeys',
    url: 'https://cannonkeys.com/products/kap-mv-classic',
  },
  {
    region: 'EU',
    name: 'MonacoKeys',
    url: 'https://monacokeys.de/en/collections/keycaps/products/kap-mv-classic-double-shot-pbt-keycap-set',
  },
  {
    region: 'UK',
    name: 'ProtoTypist',
    url: 'https://prototypist.net/products/group-buy-kap-mv-classic',
  },
  {
    region: 'Spain',
    name: 'EloquentClicks',
    url: 'https://eloquentclicks.com/collections/pbt-keycaps/products/kap-mv-classic-keycaps',
  },
  {
    region: 'Korea',
    name: 'SwagKeys',
    url: 'https://swagkeys.com/products/kap-mv-classic',
  },
  {
    region: 'Japan',
    name: 'Sanyo',
    url: 'https://sanyollc.com/search?q=kap&options%5Bprefix%5D=last',
  },
  {
    region: 'China',
    name: 'zFrontier',
    url: 'https://en.zfrontier.com/products/pre-order-kap-mv-classic',
  },
  {
    region: 'Singapore',
    name: 'ktechs',
    url: 'https://ktechs.store/products/kap-mv-classic',
  },
  {
    region: 'Oceania',
    name: 'Keebz n Cables',
    url: 'https://www.keebzncables.com/products/kap-mv-classic-keycaps',
  },
  {
    region: 'Thailand',
    name: 'Aiglatson Studio',
    url: 'https://aiglatsonstudio.com/search?q=kap&type=product',
  },
  {
    region: 'Europe',
    name: 'MaxGaming',
    url: 'https://www.maxgaming.com/search?q=kap',
  },
];

export const projects: Array<IProject> = [
  {
    name: 'KAP Generation',
    id: 'kap-generation',
    previewImages: [previewImageGeneration],
    designer: 'kapowaz',
    materials: 'ABS/PBT',
    modifiers: 'Default',
    sublegends: 'None',
    colors: { main: '#3C1F1B', legends: ['#DD7869'] },
    status: 'Shipped',
    vendors: [
      {
        region: 'EU',
        name: 'MonacoKeys',
        url: 'https://monacokeys.de/en/collections/keycaps/products/kap-generation-cherry-profile-abs-pbt-double-shot-keycap-set',
      },
      {
        region: 'US',
        name: 'CannonKeys',
        url: 'https://cannonkeys.com/products/kap-generation',
      },
      {
        region: 'UK',
        name: 'ProtoTypist',
        url: 'https://prototypist.net/products/in-stock-kap-generation',
      },
      {
        region: 'Spain',
        name: 'EloquentClicks',
        url: 'https://eloquentclicks.com/collections/pbt-keycaps/products/kap-generation-keycaps',
      },
      {
        region: 'China',
        name: 'zFrontier',
        url: 'https://en.zfrontier.com/products/in-stock-kap-generation',
      },
      {
        region: 'China',
        name: 'Angry Miao',
        url: 'https://store.angrymiao.com/products/kap-generation',
      },
      {
        region: 'Korea',
        name: 'SwagKeys',
        url: 'https://swagkeys.com/products/kap-generation-keycap',
      },
      {
        region: 'Singapore',
        name: 'ktechs',
        url: 'https://ktechs.store/products/kap-generation',
      },
      {
        region: 'Japan',
        name: 'Yushakobo',
        url: 'https://shop.yushakobo.jp/products/10463',
      },
      {
        region: 'Oceania',
        name: 'TORO Studio',
        url: 'https://www.torokeeb.store/product/pre-order-kap-generation',
      },
    ],
  },
  {
    name: 'KAP White on Black',
    id: 'kap-white-on-black',
    previewImages: [previewImageWhiteOnBlack],
    designer: 'kapowaz',
    materials: 'PBT',
    modifiers: 'Default',
    sublegends: 'None',
    colors: {
      main: '#000000',
      legends: ['#FFFFFF', '#FF675D', '#FEBC4A', '#6CEE2B', '#63CDEE', '#B067FF'],
    },
    status: 'Shipped',
    vendors: [
      {
        region: 'US',
        name: 'CannonKeys',
        url: 'https://cannonkeys.com/products/kap-wob',
      },
      {
        region: 'EU',
        name: 'MonacoKeys',
        url: 'https://monacokeys.de/en/collections/keycaps/products/kap-white-on-black-double-shot-pbt-keycap-set',
      },
      {
        region: 'UK',
        name: 'ProtoTypist',
        url: 'https://prototypist.net/products/pre-order-kap-wob-keyset',
      },
      {
        region: 'Spain',
        name: 'EloquentClicks',
        url: 'https://eloquentclicks.com/collections/keycaps/products/kap-wob-keycaps',
      },
      {
        region: 'Korea',
        name: 'SwagKeys',
        url: 'https://swagkeys.com/search?q=kap',
      },
      {
        region: 'Japan',
        name: 'Sanyo',
        url: 'https://sanyollc.com/products/keyreative-wob-keycaps',
      },
      {
        region: 'China',
        name: 'zFrontier',
        url: 'https://en.zfrontier.com/products/pre-order-kap-wob-white-on-black',
      },
      {
        region: 'Singapore',
        name: 'ktechs',
        url: 'https://ktechs.store/products/kap-wob',
      },
      {
        region: 'Oceania',
        name: 'Keebz n Cables',
        url: 'https://www.keebzncables.com/products/pre-order-kap-wob',
      },
      {
        region: 'Thailand',
        name: 'Aiglatson Studio',
        url: 'https://aiglatsonstudio.com/search?q=kap&type=product',
      },
      {
        region: 'Europe',
        name: 'MaxGaming',
        url: 'https://www.maxgaming.com/search?q=kap',
      },
    ],
  },
  {
    name: 'KAP MV Classic Light',
    id: 'kap-mv-classic-light',
    previewImages: [previewImageMvClassicLight],
    designer: 'kapowaz & maxvoltar',
    modifiers: 'Sublegend Hybrid',
    sublegends: 'Functional',
    colors: {
      main: '#ECE5DA',
      legends: [
        '#000000',
        '#A59E97',
        '#957A59',
        '#C66018',
        '#446E3D',
        '#B63830',
        '#376C99',
        '#885595',
      ],
    },
    status: 'Pre-order',
    shipping: 'Late 2025',
    vendors: KAP_MV_CLASSIC_VENDORS,
  },
  {
    name: 'KAP MV Classic Dark',
    id: 'kap-mv-classic-dark',
    previewImages: [previewImageMvClassicDark],
    designer: 'kapowaz & maxvoltar',
    modifiers: 'Sublegend Hybrid',
    sublegends: 'Functional',
    colors: {
      main: '#59544C',
      legends: [
        '#A59E97',
        '#4E483D',
        '#8A7C6A',
        '#B9703C',
        '#5F8259',
        '#B35C56',
        '#4D7EA8',
        '#906D97',
      ],
    },
    status: 'Pre-order',
    shipping: 'Late 2025',
    vendors: KAP_MV_CLASSIC_VENDORS,
  },
  // {
  //   name: 'KAP Yarōze',
  //   id: 'kap-yaroze',
  //   previewImages: [previewImageYaroze, previewImageYarozeNovelties],
  //   designer: 'kapowaz',
  //   modifiers: 'Default',
  //   sublegends: 'Hiragana',
  //   colors: {
  //     main: '#1E1E1E',
  //     legends: ['#2E2E2E', '#404040', '#DD8AD1', '#F05951', '#47D0C5', '#9BBAEF'],
  //   },
  //   status: 'Colour Matching',
  // },

  // {
  //   name: 'KAP One Dark',
  //   id: 'kap-one-dark',
  //   previewImages: [previewImageOneDark],
  //   designer: 'kapowaz',
  //   modifiers: 'Default',
  //   sublegends: 'None',
  //   colors: {
  //     main: '#181d27ff',
  //     legends: ['#818896', '#FF73DC', '#FF675D', '#FFA544', '#FEBC4A', '#A7F038', '#63CDEE'],
  //   },
  //   status: 'Design',
  // },
  // {
  //   name: 'KAP Reboot Wolf',
  //   id: 'kap-reboot-wolf',
  //   previewImages: [previewImageRebootWolf],
  //   designer: 'kapowaz',
  //   modifiers: 'Default',
  //   sublegends: 'Katakana',
  //   colors: {
  //     main: '#343627',
  //     legends: ['#68647D', '#F36925'],
  //   },
  //   status: 'Design',
  // },
  // {
  //   name: 'KAP Matchpoint',
  //   id: 'kap-matchpoint',
  //   previewImages: [previewImageMatchpoint],
  //   designer: 'kapowaz',
  //   modifiers: 'Icon Alternate',
  //   sublegends: 'None',
  //   colors: {
  //     main: '#00381A',
  //     legends: ['#2F0550', '#E1FF1E', '#FFFFFF'],
  //   },
  //   status: 'Design',
  // },
  // {
  //   name: 'KAP Scuderia Turismo',
  //   id: 'kap-scuderia-turismo',
  //   previewImages: [previewImageScuderiaTurismo],
  //   designer: 'kapowaz',
  //   modifiers: 'Icon/Text Hybrid',
  //   sublegends: 'None',
  //   colors: {
  //     main: '#D52B1E',
  //     legends: ['#000000', '#FECB00', '#FFFFFF'],
  //   },
  //   status: 'Design',
  // },
  // {
  //   name: 'KAP Super Keycaps',
  //   id: 'kap-super-keycaps',
  //   previewImages: [previewImageSuperKeycaps],
  //   designer: 'kapowaz',
  //   modifiers: 'Default',
  //   sublegends: 'Katakana',
  //   colors: {
  //     main: '#C6C0B9',
  //     legends: ['#404040', '#83807C', '#C1121C', '#F7BA0B', '#007243', '#00387B'],
  //   },
  //   status: 'Design',
  // },
  // {
  //   name: 'KAP Calculator',
  //   id: 'kap-calculator',
  //   previewImages: [previewImageCalculator],
  //   designer: 'kapowaz',
  //   modifiers: 'Default',
  //   sublegends: 'None',
  //   colors: {
  //     main: '#000000',
  //     legends: ['#FFFFFF', '#EB9E47', '#151E18', '#2C2421'],
  //   },
  //   status: 'Design',
  // },
  // {
  //   name: 'KAP Active',
  //   id: 'kap-active',
  //   previewImages: [previewImageActive],
  //   designer: 'kapowaz',
  //   modifiers: 'Default',
  //   sublegends: 'None',
  //   colors: {
  //     main: '#000000',
  //     legends: ['#FFFFFF', '#CE0032', '#B2E517', '#1FBBDA'],
  //   },
  //   status: 'Design',
  // },
  // {
  //   name: 'KAP White Rabbit',
  //   id: 'kap-white-rabbit',
  //   previewImages: [previewImageWhiteRabbit],
  //   designer: 'kapowaz',
  //   modifiers: 'Default',
  //   sublegends: 'Hangul',
  //   colors: {
  //     main: '#141D0C',
  //     legends: ['#B4FF76'],
  //   },
  //   status: 'Design',
  // },
  // {
  //   name: 'KAP Mega Keycaps',
  //   id: 'kap-mega-keycaps',
  //   previewImages: [previewImageMegaKeycaps],
  //   designer: 'kapowaz',
  //   modifiers: 'Default',
  //   sublegends: 'Katakana',
  //   colors: {
  //     main: '#6E6968',
  //     legends: ['#D0CAC8', '#F1D083', '#9C4A40', '#3C3939'],
  //   },
  //   status: 'Design',
  // },
  // {
  //   name: 'KAP Kawaii',
  //   id: 'kap-kawaii',
  //   previewImages: [previewImageKawaii],
  //   designer: 'kapowaz',
  //   modifiers: 'Default',
  //   sublegends: 'Hiragana',
  //   colors: {
  //     main: '#F7E5CA',
  //     legends: ['#F4B24F', '#F895B6'],
  //   },
  //   status: 'Design',
  // },
  // {
  //   name: 'KAP PX-16',
  //   id: 'kap-px-16',
  //   previewImages: [previewImagePX16],
  //   designer: 'kapowaz',
  //   modifiers: 'Icon/Text Hybrid',
  //   sublegends: 'Functional',
  //   colors: {
  //     main: '#E4DAD7',
  //     legends: ['#000000', '#8D96B5', '#F3A474'],
  //   },
  //   status: 'Design',
  // },
  // {
  //   name: 'KAP Harajuku',
  //   id: 'kap-harajuku',
  //   previewImages: [previewImageHarajuku],
  //   designer: 'kapowaz',
  //   modifiers: 'Default',
  //   sublegends: 'Hiragana',
  //   colors: {
  //     main: '#23103C',
  //     legends: ['#B183EC', '#924DEA'],
  //   },
  //   status: 'Design',
  // },
  // {
  //   name: 'KAP Dolch',
  //   id: 'kap-dolch',
  //   previewImages: [previewImageDolch],
  //   designer: 'kapowaz',
  //   modifiers: 'Icon/Text Hybrid',
  //   sublegends: 'None',
  //   colors: {
  //     main: '#74797B',
  //     legends: ['#FFFFFF', '#3E3F42', '#C64E61', '#2CAFA8'],
  //   },
  //   status: 'Design',
  // },
];
