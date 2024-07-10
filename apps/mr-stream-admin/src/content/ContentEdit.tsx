import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ContentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content_id" source="contentId" />
        <NumberInput label="amount" source="amount" />
      </SimpleForm>
    </Edit>
  );
};
