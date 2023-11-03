export type MerchSchema = {
  headline: string;
  merchItems: {
    name: string;
    image: object;
    link: string;
  }[];
};
