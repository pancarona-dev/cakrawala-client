type FiltersType = {
  id: number;
  score: number;
  votes: number[];
  answers: number[];
  views: number;
  title: string;
  text: string;
  tags: string[];
  author: string;
  created: Date;
};

type DeviceSizeType = {
  TABLET_SIZE: number;
  MOBILE_SIZE: number;
};

export type SiteConfigType = {
  title: string;
  description: string;
  theme: string;
  siteUrl: string;
  googleAnalytic: string;
  author: {
    name: string;
    website: string;
  };
  social: {
    twitter: string;
    github: string;
    linkedin: string;
    facebook: string;
    instagram: string;
    devto: string;
  };

  lang: string;
};

export interface UseWindowSize {
  width: number | undefined;
  height: number | undefined;
}
