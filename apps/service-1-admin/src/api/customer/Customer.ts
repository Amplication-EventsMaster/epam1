import { Feedback } from "../feedback/Feedback";
import { Order } from "../order/Order";

export type Customer = {
  createdAt: Date;
  email: string | null;
  feedbacks?: Array<Feedback>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders?: Array<Order>;
  phoneNumber: string | null;
  updatedAt: Date;
};
