export interface API_DATA{
    RESULT_CODE: number,
    RESULT_MSG: string,
    RESULT_DATA: LIST_DATA | object
}

export interface LIST_DATA{
    data: Array<BOOK_DATA>
}

export interface BOOK_DATA{
    author: string,
    publisher: string,
    title: string
}