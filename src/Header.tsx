import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { supabase } from "../src/supabaseClient";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useAuth } from '../src/AuthContext'

export default function Header() {
  const session = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <img
            src="/yals.png"
            height="50"
            width="50"
            style={{ borderRadius: "3px" }}
          />
        </Box>
        {!session && (
          <Link href="/auth">
            <Button color="inherit">Sign up</Button>
          </Link>
        )}
        <div>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
						<Link href="/dashboard/profile">
							<MenuItem color="inherit">Profile</MenuItem>
						</Link>
						<Link href="/dashboard">
							<MenuItem color="inherit">Dashboard</MenuItem>
						</Link>
            {session ? (
              <MenuItem onClick={() => supabase.auth.signOut()}>
                Logout
              </MenuItem>
            ) : (
              <Link href="/auth">
                <MenuItem color="inherit">Login</MenuItem>
              </Link>
            )}
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}
