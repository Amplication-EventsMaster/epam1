import { FeedbackCreateNestedManyWithoutHotelsInput } from "./FeedbackCreateNestedManyWithoutHotelsInput";
import { OrderCreateNestedManyWithoutHotelsInput } from "./OrderCreateNestedManyWithoutHotelsInput";

export type HotelCreateInput = {
  feedbacks?: FeedbackCreateNestedManyWithoutHotelsInput;
  location?: string | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutHotelsInput;
  rating?: number | null;
};
