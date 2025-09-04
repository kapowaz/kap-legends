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
  | 'Keyreative'
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

import previewImageOneDark from './images/kap-one-dark.jpg';
import previewImageActive from './images/kap-active.png';
import previewImageCalculator from './images/kap-calculator.jpg';
import previewImageDisconnectedDark from './images/kap-disconnected-dark.jpg';
import previewImageDolch from './images/kap-dolch.png';
import previewImageGeneration from './images/kap-generation.jpg';
import previewImageHarajuku from './images/kap-harajuku.png';
import previewImageKawaii from './images/kap-kawaii.png';
import previewImageMegaKeycaps from './images/kap-mega-keycaps.png';
import previewImageMidas from './images/kap-midas-black-alphas.jpg';
import previewImageMvClassicDark from './images/kap-mv-classic-dark.jpg';
import previewImageMvClassicLight from './images/kap-mv-classic-light.jpg';
import previewImageNightscape from './images/kap-nightscape.jpg';
import previewImagePX16 from './images/kap-px-16.png';
import previewImageRetroLightsR2 from './images/kap-retro-lights-r2.jpg';
import previewImageSuperKeycaps from './images/kap-super-keycaps.jpg';
import previewImageTechnocraft from './images/kap-technocraft.jpg';
import previewImageTerrazzo from './images/kap-terrazzo.jpg';
import previewImageTot from './images/kap-tot.jpg';
import previewImageWhiteOnBlack from './images/kap-white-on-black.jpg';
import previewImageWhiteRabbit from './images/kap-white-rabbit.png';
import previewImageYaroze from './images/kap-yaroze.jpg';
import previewImageYarozeNovelties from './images/kap-yaroze-novelties.jpg';
import previewImageY from './images/kap-y.jpg';
import previewImageGlyphEdius from './images/kap-glyph-edius.jpg';
import previewImageGreyAlert from './images/kap-grey-alert.jpg';
import previewImageMatchpoint from './images/kap-matchpoint.jpg';
import previewImageRebootWolf from './images/kap-reboot-wolf.jpg';
import previewImageScuderiaTurismo from './images/kap-scuderia-turismo.jpg';
import previewImageBuffBride from './images/kap-buff-bride.jpg';
import previewImageSantaLlumNaixement from './images/kap-santa-llum-naixement.jpg';
import previewImageSantaLlumResurreccio from './images/kap-santa-llum-resurreccio.jpg';

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
    name: 'Keyreative',
    url: 'https://keyreative.store/products/kap-mv-classic-keycaps',
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
    interestCheckUrl: 'https://geekhack.org/index.php?topic=124004.0',
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
        name: 'Keyreative',
        url: 'https://keyreative.store/products/kap-generation-keycaps',
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
    name: 'KAP Disconnected Dark',
    id: 'kap-disconnected-dark',
    previewImages: [previewImageDisconnectedDark],
    designer: 'KasperL',
    modifiers: 'Hybrid',
    sublegends: 'None',
    colors: {
      main: '#666666',
      legends: ['#000000', '#3A39BC'],
    },
    status: 'Shipped',
    vendors: [
      {
        region: 'EU',
        name: 'MonacoKeys',
        url: 'https://monacokeys.de/en/collections/cherry-profile-keycap-sets/products/monacokeys-kap-disconnected-dark-keycap-set',
      },
      {
        region: 'US',
        name: 'CannonKeys',
        url: 'https://cannonkeys.com/products/kap-disconnected-dark/',
      },
      {
        region: 'UK',
        name: 'MechMods',
        url: 'https://www.mechmods.co.uk/products/kap-disconnected-dark-pbt-keycaps-1',
      },
      {
        region: 'Spain',
        name: 'EloquentClicks',
        url: 'https://eloquentclicks.com/collections/keycaps/products/kap-disconnected-dark-keycaps',
      },
      {
        region: 'China',
        name: 'Keyreative',
        url: 'https://keyreative.store/products/kap-disconnected-dark-cherry-profile-keycaps',
      },
      // {
      //   region: 'Korea',
      //   name: 'Geonworks',
      //   url: 'https://geon.works/',
      // },
      // {
      //   region: 'Singapore',
      //   name: 'iLumkb',
      //   url: 'https://ilumkb.com/collections/keycap',
      // },
      {
        region: 'Japan',
        name: 'Yushakobo',
        url: 'https://shop.yushakobo.jp/products/10545',
      },
    ],
  },
  {
    name: 'KAP Midas',
    id: 'kap-midas',
    previewImages: [previewImageMidas],
    designer: 'Manu',
    modifiers: 'Text',
    sublegends: 'None',
    colors: {
      main: '#000000',
      legends: ['#8C724D', '#EBE9E7'],
    },
    status: 'Shipped',
    vendors: [
      {
        region: 'EU',
        name: 'Bowl Keyboards',
        url: 'https://bowlkeyboards.com/collections/keycaps/products/kap-midas',
      },
      {
        region: 'UK',
        name: 'ProtoTypist',
        url: 'https://prototypist.net/products/in-stock-kap-midas-keycaps',
      },
      {
        region: 'China',
        name: 'Keyreative',
        url: 'https://keyreative.store/products/kap-midas-cherry-profile-keycaps',
      },
      {
        region: 'EU',
        name: 'Delta Key Co',
        url: 'https://deltakeyco.com/collections/keycaps/products/kap-midas-keycaps',
      },
      {
        region: 'Korea',
        name: 'SwagKeys',
        url: 'https://swagkeys.com/products/kap-midas-keycaps',
      },
      {
        region: 'Oceania',
        name: 'Keebz n Cables',
        url: 'https://www.keebzncables.com/products/kap-midas-keycaps',
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
        name: 'Keyreative',
        url: 'https://keyreative.store/products/kap-wob-cherry-profile-keycaps',
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
  {
    name: 'KAP Theatrum Orbis Terrarum',
    id: 'kap-tot',
    previewImages: [previewImageTot],
    interestCheckUrl: 'https://geekhack.org/index.php?topic=124263.0',
    designer: 'Keepo',
    colors: {
      main: '#aaa69d',
      legends: ['#000000', '#3b282a', '#2d2f3c', '#343e36', '#817366'],
    },
    modifiers: 'Text',
    sublegends: 'None',
    status: 'Pre-order',
  },
  {
    name: 'KAP Retro Lights R2',
    id: 'kap-retro-lights-r2',
    previewImages: [previewImageRetroLightsR2],
    designer: 'Jr.Mars',
    modifiers: 'Text',
    sublegends: 'None',
    colors: {
      main: '#cac9c5',
      legends: ['#000000', '#25bd59', '#048cd8', '#ffbf3f', '#ff665e', '#a564b6', '#ab60bd'],
    },
    status: 'Manufacturing',
    shipping: 'October 2025',
  },
  {
    name: 'KAP Yarōze',
    id: 'kap-yaroze',
    previewImages: [previewImageYaroze, previewImageYarozeNovelties],
    designer: 'kapowaz',
    modifiers: 'Default',
    sublegends: 'Hiragana',
    colors: {
      main: '#1E1E1E',
      legends: ['#2E2E2E', '#404040', '#DD8AD1', '#F05951', '#47D0C5', '#9BBAEF'],
    },
    status: 'Colour Matching',
  },
  {
    name: 'KAP Glyph Edius',
    id: 'kap-glyph-edius',
    previewImages: [previewImageGlyphEdius],
    designer: 'SS',
    modifiers: 'Default',
    sublegends: 'Icon',
    colors: {
      main: '#a19d92',
      legends: ['#000000', '#909bd9', '#ae6b7c', '#e5c02b', '#7d796d', '#368d8c'],
    },
    status: 'Design',
  },
  {
    name: 'KAP Grey Alert',
    id: 'kap-grey-alert',
    previewImages: [previewImageGreyAlert],
    designer: 'KasperL',
    modifiers: 'Default',
    sublegends: 'None',
    colors: {
      main: '#434344',
      legends: ['#FFFFFF', '#7b2b28'],
    },
    status: 'Design',
  },
  {
    name: 'KAP Santa Llum',
    id: 'kap-santa-llum',
    previewImages: [previewImageSantaLlumNaixement, previewImageSantaLlumResurreccio],
    designer: 'L’Ortiz & Manu',
    modifiers: 'Text',
    sublegends: 'None',
    colors: {
      main: '#4f2b2f',
      legends: ['#7a2824', '#b37122', '#b69428', '#2a3940', '#275340', '#40966b'],
    },
    status: 'Group Buy',
    shipping: '2026',
  },
  {
    name: 'KAP Buff Bride',
    id: 'kap-buff-bride',
    previewImages: [previewImageBuffBride],
    designer: 'Patty',
    modifiers: 'Text',
    sublegends: 'None',
    colors: {
      main: '#adadbb',
      legends: ['#FFFFFF', '#c36e81', '#19020c'],
    },
    status: 'Manufacturing',
    shipping: 'January 2026',
  },
  {
    name: 'KAP One Dark',
    id: 'kap-one-dark',
    previewImages: [previewImageOneDark],
    designer: 'kapowaz',
    modifiers: 'Default',
    sublegends: 'None',
    colors: {
      main: '#181d27ff',
      legends: ['#818896', '#FF73DC', '#FF675D', '#FFA544', '#FEBC4A', '#A7F038', '#63CDEE'],
    },
    status: 'Design',
  },
  {
    name: 'KAP Reboot Wolf',
    id: 'kap-reboot-wolf',
    previewImages: [previewImageRebootWolf],
    designer: 'kapowaz',
    modifiers: 'Default',
    sublegends: 'Katakana',
    colors: {
      main: '#343627',
      legends: ['#68647D', '#F36925'],
    },
    status: 'Design',
  },
  {
    name: 'KAP Matchpoint',
    id: 'kap-matchpoint',
    previewImages: [previewImageMatchpoint],
    designer: 'kapowaz',
    modifiers: 'Icon Alternate',
    sublegends: 'None',
    colors: {
      main: '#00381A',
      legends: ['#2F0550', '#E1FF1E', '#FFFFFF'],
    },
    status: 'Design',
  },
  {
    name: 'KAP Scuderia Turismo',
    id: 'kap-scuderia-turismo',
    previewImages: [previewImageScuderiaTurismo],
    designer: 'kapowaz',
    modifiers: 'Icon/Text Hybrid',
    sublegends: 'None',
    colors: {
      main: '#D52B1E',
      legends: ['#000000', '#FECB00', '#FFFFFF'],
    },
    status: 'Design',
  },
  {
    name: 'KAP Super Keycaps',
    id: 'kap-super-keycaps',
    previewImages: [previewImageSuperKeycaps],
    designer: 'kapowaz',
    modifiers: 'Default',
    sublegends: 'Katakana',
    colors: {
      main: '#C6C0B9',
      legends: ['#404040', '#83807C', '#C1121C', '#F7BA0B', '#007243', '#00387B'],
    },
    status: 'Design',
  },
  {
    name: 'KAP Calculator',
    id: 'kap-calculator',
    previewImages: [previewImageCalculator],
    designer: 'kapowaz',
    modifiers: 'Default',
    sublegends: 'None',
    colors: {
      main: '#000000',
      legends: ['#FFFFFF', '#EB9E47', '#151E18', '#2C2421'],
    },
    status: 'Design',
  },
  {
    name: 'KAP Technocraft',
    id: 'kap-technocraft',
    previewImages: [previewImageTechnocraft],
    designer: 'madmax13',
    colors: {
      main: '#f2f5f2',
      legends: ['#bc3e34', '#ae5633', '#e8ab42', '#000000'],
    },
    modifiers: 'Default',
    sublegends: 'None',
    status: 'Design',
  },
  {
    name: 'KAP Nightscape',
    id: 'kap-nightscape',
    previewImages: [previewImageNightscape],
    designer: 'keebibi',
    modifiers: 'Icon/Text Hybrid',
    sublegends: 'Hangul',
    colors: {
      main: '#000000',
      legends: ['#eec2ca', '#d9c2ea', '#bfd5e9', '#e9e9e9', '#565769'],
    },
    status: 'Design',
  },
  {
    name: 'KAP Active',
    id: 'kap-active',
    previewImages: [previewImageActive],
    designer: 'kapowaz',
    modifiers: 'Default',
    sublegends: 'None',
    colors: {
      main: '#000000',
      legends: ['#FFFFFF', '#CE0032', '#B2E517', '#1FBBDA'],
    },
    status: 'Design',
  },
  {
    name: 'KAP White Rabbit',
    id: 'kap-white-rabbit',
    previewImages: [previewImageWhiteRabbit],
    designer: 'kapowaz',
    modifiers: 'Default',
    sublegends: 'Hangul',
    colors: {
      main: '#141D0C',
      legends: ['#B4FF76'],
    },
    status: 'Design',
  },
  {
    name: 'KAP Mega Keycaps',
    id: 'kap-mega-keycaps',
    previewImages: [previewImageMegaKeycaps],
    designer: 'kapowaz',
    modifiers: 'Default',
    sublegends: 'Katakana',
    colors: {
      main: '#6E6968',
      legends: ['#D0CAC8', '#F1D083', '#9C4A40', '#3C3939'],
    },
    status: 'Design',
  },
  {
    name: 'KAP Kawaii',
    id: 'kap-kawaii',
    previewImages: [previewImageKawaii],
    designer: 'kapowaz',
    modifiers: 'Default',
    sublegends: 'Hiragana',
    colors: {
      main: '#F7E5CA',
      legends: ['#F4B24F', '#F895B6'],
    },
    status: 'Design',
  },
  {
    name: 'KAP PX-16',
    id: 'kap-px-16',
    previewImages: [previewImagePX16],
    designer: 'kapowaz',
    modifiers: 'Icon/Text Hybrid',
    sublegends: 'Functional',
    colors: {
      main: '#E4DAD7',
      legends: ['#000000', '#8D96B5', '#F3A474'],
    },
    status: 'Design',
  },
  {
    name: 'KAP Harajuku',
    id: 'kap-harajuku',
    previewImages: [previewImageHarajuku],
    designer: 'kapowaz',
    modifiers: 'Default',
    sublegends: 'Hiragana',
    colors: {
      main: '#23103C',
      legends: ['#B183EC', '#924DEA'],
    },
    status: 'Design',
  },
  {
    name: 'KAP Dolch',
    id: 'kap-dolch',
    previewImages: [previewImageDolch],
    designer: 'kapowaz',
    modifiers: 'Icon/Text Hybrid',
    sublegends: 'None',
    colors: {
      main: '#74797B',
      legends: ['#FFFFFF', '#3E3F42', '#C64E61', '#2CAFA8'],
    },
    status: 'Design',
  },
  {
    name: 'KAP Terrazzo',
    id: 'kap-terrazzo',
    previewImages: [previewImageTerrazzo],
    interestCheckUrl: 'https://geekhack.org/index.php?topic=123215.0',
    designer: 'Beesley',
    modifiers: 'Hybrid',
    sublegends: 'None',
    colors: {
      main: '#FDFAF6',
      legends: ['#637C7D', '#B17F5C'],
    },
    status: 'On hold',
  },
  {
    name: 'KAP Y',
    id: 'kap-y',
    previewImages: [previewImageY],
    designer: 'Bowl Keyboards',
    modifiers: 'Text',
    sublegends: 'None',
    colors: {
      main: '#ab8575',
      legends: ['#FFFFFF', '#f18b26'],
    },
    status: 'On Hold',
  },
];

/**
 * Other projects:
 *
 * KAP Anushirvan (originally GMK? https://geekhack.org/index.php?topic=123225.0)
 * KAP Santa Llum https://cord-screen-96a.notion.site/KAP-Santa-LLum-21b889ba936e80a2929cf18efa8527c0
 * KAP Buff Bride
 * KAP Reboot Wolf
 */
