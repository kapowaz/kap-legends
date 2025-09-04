import Link from '@docusaurus/Link';
import Heading from '@theme-original/MDXComponents/Heading';
import Img from '@theme-original/MDXComponents/Img';
import IconExternalLink from '@theme/Icon/ExternalLink';
import { IProject } from '@site/src/projects';
import { ProjectColors } from '../ProjectColors';
import { ProjectVendors } from '../ProjectVendors';
import styles from './ProjectPreview.module.css';

export const ProjectPreview = ({
  name,
  id,
  previewImages,
  interestCheckUrl,
  designer,
  materials,
  modifiers,
  sublegends,
  colors,
  status,
  shipping,
  vendors,
}: IProject) => {
  return (
    <section className={styles.project} key={id}>
      <Heading as="h2" id={id}>
        {name}
      </Heading>

      <ProjectColors main={colors.main} legends={colors.legends} />

      {previewImages && (
        <div className={styles.previewImageWrapper}>
          {previewImages.map((image) => (
            <Img
              key={image}
              src={image}
              alt={`Image preview of {name}`}
              className={styles.previewImage}
            />
          ))}
        </div>
      )}

      <dl className={styles.projectMeta}>
        <dt>Designer</dt>
        <dd>{designer}</dd>
        {interestCheckUrl && (
          <>
            <dt>Interest Check</dt>
            <dd>
              <Link href={interestCheckUrl} target="_blank" className={styles.externalLink}>
                Details <IconExternalLink />
              </Link>
            </dd>
          </>
        )}
        {materials && (
          <>
            <dt>Materials</dt>
            <dd>{materials}</dd>
          </>
        )}
        <dt>Modifiers</dt>
        <dd>{modifiers}</dd>
        <dt>Sublegends</dt>
        <dd>{sublegends}</dd>
        <dt>Status</dt>
        <dd>{status}</dd>
        {shipping && (
          <>
            <dt>Shipping</dt>
            <dd>{shipping}</dd>
          </>
        )}
        {vendors && (
          <>
            <dt>Vendors</dt>
            <dd>
              <ProjectVendors vendors={vendors} />
            </dd>
          </>
        )}
      </dl>
    </section>
  );
};
