import { createContext, useContext } from "react";
// Define context for cursor
export const CursorContext = createContext(null);

export const useCursor = () => useContext(CursorContext);