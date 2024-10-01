import { SortOrder } from "../../util/SortOrder";

export type HotelOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  rating?: SortOrder;
  updatedAt?: SortOrder;
};
