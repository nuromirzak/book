/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommonReviewComponent } from './CommonReviewComponent';
export type BookRequest = {
    data: {
        title: string;
        authorDescription?: string;
        relevance?: string;
        annotation?: string;
        ageRating?: number;
        cover?: (number | string);
        pages?: number;
        isbn?: string;
        height?: number;
        width?: number;
        depth?: number;
        review?: Array<CommonReviewComponent>;
        locale?: string;
    };
};

