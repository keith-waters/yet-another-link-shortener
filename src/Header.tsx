import { useState, useEffect } from "react";
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
import { useRouter } from 'next/router'

export default function Header() {
	const session = useAuth()
	const router = useRouter()
	const [userLoggedOut, setUserLoggedOut] = useState(true)

	useEffect(() => {
		if(Object.keys(session).length > 0) {
			setUserLoggedOut(false)
		} else {
			setUserLoggedOut(true)
		}
	}, [session])

	const handleLogout = () => {
		supabase.auth.signOut()
		router.push('/')
		router.reload()
	}

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
        {userLoggedOut && (
          <Link href="/sign_up">
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
            {!userLoggedOut ? (
              <MenuItem onClick={handleLogout}>
                Logout
              </MenuItem>
            ) : (
              <Link href="/login">
                <MenuItem color="inherit">Login</MenuItem>
              </Link>
            )}
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}
