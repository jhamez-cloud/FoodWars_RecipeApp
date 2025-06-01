'use client';

import React, { useState } from "react";
import { StateContext } from "./StateContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
    const [search, setSearch] = useState('');

    return (
        <StateContext.Provider value={{ search, setSearch }}>
            {children}
        </StateContext.Provider>
    );
};