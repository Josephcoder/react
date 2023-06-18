import { create } from 'zustand';

interface CamisQuery {
  termId?: string;
  districtCode?: string;
}

interface CamisQueryStore {
  camisQuery: CamisQuery;
  setTermId: (termId: string) => void;
  setDistrictCode: (districtCode: string) => void;
}

const useCamisQueryStore = create<CamisQueryStore>((set) => ({
  camisQuery: {},
  setTermId: (termId) =>
    set((store) => ({
      camisQuery: { ...store.camisQuery, termId },
    })),
  setDistrictCode: (districtCode) =>
    set((store) => ({
      camisQuery: { ...store.camisQuery, districtCode },
    })),
}));

export default useCamisQueryStore;
