import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import cyan from '@material-ui/core/colors/cyan';


export default createMuiTheme({
    // https://material-ui.com/customization/themes/
    // https://material-ui.com/style/color/
    palette: {
        primary: cyan,
        secondary: indigo
    }
});