export type SeoSchema = {
  title: string;
  additionalTitle: string;
  searchResultTitle: string;
  searchResultDescription: string;
  socialPreviewImage: object;
  pageIcon: object;
  location: string;
  currentRelease: {
    name: string;
    type: string;
    genre: string;
    url: string;
    tracks: number;
    cover: object;
  };
};
