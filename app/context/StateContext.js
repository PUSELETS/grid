"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';

const Context = createContext();

export const StateContext = ({children}) => {

    const [showNav, setShowNav] = useState(false)

    return (
        <Context.Provider
        value={{
            showNav,
            setShowNav,
        }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);