import React, { useCallback } from 'react';
import { Dispatch, SetStateAction } from 'react';

type Props<T extends string | number> = {
    type: string;
    setValue: Dispatch<SetStateAction<T>>;
    placeholder: string;
};

export default React.memo(function Field<T extends string | number>({ type, setValue, placeholder }: Props<T>) {
    console.log(`Field ${placeholder} rendered`);

    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value as T);
    }, [setValue]);

 
    return (
        <div>
            <input 
                type={type} 
                placeholder={placeholder} 
                onChange={handleChange} 
            />
        </div>
    );
});