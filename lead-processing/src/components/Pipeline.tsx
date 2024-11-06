import React, { useState } from "react";
import { Box, Typography, Paper, Stack, Divider } from "@mui/material";
import {
  Work,
  Phone,
  Upload,
  Description,
  AttachMoney,
  Payment,
  Build,
  Done,
  Feedback,
} from "@mui/icons-material";

interface PipelineStage {
  label: string;
  count: number;
  percentage: number;
  days: number;
  icon: React.ReactElement;
}

const pipelineStages: PipelineStage[] = [
  { label: "New", count: 200, percentage: 100, days: 3, icon: <Work /> },
  { label: "Contact", count: 50, percentage: 70, days: 12, icon: <Phone /> },
  {
    label: "Upload Scope",
    count: 30,
    percentage: 30,
    days: 3,
    icon: <Upload />,
  },
  {
    label: "Estimate",
    count: 12,
    percentage: 40,
    days: 3,
    icon: <Description />,
  },
  {
    label: "SignContract",
    count: 15,
    percentage: 20,
    days: 9,
    icon: <AttachMoney />,
  },
  { label: "Payment", count: 2, percentage: 20, days: 8, icon: <Payment /> },
  { label: "Installation", count: 8, percentage: 10, days: 5, icon: <Build /> },
  { label: "Completed", count: 10, percentage: 10, days: 5, icon: <Done /> },
  { label: "Feedback", count: 30, percentage: 30, days: 8, icon: <Feedback /> },
];

const Pipeline: React.FC = () => {
  const [activeStage, setActiveStage] = useState<string>("New");

  return (
    <Paper sx={{ p: 2, backgroundColor: "#f5f5f5" }}>
      <Stack direction="row" alignItems="center" spacing={1}>
        {pipelineStages.map((stage, index) => (
          <React.Fragment key={index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: "bold", mb: 0.5 }}
              >
                {stage.label}
              </Typography>
              <Box
                onClick={() => setActiveStage(stage.label)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  px: 2,
                  py: 0.5,
                  cursor: "pointer",
                  backgroundColor:
                    activeStage === stage.label ? "#28a1a1" : "white",
                  color: activeStage === stage.label ? "white" : "black",
                  clipPath:
                    index === 0
                      ? "polygon(0% 0%, 85% 0%, 95% 50%, 85% 100%, 0% 100%)" // First item: rectangle
                      : "polygon(0% 0%, 85% 0%, 95% 50%, 85% 100%, 0% 100%, 10% 50%)", // Arrow shape for middle items
                  transition: "background-color 0.3s ease",
                  width: "120px",
                  textAlign: "center",
                  boxShadow:
                    activeStage === stage.label
                      ? "0 4px 8px rgba(0, 0, 0, 0.2)"
                      : "none",
                  borderRadius: 2,
                }}
              >
                {stage.icon}
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ ml: 0.5, py: 0.5, px: 1.5 }}
                >
                  {stage.count}
                </Typography>
              </Box>
              <Typography variant="caption" color="textSecondary">
                {stage.percentage}% • {stage.days} DAYS
              </Typography>
            </Box>

            {/* Add Divider between items */}
            {/* {index < pipelineStages.length - 1 && (
              <Box
                sx={{
                  display: "flex",
                  alignSelf: "center",
                  justifyContent: "center",
                  width: "10px",
                  height: "40px",
                  "&:before": {
                    content: '""',
                    position: "absolute",
                    width: "1px",
                    height: "40px",
                    // backgroundColor: "#d3d3d3",
                  },
                  "&:after": {
                    content: '""',
                    position: "absolute",
                    width: "10px",
                    height: "50px",
                    background: "linear-gradient(to right, transparent, #000)",
                    clipPath: "polygon(0 0, 100% 50%, 0 100%)",
                  },
                }}
              />
            )} */}
          </React.Fragment>
        ))}
      </Stack>

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <Typography variant="caption" color="textSecondary">
          120 Active Leads
        </Typography>
        <Typography variant="caption" color="textSecondary">
          ✔️ COMPLETED (10)
        </Typography>
      </Box>
    </Paper>
  );
};

export default Pipeline;
