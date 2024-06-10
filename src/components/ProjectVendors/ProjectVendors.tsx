import Link from '@docusaurus/Link';
import type { ProjectVendor, VendorName } from '@site/src/projects';
import styles from './ProjectVendors.module.css';
import type { SVGComponent } from '@site/src/types';
import { AngryMiao } from './icons/AngryMiao';
import {
  Aiglatson,
  Ashkeebs,
  BowlKeyboards,
  CandyKeys,
  CannonKeys,
  DailyClack,
  DeltaKeyCo,
  Deskhero,
  Divinikey,
  Drop,
  EloquentClicks,
  FancyCustoms,
  Geonworks,
  HIBI,
  Ilumkb,
  Kbdfans,
  KeebzNCables,
  Keygem,
  Ktechs,
  MaxGaming,
  MechMods,
  MonacoKeys,
  Monokei,
  NovelKeys,
  ProtoTypist,
  Protozoa,
  Rheset,
  Sanyo,
  SwagKeys,
  SwitchKeys,
  TOROStudio,
  Vala,
  Yushakobo,
  ZFrontier,
} from './icons';

const VendorIcons: Record<VendorName, SVGComponent> = {
  ['Aiglatson Studio']: Aiglatson,
  ['Angry Miao']: AngryMiao,
  ['Bowl Keyboards']: BowlKeyboards,
  ['Ashkeebs']: Ashkeebs,
  ['CandyKeys']: CandyKeys,
  ['CannonKeys']: CannonKeys,
  ['DailyClack']: DailyClack,
  ['Delta Key Co']: DeltaKeyCo,
  ['Deskhero']: Deskhero,
  ['Divinikey']: Divinikey,
  ['Drop']: Drop,
  ['EloquentClicks']: EloquentClicks,
  ['FancyCustoms']: FancyCustoms,
  ['Geonworks']: Geonworks,
  ['HIBI']: HIBI,
  ['iLumkb']: Ilumkb,
  ['Kbdfans']: Kbdfans,
  ['Keebz n Cables']: KeebzNCables,
  ['Keygem']: Keygem,
  ['ktechs']: Ktechs,
  ['MaxGaming']: MaxGaming,
  ['MechMods']: MechMods,
  ['MonacoKeys']: MonacoKeys,
  ['Monokei']: Monokei,
  ['NovelKeys']: NovelKeys,
  ['ProtoTypist']: ProtoTypist,
  ['Protozoa']: Protozoa,
  ['Rheset']: Rheset,
  ['Sanyo']: Sanyo,
  ['SwagKeys']: SwagKeys,
  ['SwitchKeys']: SwitchKeys,
  ['TORO Studio']: TOROStudio,
  ['Vala']: Vala,
  ['Yushakobo']: Yushakobo,
  ['zFrontier']: ZFrontier,
};

export const ProjectVendors = ({ vendors }: { vendors: ProjectVendor[] }) => {
  return (
    <div className={styles.vendors}>
      {vendors.map((vendor) => {
        const Icon = VendorIcons[vendor.name];

        return (
          <span key={vendor.name} className={styles.vendor}>
            <Icon />
            <Link href={vendor.url} target="_blank" className={styles.externalLink}>
              {vendor.name}
            </Link>
            <strong className={styles.region}>{vendor.region}</strong>
          </span>
        );
      })}
    </div>
  );
};
