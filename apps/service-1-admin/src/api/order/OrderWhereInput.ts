import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type OrderWhereInput = {
  amount?: FloatNullableFilter;
  bookingDate?: DateTimeNullableFilter;
  customer?: CustomerWhereUniqueInput;
  hotel?: HotelWhereUniqueInput;
  id?: StringFilter;
};
