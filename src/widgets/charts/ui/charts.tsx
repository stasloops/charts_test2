import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";

import { generateViewsData, ViewData } from "@/entities/view";
import { generateTagsData, TagData } from "@/entities/tag";
import { CountryData, generateCountriesData } from "@/entities/country";
import { CountriesList, TagsList, ViewsChart } from "@/shared/ui";

export const Charts: React.FC = () => {
  const [viewsData, setViewsData] = useState<ViewData[] | null>(null);
  const [tagsData, setTagsData] = useState<TagData[] | null>(null);
  const [countriesData, setCountriesData] = useState<CountryData[] | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Можно было сделать сторы в entities, а сюда уже просто импортироовать эти данные, но сделал так
    const fetchData = async () => {
      try {
        const views = generateViewsData();
        const tags = generateTagsData();
        const countries = generateCountriesData();
        setViewsData(views);
        setTagsData(tags);
        setCountriesData(countries);
      } catch {
        setError("Ошибка при загрузке данных");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={3}>
        {viewsData && <ViewsChart data={viewsData} />}

        {tagsData && <TagsList data={tagsData} initialDisplayCount={8} />}

        {countriesData && (
          <CountriesList data={countriesData} initialDisplayCount={4} />
        )}
      </Grid>
    </Box>
  );
};
