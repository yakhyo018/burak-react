import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";

const selectOrderPage = (state: AppRootState) => state.ordersPage;

export const retrievePausedOrders = createSelector(
  selectOrderPage,
  (OrderPage) => OrderPage.pausedOrders,
);

export const retrieveProcessOrders = createSelector(
  selectOrderPage,
  (OrderPage) => OrderPage.processOrders,
);

export const retrievefinishedOrders = createSelector(
  selectOrderPage,
  (OrderPage) => OrderPage.finishedOrders,
);
