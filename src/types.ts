export type SVGComponent = (
  props: React.SVGProps<SVGSVGElement> & { title?: string | null; className?: string },
) => React.ReactElement;
