import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { Auth } from "@supabase/ui";
import { supabase } from "../src/supabaseClient";

export default function Header() {
  const { user } = Auth.useUser();

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
        {user ? (
          <Button onClick={() => supabase.auth.signOut()}>Sign out</Button>
        ) : (
          <Link href="/auth">
            <Button color="inherit">Sign up</Button>
          </Link>
        )}
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
