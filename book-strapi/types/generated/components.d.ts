import type { Schema, Attribute } from '@strapi/strapi';

export interface CommonReview extends Schema.Component {
  collectionName: 'components_common_reviews';
  info: {
    displayName: 'review';
    icon: 'thumbUp';
  };
  attributes: {
    author: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.review': CommonReview;
    }
  }
}
