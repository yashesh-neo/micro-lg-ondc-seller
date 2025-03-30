export class SearchDescriptor {
  name: string;
  code: string;
  symbol: string;
  short_desc?: string;
  long_desc?: string;
  additional_desc?: {
    url: string;
    content_type: string;
  };
  images?: Array<string>;
  tags?: Array<any>;
}
