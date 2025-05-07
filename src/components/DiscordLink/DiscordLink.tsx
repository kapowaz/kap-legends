import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export const DiscordLink = ({ children }: { children: React.ReactNode }) => {
  const {
    siteConfig: {
      customFields: { discordInviteUrl },
    },
  } = useDocusaurusContext();

  return discordInviteUrl ? (
    <a href={discordInviteUrl as string} target="_blank">
      {children || 'Discord'}
    </a>
  ) : null;
};
