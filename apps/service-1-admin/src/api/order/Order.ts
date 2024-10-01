import { Customer } from "../customer/Customer";
import { Hotel } from "../hotel/Hotel";

export type Order = {
  amount: number | null;
  bookingDate: Date | null;
  createdAt: Date;
  customer?: Customer | null;
  hotel?: Hotel | null;
  id: string;
  updatedAt: Date;
};
