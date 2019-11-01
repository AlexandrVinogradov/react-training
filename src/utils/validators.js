export const required = (value) => {
    if(value) return undefined;

    return 'the fiel is required';
}

export const maxLengthCreator = (maxLength) =>  (value) => {
    if(value.length > maxLength) return `max length is ${maxLength}`
    
    return undefined;
}