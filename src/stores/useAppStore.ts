import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { RecipesSliceType, createRecipesSlices } from "./recipeSlice";
import { FavoritesSliceType, createFavoritesSlices } from "./favoritesSlice";
import {
  NotificationSliceType,
  createNotificationSlices,
} from "./notificationSlice";

export const useAppStore = create<
  RecipesSliceType & FavoritesSliceType & NotificationSliceType
>()(
  devtools((...a) => ({
    ...createRecipesSlices(...a),
    ...createFavoritesSlices(...a),
    ...createNotificationSlices(...a),
  }))
);
