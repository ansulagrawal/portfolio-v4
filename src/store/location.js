import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { locations } from "@constants";

const DEFAULT_LOCATION = locations.work;

const useLocationStore = create(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATION,

    setActiveLocation: (loc) =>
      set((state) => {
        if (loc === undefined) return;
        state.activeLocation = loc;
      }),

    resetActiveLocation: () =>
      set((state) => {
        state.activeLocation = DEFAULT_LOCATION;
      }),
  }))
);

export default useLocationStore;
