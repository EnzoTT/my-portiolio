export interface CardProps {
  imgUrl: string;
  description: string;
  title: string;
}

export interface LinkProps {
  isGit: boolean;
  link: string;
}

export interface ProjectProps {
  tags: string[];
  card: CardProps;
  links: LinkProps[];
}
