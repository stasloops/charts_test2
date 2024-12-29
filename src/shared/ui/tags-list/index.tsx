import { Box, Button, Grid, Typography } from "@mui/material";
import { FC, useState } from "react";

interface TagsListProps {
  data: { tag: string; count: number }[];
  initialDisplayCount?: number;
}

export const TagsList: FC<TagsListProps> = ({
  data,
  initialDisplayCount = 8,
}) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const displayedTags = showAll
    ? data
    : data.slice(0, initialDisplayCount);

  return (
    <Grid item xs={12} md={4}>
          <Box sx={{ backgroundColor: "#fff", borderRadius: 2, p: 2 }}>
            <Typography sx={{ color: "#2a398a", fontSize: "24px" }}>
              Теги под горизонтальными видео
            </Typography> <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px", p: 2 }}>
              {displayedTags.map((item) => (
                <Box
                  key={item.tag}
                  sx={{
                    display: "inline-block",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 1,
                  }}
                >
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "4px" }}
                  >
                    <Button
                      sx={{
                        backgroundColor: "#eff6f6",
                        color: "#358a93",
                        fontSize: "0.875rem",
                        borderRadius: "12px",
                      }}
                    >
                      {item.tag}
                    </Button>
                    <Typography
                      sx={{
                        color: "#919EAB",
                        fontSize: "0.875rem",
                      }}
                    >
                      {item.count}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            {data.length > initialDisplayCount && (
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
        </Grid>
  );
};
