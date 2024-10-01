import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";
import { HotelTitle } from "../hotel/HotelTitle";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <DateTimeInput label="bookingDate" source="bookingDate" />
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <ReferenceInput source="hotel.id" reference="Hotel" label="Hotel">
          <SelectInput optionText={HotelTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
