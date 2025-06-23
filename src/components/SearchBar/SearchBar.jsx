import React, { useState, useMemo } from "react";
import { Stack, Box, TextField, Button, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search"; 

export default function SearchBar({ list, filterList }) {
  const [inputText, setInputText] = useState(""); 

  const filteredList = useMemo(() => {
    if (!inputText.trim()) {
      return list; 
    }
    return list.filter((item) =>
      item["Hospital Name"]
        .toLowerCase()
        .includes(inputText.trim().toLowerCase())
    );
  }, [inputText, list]); 

  const handleSubmit = (e) => {
    e.preventDefault();
    filterList(filteredList);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack direction="row" spacing={2} sx={{ width: '100%' }}>
        <TextField
          type="text"
          label="Search By Hospital"
          variant="outlined"
          fullWidth
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          inputProps={{ maxLength: 100 }} 
          InputProps={{ 
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          startIcon={<SearchIcon />}
          sx={{ py: "15px", px: { xs: 3, md: 8 }, flexShrink: 0 }} 
          disableElevation 
        >
          Search
        </Button>
      </Stack>
    </Box>
  );
}