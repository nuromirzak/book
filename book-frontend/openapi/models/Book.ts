/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Book = {
    id?: number;
    documentId?: string;
    title: string;
    cover?: {
        id?: number;
        documentId?: string;
        name?: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: any;
        hash?: string;
        ext?: string;
        mime?: string;
        size?: number;
        url?: string;
        previewUrl?: string;
        provider?: string;
        provider_metadata?: any;
        related?: Array<{
            id?: number;
            documentId?: string;
        }>;
        folder?: {
            id?: number;
            documentId?: string;
            name?: string;
            pathId?: number;
            parent?: {
                id?: number;
                documentId?: string;
            };
            children?: Array<{
                id?: number;
                documentId?: string;
            }>;
            files?: Array<{
                id?: number;
                documentId?: string;
                name?: string;
                alternativeText?: string;
                caption?: string;
                width?: number;
                height?: number;
                formats?: any;
                hash?: string;
                ext?: string;
                mime?: string;
                size?: number;
                url?: string;
                previewUrl?: string;
                provider?: string;
                provider_metadata?: any;
                related?: Array<{
                    id?: number;
                    documentId?: string;
                }>;
                folder?: {
                    id?: number;
                    documentId?: string;
                };
                folderPath?: string;
                createdAt?: string;
                updatedAt?: string;
                publishedAt?: string;
                createdBy?: {
                    id?: number;
                    documentId?: string;
                    firstname?: string;
                    lastname?: string;
                    username?: string;
                    email?: string;
                    resetPasswordToken?: string;
                    registrationToken?: string;
                    isActive?: boolean;
                    roles?: Array<{
                        id?: number;
                        documentId?: string;
                        name?: string;
                        code?: string;
                        description?: string;
                        users?: Array<{
                            id?: number;
                            documentId?: string;
                        }>;
                        permissions?: Array<{
                            id?: number;
                            documentId?: string;
                            action?: string;
                            actionParameters?: any;
                            subject?: string;
                            properties?: any;
                            conditions?: any;
                            role?: {
                                id?: number;
                                documentId?: string;
                            };
                            createdAt?: string;
                            updatedAt?: string;
                            publishedAt?: string;
                            createdBy?: {
                                id?: number;
                                documentId?: string;
                            };
                            updatedBy?: {
                                id?: number;
                                documentId?: string;
                            };
                            locale?: string;
                            localizations?: Array<{
                                id?: number;
                                documentId?: string;
                            }>;
                        }>;
                        createdAt?: string;
                        updatedAt?: string;
                        publishedAt?: string;
                        createdBy?: {
                            id?: number;
                            documentId?: string;
                        };
                        updatedBy?: {
                            id?: number;
                            documentId?: string;
                        };
                        locale?: string;
                        localizations?: Array<{
                            id?: number;
                            documentId?: string;
                        }>;
                    }>;
                    blocked?: boolean;
                    preferedLanguage?: string;
                    createdAt?: string;
                    updatedAt?: string;
                    publishedAt?: string;
                    createdBy?: {
                        id?: number;
                        documentId?: string;
                    };
                    updatedBy?: {
                        id?: number;
                        documentId?: string;
                    };
                    locale?: string;
                    localizations?: Array<{
                        id?: number;
                        documentId?: string;
                    }>;
                };
                updatedBy?: {
                    id?: number;
                    documentId?: string;
                };
                locale?: string;
                localizations?: Array<{
                    id?: number;
                    documentId?: string;
                }>;
            }>;
            path?: string;
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            createdBy?: {
                id?: number;
                documentId?: string;
            };
            updatedBy?: {
                id?: number;
                documentId?: string;
            };
            locale?: string;
            localizations?: Array<{
                id?: number;
                documentId?: string;
            }>;
        };
        folderPath?: string;
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
        createdBy?: {
            id?: number;
            documentId?: string;
        };
        updatedBy?: {
            id?: number;
            documentId?: string;
        };
        locale?: string;
        localizations?: Array<{
            id?: number;
            documentId?: string;
        }>;
    };
    author?: string;
    description?: string;
    pages?: number;
    isbn?: string;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    createdBy?: {
        id?: number;
        documentId?: string;
    };
    updatedBy?: {
        id?: number;
        documentId?: string;
    };
    locale?: string;
    localizations?: Array<{
        id?: number;
        documentId?: string;
        title?: string;
        cover?: {
            id?: number;
            documentId?: string;
            name?: string;
            alternativeText?: string;
            caption?: string;
            width?: number;
            height?: number;
            formats?: any;
            hash?: string;
            ext?: string;
            mime?: string;
            size?: number;
            url?: string;
            previewUrl?: string;
            provider?: string;
            provider_metadata?: any;
            related?: Array<{
                id?: number;
                documentId?: string;
            }>;
            folder?: {
                id?: number;
                documentId?: string;
            };
            folderPath?: string;
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            createdBy?: {
                id?: number;
                documentId?: string;
            };
            updatedBy?: {
                id?: number;
                documentId?: string;
            };
            locale?: string;
            localizations?: Array<{
                id?: number;
                documentId?: string;
            }>;
        };
        author?: string;
        description?: string;
        pages?: number;
        isbn?: string;
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
        createdBy?: {
            id?: number;
            documentId?: string;
        };
        updatedBy?: {
            id?: number;
            documentId?: string;
        };
        locale?: string;
        localizations?: Array<{
            id?: number;
            documentId?: string;
        }>;
    }>;
};

