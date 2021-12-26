import {createTheme} from '@mui/material'

export const theme = createTheme({
  components: {

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'inherit',
          fontSize: 16,
          color: 'black',
          transition: 'none',
          // '&:active': {
          //   boxShadow:
          //     '0 1px 1px rgb(0 0 0 / 15%), 0 4px 7px rgb(0 0 0 / 0%), 0 -1px 0 rgb(0 0 0 / 5%), -1px 0 0 rgb(0 0 0 / 5%), 1px 0 0 rgb(0 0 0 / 5%) !important',
          //   transform: 'translateY(1px)',
          // },
        },
  
        contained: {
          backgroundColor: 'white',
          boxShadow:
          '0 1px 1px rgb(0 0 0 / 15%), 0 4px 7px rgb(0 0 0 / 5%), 0 -1px 0 rgb(0 0 0 / 5%), -1px 0 0 rgb(0 0 0 / 5%), 1px 0 0 rgb(0 0 0 / 5%)',
          '&:hover': {
            backgroundColor: 'white'
          }
        }
      }
    }
  }
})