import { Customer } from "../customer/Customer";
import { Hotel } from "../hotel/Hotel";

export type Feedback = {
  comments: string | null;
  createdAt: Date;
  customer?: Customer | null;
  date: Date | null;
  hotel?: Hotel | null;
  id: string;
  rating: number | null;
  updatedAt: Date;
};
