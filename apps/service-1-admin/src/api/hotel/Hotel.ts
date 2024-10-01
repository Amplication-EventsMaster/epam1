import { Feedback } from "../feedback/Feedback";
import { Order } from "../order/Order";

export type Hotel = {
  createdAt: Date;
  feedbacks?: Array<Feedback>;
  id: string;
  location: string | null;
  name: string | null;
  orders?: Array<Order>;
  rating: number | null;
  updatedAt: Date;
};
