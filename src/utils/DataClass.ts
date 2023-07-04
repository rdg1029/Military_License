export interface API_DATA{
    RESULT_CODE: number,
    RESULT_MSG: string,
    RESULT_DATA: object
}

export interface LIST_DATA{
    data: Array<BOOK_DATA>
}

export interface BOOK_DATA{
    class_no_type: string,
    ddc_class_no: string,
    etc_class_no: string,
    kdc_class_no: string,
    lib_code: string,
    lib_name: string,
    marc_author: string,
    marc_ea_isbn: string,
    marc_page: string,
    marc_price: string,
    marc_publish_year: string,
    marc_publisher: string,
    marc_size: string,
    marc_title: string,
    rec_key: string,
    status: string
}