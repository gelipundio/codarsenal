import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Box, Tabs, Typography, Tab } from "@mui/material";
import mw3logo from "./images/MW3.webp";
import mw1logo from "./images/MW2019.jpg";
import Mw3Section from "./components/mw3/Mw3Section";
import CssBaseline from "@mui/material/CssBaseline";

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

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <CssBaseline />

      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="tabs"
        >
          <Tab
            {...a11yProps(0)}
            icon={<img className="menuIcon" src={mw3logo} />}
          />
          <Tab
            {...a11yProps(1)}
            icon={<img className="menuIcon" src={mw1logo} />}
          />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <Mw3Section />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Proximamente
      </CustomTabPanel>
    </>
  );
}

export default App;
