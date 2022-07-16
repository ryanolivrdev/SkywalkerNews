export interface NewsReponse {
  name: string;
  url: string;
  image: {
    thumbnail: {
      contentUrl: string;
      width: number;
      height: number;
    };
    isLicensed: boolean;
  };
  description: string;
  provider: [
    {
      name: string;
      image: {
        thumbnail: {
          contentUrl: string;
        };
      };
    }
  ];
  datePublished: string;
}

export interface TopicProps {
  topicSlug: string;
}

export interface SideBarProps {
  isOpen: boolean;
  CloseNavBar: any;
}