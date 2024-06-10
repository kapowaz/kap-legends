import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import isInternalUrl from '@docusaurus/isInternalUrl';
import IconExternalLink from '@theme/Icon/ExternalLink';
import type { Props } from '@theme/Footer/LinkItem';
import { KAPLegendSystem, KBolt } from '@site/src/components/Icons';
import type { SVGComponent } from '@site/src/types';
import styles from './styles.module.css';

export type FooterIcon = 'kapowaz' | 'kap';

export interface IFooterLinkItemProps extends Props {
  item: Props['item'] & {
    icon?: FooterIcon;
  };
}

const FOOTERICON_SVG: Record<FooterIcon, SVGComponent> = {
  kapowaz: KBolt,
  kap: KAPLegendSystem,
};

export default function FooterLinkItem({ item }: IFooterLinkItemProps): ReactNode {
  const { to, href, label, prependBaseUrlToHref, className, icon, ...props } = item;
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, { forcePrependBaseUrl: true });
  const IconComponent = icon ? FOOTERICON_SVG[icon] : undefined;

  return (
    <Link
      className={clsx('footer__link-item', className, styles.footerLink)}
      {...(href
        ? {
            href: prependBaseUrlToHref ? normalizedHref : href,
          }
        : {
            to: toUrl,
          })}
      {...props}
    >
      {icon && (
        <span className={styles.iconWrapper}>
          <IconComponent />
        </span>
      )}
      {label}
      {href && !isInternalUrl(href) && <IconExternalLink />}
    </Link>
  );
}
