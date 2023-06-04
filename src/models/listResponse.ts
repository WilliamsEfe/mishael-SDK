// This file describes the structure of a "ListResponse" data object within the SDK

export interface ListResponse<T> {
    docs: T[]; // An array of documents of generic type T
    total: number; // Total number of documents
    limit: number; // The maximum number of documents that can be returned in a single request
    offset: number; // The offset at which to start returning documents
    page: number; // The current page of results
    pages: number; // Total number of pages
}
