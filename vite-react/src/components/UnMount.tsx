import { useEffect } from 'react';

export default function UnMount() {
    
    useEffect(() => {
        return () => {
            console.log('UnMounted');
        };
    }, []);

    return <div>UnMount</div>
}