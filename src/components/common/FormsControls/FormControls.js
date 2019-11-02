import React from 'react';
import s from './FormControls.module.css';


export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
        <div>
            <textarea {...input} {...meta}/>
        </div>
        {hasError && <span>{meta.error}</span>}
    </div>
}

// hasError = fasle && undefined 
// '', 0, false, null, undef