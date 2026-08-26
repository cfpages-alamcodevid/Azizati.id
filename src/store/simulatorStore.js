import { create } from "zustand";
import { banks, travelPackages, costReference } from "../data/banks";

const getPackagePrice = (goalType, packageId) => {
  const packages = travelPackages[goalType] || [];
  const pkg = packages.find((p) => p.id === packageId);
  return pkg?.price || costReference[goalType] || 0;
};

const calculateRecommendation = ({ goalType, targetYears, totalCost }) => {
  const months = targetYears * 12;
  const monthlyContribution = months > 0 ? Math.ceil(totalCost / months) : 0;

  return banks
    .filter((bank) => bank.goals.includes(goalType))
    .map((bank, index) => ({
        bankId: bank.id,
        monthlyContribution,
        reason: bank.suitableFor,
      priority: index + 1,
      goalType,
    }));
};

const defaultPackages = travelPackages.umroh || [];
const defaultPackageId = defaultPackages[1]?.id || "umroh-standard";
const defaultPrice = defaultPackages.find((p) => p.id === defaultPackageId)?.price || costReference.umroh;

export const useSimulatorStore = create((set, get) => ({
  goalType: "umroh",
  targetYears: 3,
  totalCost: defaultPrice,
  packageId: defaultPackageId,
  dpAmount: 0,
  result: [],
  setGoalType: (goalType) => {
    const packages = travelPackages[goalType] || [];
    const defaultPkg = packages[1]?.id || packages[0]?.id;
    const defaultPrice = packages.find((p) => p.id === defaultPkg)?.price || costReference[goalType] || 0;
    set({
      goalType,
      packageId: defaultPkg,
      totalCost: defaultPrice,
      dpAmount: 0,
    });
  },
  setTargetYears: (targetYears) => set({ targetYears }),
  setTotalCost: (totalCost) => set({ totalCost }),
  setPackageId: (packageId) => {
    const price = getPackagePrice(get().goalType, packageId);
    set({ packageId, totalCost: price });
  },
  setDpAmount: (dpAmount) => set({ dpAmount }),
  runSimulation: () => {
    const { goalType, targetYears, totalCost, dpAmount } = get();
    const effectiveCost = Math.max(totalCost - dpAmount, 0);
    const result = calculateRecommendation({ goalType, targetYears, totalCost: effectiveCost });
    set({ result });
  },
}));
