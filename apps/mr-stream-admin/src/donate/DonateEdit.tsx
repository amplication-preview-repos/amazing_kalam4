import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const DonateEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="streamer_id" source="streamerId" />
        <NumberInput label="amount" source="amount" />
      </SimpleForm>
    </Edit>
  );
};
