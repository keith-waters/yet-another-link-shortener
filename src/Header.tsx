import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function Header() {
  return (
    <Box
      sx={{
        height: "50px",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box sx={{ flexGrow: "1" }} />
      <Box>
        <Button>Sign in</Button>
        <Button variant="contained">Sign up</Button>
      </Box>
    </Box>
  );
}
