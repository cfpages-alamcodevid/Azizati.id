import { create } from "zustand";
import { banks, costReference } from "../data/banks";

const growthRateByBank = {
  bsi: 0.035,
  muamalat: 0.032,
  "mandiri-syariah": 0.033,
  "bni-syariah": 0.031,
};

const calculateRecommendation = ({ goalType, targetYears, totalCost }) => {
  const months = targetYears * 12;

  return banks
    .map((bank) => {
      const rate = growthRateByBank[bank.id] ?? 0.03;
      const growthFactor = 1 + rate / 12;
      const projectedMonthly = (totalCost / months) / growthFactor;

      return {
        bankId: bank.id,
        monthlyContribution: Math.ceil(projectedMonthly),
        reason: bank.suitableFor,
      };
    })
    .sort((a, b) => a.monthlyContribution - b.monthlyContribution)
    .slice(0, 3)
    .map((row, index) => ({
      ...row,
      priority: index + 1,
      goalType,
    }));
};

export const useSimulatorStore = create((set, get) => ({
  goalType: "umroh",
  targetYears: 3,
  totalCost: costReference.umroh,
  result: [],
  setGoalType: (goalType) =>
    set({
      goalType,
      totalCost: costReference[goalType],
    }),
  setTargetYears: (targetYears) => set({ targetYears }),
  setTotalCost: (totalCost) => set({ totalCost }),
  runSimulation: () => {
    const { goalType, targetYears, totalCost } = get();
    const result = calculateRecommendation({ goalType, targetYears, totalCost });
    set({ result });
  },
}));
