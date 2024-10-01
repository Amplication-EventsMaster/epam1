import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";

export type FeedbackCreateInput = {
  comments?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
  hotel?: HotelWhereUniqueInput | null;
  rating?: number | null;
};
