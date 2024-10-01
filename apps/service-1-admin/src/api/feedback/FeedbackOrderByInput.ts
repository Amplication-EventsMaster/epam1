import { SortOrder } from "../../util/SortOrder";

export type FeedbackOrderByInput = {
  comments?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  date?: SortOrder;
  hotelId?: SortOrder;
  id?: SortOrder;
  rating?: SortOrder;
  updatedAt?: SortOrder;
};
