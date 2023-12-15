import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import weapons from "../../data/weapons";
import defaultIcon from "../../images/default_weapon.webp";
import "./Mw3Weapons.css";

function Mw3Weapons(props) {
  return (
    <div className={"weaponsGrid"}>
      {Object.keys(weapons).map((w) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={defaultIcon}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {weapons[w].name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {weapons[w].description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}

export default Mw3Weapons;
