import 'typeface-roboto';

import { createMuiTheme } from '@material-ui/core/styles';


const TesterUITheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    type: 'dark'
  }
});

export default TesterUITheme
