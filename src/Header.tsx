import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  return (
    <AppBar position="fixed">
      <Toolbar>
				<Box sx={{ flexGrow: 1 }}>
					<img src="/yals.png" height="50" width="50" style={{borderRadius: "3px"}}/>
				</Box>
        <Button color="inherit">Sign in</Button>
        <Button color="inherit">Sign up</Button>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
