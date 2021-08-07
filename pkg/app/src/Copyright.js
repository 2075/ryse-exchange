import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'©'}
      {new Date().getFullYear()}
      {' '}
      <MuiLink color="inherit" href="https://ryse.exchange/">
        ryse.exchange
      </MuiLink>
      {'.'}
    </Typography>
  );
}
