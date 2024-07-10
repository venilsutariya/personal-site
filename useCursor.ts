import { createContext, useContext } from "react";
import MouseFollower from "mouse-follower";

// Define context for cursor
export const CursorContext = createContext<MouseFollower | null>(null);

export const useCursor = () => useContext(CursorContext);