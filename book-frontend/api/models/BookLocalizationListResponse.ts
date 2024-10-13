/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BookListResponseDataItemLocalized } from './BookListResponseDataItemLocalized';
export type BookLocalizationListResponse = {
    data?: Array<BookListResponseDataItemLocalized>;
    meta?: {
        pagination?: {
            page?: number;
            pageSize?: number;
            pageCount?: number;
            total?: number;
        };
    };
};

