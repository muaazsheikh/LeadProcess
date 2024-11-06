import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  TextField,
  Box,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  FilledTextFieldProps,
  OutlinedTextFieldProps,
  StandardTextFieldProps,
  TextFieldVariants,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { FilterList, Sort, Add } from "@mui/icons-material";
import { DatePicker } from "@mui/lab";
import { JSX } from "react/jsx-runtime";
interface HeaderProps {
  dateRange: [Date | null, Date | null];
  setDateRange: React.Dispatch<
    React.SetStateAction<[Date | null, Date | null]>
  >;
}

const Header: React.FC<HeaderProps> = ({ dateRange, setDateRange }) => {
  const [anchorElSort, setAnchorElSort] = useState<null | HTMLElement>(null);
  const [anchorElFilter, setAnchorElFilter] = useState<null | HTMLElement>(
    null
  );

  const handleSortClick = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElSort(event.currentTarget);
  const handleFilterClick = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElFilter(event.currentTarget);
  const handleMenuClose = () => {
    setAnchorElSort(null);
    setAnchorElFilter(null);
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ borderBottom: "1px solid #e0e0e0", padding: "0 16px" }}
    >
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          New Project Leads
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton onClick={handleSortClick}>
            <Sort />
          </IconButton>
          <Menu
            anchorEl={anchorElSort}
            open={Boolean(anchorElSort)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Sort by Date</MenuItem>
            <MenuItem onClick={handleMenuClose}>Sort by Name</MenuItem>
          </Menu>

          <IconButton onClick={handleFilterClick}>
            <FilterList />
          </IconButton>
          <Menu
            anchorEl={anchorElFilter}
            open={Boolean(anchorElFilter)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Filter by Status</MenuItem>
            <MenuItem onClick={handleMenuClose}>Filter by Revenue</MenuItem>
          </Menu>

          {/* <LocalizationProvider dateAdapter={AdapterDateFns}> */}
          <DatePicker
            value={dateRange}
            onChange={(
              newValue: React.SetStateAction<[Date | null, Date | null]>
            ) => setDateRange(newValue)}
            renderInput={(
              startProps: JSX.IntrinsicAttributes & {
                variant?: TextFieldVariants | undefined;
              } & Omit<
                  | OutlinedTextFieldProps
                  | FilledTextFieldProps
                  | StandardTextFieldProps,
                  "variant"
                >,
              endProps: JSX.IntrinsicAttributes & {
                variant?: TextFieldVariants | undefined;
              } & Omit<
                  | OutlinedTextFieldProps
                  | FilledTextFieldProps
                  | StandardTextFieldProps,
                  "variant"
                >
            ) => (
              <>
                <TextField {...startProps} variant="outlined" size="small" />
                <Box sx={{ mx: 1 }}> to </Box>
                <TextField {...endProps} variant="outlined" size="small" />
              </>
            )}
          />
          {/* </LocalizationProvider> */}

          <Button
            variant="contained"
            startIcon={<Add />}
            sx={{ textTransform: "none" }}
          >
            Add
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
