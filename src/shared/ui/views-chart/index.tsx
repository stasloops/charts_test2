import { Box, Grid, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import { FC } from "react";

interface ViewsChartProps {
  data: { views: number; month: string }[];
}

export const ViewsChart: FC<ViewsChartProps> = ({ data }) => {
  return (
    <Grid item xs={12} md={4}>
      <Box sx={{ backgroundColor: "#fff", borderRadius: 2, p: 2 }}>
        <Typography sx={{ color: "#2a398a", fontSize: "24px" }}>
          Динамика просмотров постов
        </Typography>

        <LineChart
          sx={{ width: "100%" }}
          height={300}
          series={[
            {
              data: data.map((d) => d.views),
              area: true,
              color: "#2196f3",
              label: "Просмотры",
            },
          ]}
          xAxis={[
            {
              scaleType: "point",
              data: data.map((d) => d.month),
              tickLabelStyle: { fontSize: 12 },
            },
          ]}
        />
      </Box>
    </Grid>
  );
};
