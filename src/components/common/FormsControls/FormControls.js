import React from 'react';
import s from './FormControls.module.css';

export const Textarea = ({meta, input, ...state}) => {
    const hasError = meta.error && meta.touched;
    return <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
        <div>
            <textarea {...meta} {...input}/> 
        </div>
        {hasError && <span>{meta.error}</span>}
    </div>
}