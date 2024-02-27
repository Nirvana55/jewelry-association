export interface Events {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  author: string;
  content: Content[];
  mainImage: MainImage;
  publishedAt: string;
  readTime: string;
  slug: Slug;
  title: string;
  cardInfoText: string;
}

export interface NewsData {
  cardInfoText: string;
  readTime: string;
  author: string;
  _id: string;
  mainImage: MainImage;
  title: string;
  slug: Slug;
}

export interface Content {
  _key: string;
  _type: string;
  children: Children[];
  markDefs: any[];
  style: string;
}

export interface Children {
  _key: string;
  _type: string;
  marks: any[];
  text: string;
}

export interface MainImage {
  _type: string;
  asset: Asset;
}

export interface Asset {
  _ref: string;
  _type: string;
}

export interface Slug {
  _type: string;
  current: string;
}
