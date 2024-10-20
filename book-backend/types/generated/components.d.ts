import type { Struct, Schema } from '@strapi/strapi';

export interface CommonReview extends Struct.ComponentSchema {
  collectionName: 'components_common_reviews';
  info: {
    displayName: 'Review';
  };
  attributes: {
    author: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.review': CommonReview;
    }
  }
}
