import { useEffect, useState } from "react";

export default function AutoSaveForm() {
    const [formData, setFormData] = useState('');
    useEffect(() => {
        const savedData = localStorage.getItem('savedFormData');

        if (savedData) {
            setFormData(savedData);
        }
    }, []);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            localStorage.setItem('savedFormData', formData);
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, [formData]);

    return (
        <textarea
        value={formData}
        onChange={(e) => setFormData(e.target.value)}
        placeholder="Autosave"
        ></textarea>
    )
}