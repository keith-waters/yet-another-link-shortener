import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" style={{marginTop: '100px'}}>
      {'Copyright © '}
      <MuiLink color="inherit" href="https://readingwaters.com/">
        ReadingWaters
      </MuiLink>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}
