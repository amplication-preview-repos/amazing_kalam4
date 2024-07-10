import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const StreamShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="game_title" source="gameTitle" />
        <TextField label="stream_key" source="streamKey" />
        <TextField label="stream_url" source="streamUrl" />
      </SimpleShowLayout>
    </Show>
  );
};
