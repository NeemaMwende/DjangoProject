import React from "react";
import { Box, Typography } from "@mui/material";
import MyDatePickerField from "./forms/MyDatePickerField";
import MyMultilineTextField from "./forms/MyMultilineTextfield";
import MySelectField from "./forms/MySelectField";
import MyTextField from "./forms/MyTextField";
import { useForm } from "react-hook-form";

const Create = () => {
  const { handleSubmit, reset, setValue, control } = useForm();

  return (
    <div>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          background: "#00003f",
          padding: "16px 0",
          marginBottom: "16px",
        }}
      >
        <Typography variant="h6" sx={{ color: "#fff" }}>
          Create Records
        </Typography>
      </Box>

      {/* Form Container */}
      <Box
        sx={{
          width: "90%",
          maxWidth: "1000px",
          margin: "0 auto",
          boxShadow: 3,
          borderRadius: 2,
          padding: 4,
          backgroundColor: "#fff",
        }}
      >
        {/* Form Row */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ flex: "1 1 300px" }}>
            <MyTextField
              label="Name"
              name="name"
              control={control}
              placeholder="Provide a project name"
            />
          </Box>

          <Box sx={{ flex: "1 1 200px" }}>
            <MyDatePickerField
              label="Start Date"
              name="start_date"
              control={control}
            />
          </Box>

          <Box sx={{ flex: "1 1 200px" }}>
            <MyDatePickerField
              label="End Date"
              name="end_date"
              control={control}
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Create;
