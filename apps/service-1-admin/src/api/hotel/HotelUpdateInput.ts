import { FeedbackUpdateManyWithoutHotelsInput } from "./FeedbackUpdateManyWithoutHotelsInput";
import { OrderUpdateManyWithoutHotelsInput } from "./OrderUpdateManyWithoutHotelsInput";

export type HotelUpdateInput = {
  feedbacks?: FeedbackUpdateManyWithoutHotelsInput;
  location?: string | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutHotelsInput;
  rating?: number | null;
};
