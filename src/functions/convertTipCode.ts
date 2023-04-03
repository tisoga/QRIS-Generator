type MyObject = {
    [key: string]: string;
}

const tipTypeCode: MyObject = {
    '550201': 'Dynamic',
    '550202': 'Static',
    '550203': 'Percentage',
    '00000': 'Not Activated'
}

const convertTipCode = (tipCode: string): string => {
    return tipTypeCode[String(tipCode)]
}

export default convertTipCode