import { Box, Grid, Typography } from "@mui/material";
import { FC, useState } from "react";

interface CountriesListProps {
  data: { country: string; percentage: number }[];
  initialDisplayCount?: number;
}

export const CountriesList: FC<CountriesListProps> = ({
  data,
  initialDisplayCount = 4,
}) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const displayedCountries = showAll
    ? data
    : data.slice(0, initialDisplayCount);

  return (
    <Grid item xs={12} md={4}>
      <Box sx={{ backgroundColor: "#fff", borderRadius: 2 }}>
        <Typography sx={{ color: "#2a398a", fontSize: "24px", p: 2 }}>
          Тематика видео в роликах
        </Typography>

        <Box sx={{ p: 2 }}>
          {displayedCountries.map((item) => (
            <Box sx={{ p: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <Typography sx={{ color: "#d1d5db" }}>
                  {item.country}
                </Typography>
                <Typography sx={{ color: "#549b9d" }}>
                  {item.percentage}%
                </Typography>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  height: "8px",
                  backgroundColor: "#faf3f5",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <Box sx={{ width: "80%", backgroundColor: "#3eaaaa" }}>1</Box>
              </Box>
            </Box>
          ))}

          {data.length > 4 && (
            <Typography
              onClick={() => setShowAll((prev) => !prev)}
              sx={{
                cursor: "pointer",
                color: "#549b9d",
                mt: 2,
              }}
            >
              {showAll ? "Показать меньше" : "Показать больше"}
            </Typography>
          )}
        </Box>
      </Box>
    </Grid>
  );
};
