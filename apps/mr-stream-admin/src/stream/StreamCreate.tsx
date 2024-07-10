import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const StreamCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="game_title" source="gameTitle" />
        <TextInput label="stream_key" source="streamKey" />
        <TextInput label="stream_url" source="streamUrl" />
      </SimpleForm>
    </Create>
  );
};
