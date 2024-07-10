import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const StreamEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="game_title" source="gameTitle" />
        <TextInput label="stream_key" source="streamKey" />
        <TextInput label="stream_url" source="streamUrl" />
      </SimpleForm>
    </Edit>
  );
};
