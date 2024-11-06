import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Chip,
  Avatar,
  IconButton,
  Button,
  Divider,
  MenuItem,
  Select,
  CircularProgress,
  Stack,
} from "@mui/material";
import {
  Phone,
  Email,
  LocationOn,
  ExpandMore,
  MoreVert,
  Edit,
  AttachFile,
  CameraAlt,
} from "@mui/icons-material";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Pipeline from "./Pipeline";

interface Lead {
  followUpStatus: any;
  id: number;
  name: string;
  address: string;
  revenue: string;
  likelihood: string;
  contact: string;
  email: string;
  projectInfo: string;
}

const leadsData: Lead[] = [
  {
    id: 1,
    name: "Brown's Bathroom Remodel",
    address: "4517 Washington Ave. Manchester, KY",
    revenue: "$120,000.00",
    likelihood: "75",
    contact: "(907) 555-0101",
    email: "example@email.com",
    projectInfo: "Bathroom modeling",
    followUpStatus: true,
  },
  {
    id: 2,
    name: "Nijum's Bedroom Remodel",
    address: "4517 Washington Ave. Manchester, KY",
    revenue: "$150,000.00",
    likelihood: "80",
    contact: "(907) 555-0202",
    email: "nijum@example.com",
    projectInfo: "Bedroom modeling",
    followUpStatus: false,
  },
];

const LeadsDashboard: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>("Dashboard");
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);

  const renderContent = () => {
    if (selectedMenu === "Lead Pipeline") {
      return (
        <>
          <Header dateRange={dateRange} setDateRange={setDateRange} />

          <Pipeline />
          <Box p={3}>
            <Grid container spacing={2}>
              {leadsData.map((lead) => (
                <Grid item xs={12} key={lead.id}>
                  <Card
                    sx={{
                      display: "flex",
                      p: 2,
                      borderRadius: 2,
                      boxShadow: 3,
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    {/* Follow-up Status Indicator */}
                    <Box
                      sx={{
                        minWidth: 90,
                        height: "100%",
                        bgcolor: lead.followUpStatus ? "#C8E6C9" : "#E0F7FA",
                        borderRadius: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        py: 1,
                      }}
                    >
                      <Typography variant="caption" color="textSecondary">
                        No
                      </Typography>
                      <Typography variant="subtitle2" color="primary">
                        Follow up
                      </Typography>
                    </Box>

                    {/* Lead Info */}
                    <Box flexGrow={1} pl={2}>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                          {lead.name}
                        </Typography>
                        <Typography variant="caption" color="textSecondary">
                          0185000
                        </Typography>
                      </Stack>
                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        mt={0.5}
                      >
                        <Phone fontSize="small" color="action" />
                        <Typography variant="body2" color="textSecondary">
                          {lead.contact}
                        </Typography>
                        <Email fontSize="small" color="action" sx={{ ml: 2 }} />
                        <Typography variant="body2" color="textSecondary">
                          {lead.email}
                        </Typography>
                      </Stack>
                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        mt={0.5}
                      >
                        <LocationOn fontSize="small" color="action" />
                        <Typography variant="body2" color="textSecondary">
                          {lead.address}
                        </Typography>
                      </Stack>
                      <Button
                        size="small"
                        startIcon={<ExpandMore />}
                        sx={{
                          mt: 1,
                          textTransform: "none",
                          fontSize: "0.8rem",
                          color: "textSecondary",
                        }}
                      >
                        Show More
                      </Button>
                    </Box>

                    {/* Project Info and Stats */}
                    <Box sx={{ mx: 2, minWidth: 150, textAlign: "left" }}>
                      <Typography
                        variant="caption"
                        color="textSecondary"
                        sx={{ display: "block" }}
                      >
                        Project info
                      </Typography>
                      <Select
                        value={lead.projectInfo}
                        size="small"
                        sx={{
                          mt: 0.5,
                          width: "100%",
                          fontSize: "0.9rem",
                          backgroundColor: "#f5f5f5",
                        }}
                      >
                        <MenuItem value="Bathroom modeling">
                          Bathroom modeling
                        </MenuItem>
                        <MenuItem value="Bedroom modeling">
                          Bedroom modeling
                        </MenuItem>
                      </Select>
                    </Box>

                    <Box sx={{ mx: 2, textAlign: "center" }}>
                      <Typography
                        variant="caption"
                        color="textSecondary"
                        sx={{ display: "block" }}
                      >
                        Est. Revenue
                      </Typography>
                      <Typography variant="body1" fontWeight="bold">
                        {lead.revenue}
                      </Typography>
                    </Box>

                    <Box sx={{ mx: 2, textAlign: "center" }}>
                      <Typography
                        variant="caption"
                        color="textSecondary"
                        sx={{ display: "block" }}
                      >
                        Likelihood of Sale
                      </Typography>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <CircularProgress
                          variant="determinate"
                          value={parseInt(lead.likelihood)}
                          size={40}
                          color="primary"
                        />
                        <Typography
                          variant="body2"
                          sx={{ ml: 1, fontWeight: "bold", fontSize: "1rem" }}
                        >
                          {lead.likelihood}%
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ mx: 2, textAlign: "center" }}>
                      <Typography
                        variant="caption"
                        color="textSecondary"
                        sx={{ display: "block" }}
                      >
                        Sales Rep
                      </Typography>
                      <Stack direction="row" spacing={-1} mt={1}>
                        <Avatar
                          src="/path/to/avatar1.jpg"
                          sx={{ width: 24, height: 24 }}
                        />
                        <Avatar
                          src="/path/to/avatar2.jpg"
                          sx={{ width: 24, height: 24 }}
                        />
                        <Avatar
                          src="/path/to/avatar3.jpg"
                          sx={{ width: 24, height: 24 }}
                        />
                      </Stack>
                    </Box>

                    {/* Action Icons */}
                    <Box>
                      <IconButton size="small">
                        <AttachFile fontSize="small" />
                      </IconButton>
                      <IconButton size="small">
                        <Edit fontSize="small" />
                      </IconButton>
                      <IconButton size="small">
                        <CameraAlt fontSize="small" />
                      </IconButton>
                      <IconButton size="small">
                        <MoreVert fontSize="small" />
                      </IconButton>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </>
      );
    } else {
      return (
        <Typography variant="h5">Welcome to the {selectedMenu}</Typography>
      );
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <Box sx={{ flexGrow: 1, p: 3 }}>{renderContent()}</Box>
    </Box>
  );
};

export default LeadsDashboard;
