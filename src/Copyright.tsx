import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";

export default function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ marginTop: "100px", marginBottom: '20px' }}
    >
      {"Copyright © "}
      <MuiLink color="inherit" href="https://readingwaters.com/">
        ReadingWaters
      </MuiLink>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}
