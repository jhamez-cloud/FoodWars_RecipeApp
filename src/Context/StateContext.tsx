"use client";

import {createContext} from "react";
import {setContextType} from "./ContextType";

export const StateContext = createContext<setContextType | null>(null)