import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";

export type FeedbackUpdateInput = {
  comments?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
  hotel?: HotelWhereUniqueInput | null;
  rating?: number | null;
};
