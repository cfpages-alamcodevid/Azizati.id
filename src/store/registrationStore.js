import { create } from "zustand";

const initialForm = {
  product: "",
  bankId: "",
  fullName: "",
  whatsapp: "",
  email: "",
  city: "",
};

export const useRegistrationStore = create((set) => ({
  step: 1,
  form: initialForm,
  setField: (field, value) =>
    set((state) => ({
      form: {
        ...state.form,
        [field]: value,
      },
    })),
  nextStep: () =>
    set((state) => ({
      step: Math.min(4, state.step + 1),
    })),
  prevStep: () =>
    set((state) => ({
      step: Math.max(1, state.step - 1),
    })),
  resetForm: () =>
    set({
      step: 1,
      form: initialForm,
    }),
}));
