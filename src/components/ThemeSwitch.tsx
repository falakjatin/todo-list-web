'use client'

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const ThemeSwitcher = () => {

    const [mounted, setMounted] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div>
            The current theme is: {theme}
            <br />
            <button onClick={() => {
                console.log(resolvedTheme)
                setTheme('light')
            }}>Light Mode</button>
            <br />
            <button onClick={() => {
                console.log(resolvedTheme)
                setTheme('dark')
            }}>Dark Mode</button>
        </div>
    );
};

export default ThemeSwitcher
