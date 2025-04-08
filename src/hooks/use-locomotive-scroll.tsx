
import { useContext } from "react";
import { LocomotiveScrollContext } from "@/components/LocomotiveScrollProvider";

export const useLocomotiveScroll = () => {
  const context = useContext(LocomotiveScrollContext);
  if (context === undefined) {
    throw new Error("useLocomotiveScroll must be used within a LocomotiveScrollProvider");
  }
  return context;
};
