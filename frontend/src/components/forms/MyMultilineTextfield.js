import * as React from "react";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

export default function MyMultilineTextfield(props) {
  const { label, placeholder, name, control } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          id="standard-multiline-static"
          label={label}
          variant="standard"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error ? error.message : ""}
          fullWidth
        />
      )}
    />
  );
}
