import { Container, Box, Typography, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import Mw3Weapons from "./Mw3Weapons";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Mw3Section(props) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Armas" {...a11yProps(0)} />
            <Tab label="Camuflajes" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Mw3Weapons />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Camos
        </CustomTabPanel>
      </Box>
    </Container>
  );
}
export default Mw3Section;
