import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";

export type OrderUpdateInput = {
  amount?: number | null;
  bookingDate?: Date | null;
  customer?: CustomerWhereUniqueInput | null;
  hotel?: HotelWhereUniqueInput | null;
};
