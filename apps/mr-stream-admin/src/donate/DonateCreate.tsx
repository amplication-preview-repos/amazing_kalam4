import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const DonateCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="streamer_id" source="streamerId" />
        <NumberInput label="amount" source="amount" />
      </SimpleForm>
    </Create>
  );
};
