/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BookRequest = {
    data: {
        title: string;
        cover?: (number | string);
        author?: string;
        description?: string;
        pages?: number;
        isbn?: string;
        coverType?: BookRequest.coverType;
        ageRating?: number;
        locale?: string;
        localizations?: Array<(number | string)>;
    };
};
export namespace BookRequest {
    export enum coverType {
        SOFT = 'soft',
        THIN = 'thin',
        HARD = 'hard',
    }
}

