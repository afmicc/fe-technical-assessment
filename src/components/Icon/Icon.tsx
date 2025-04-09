import { icons } from "./icons";

export const Icon = ({
  icon,
  ...props
}: { icon: string } & React.SVGProps<SVGSVGElement>) => {
  const Icon = icons[icon];

  if (!Icon) {
    throw new Error(`Icon ${icon} not found`);
  }

  return <Icon {...props} />;
};
