type MyObject = {
    [key: string]: string;
}

type businessCode = string

const bussinessTypeCode: MyObject = {
    UMI: 'Usaha Mikro',
    UKE: 'Usaha Kecil',
    UME: 'Usaha Menengah',
    UBE: 'Usaha Bisnis'
}

const convertBusinessCode = (businessCode: businessCode): string => {
    return bussinessTypeCode[businessCode]
}

export default convertBusinessCode