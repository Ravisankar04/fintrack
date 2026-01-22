
export interface DatabaseProperty {
  name: string;
  type: 'Text' | 'Number' | 'Select' | 'Multi-select' | 'Date' | 'Files & media' | 'Relation' | 'Rollup' | 'Formula' | 'Status' | 'Checkbox' | 'URL' | 'Email';
  formula?: string;
  options?: string[];
  description?: string;
}

export interface NotionDatabase {
  title: string;
  icon: string;
  description: string;
  properties: DatabaseProperty[];
  views: string[];
}

export interface MarketingAsset {
  title: string;
  content: string;
  type: 'Social' | 'Email' | 'Sales' | 'Guide';
}
