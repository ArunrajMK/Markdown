import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
    fontSize: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 3,
          textTransform: "none",
        },
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
          flexDirection: "column",
        },
      },
    },
 
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            border: "none",
            "&:focus": {
              border: "none", 
            },
          },

          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },

          backgroundColor: "rgba(244, 246, 246, 1)",
          "& label.Mui-focused": {
            color: "rgba(166, 166, 166, 1)",
          },
          "& .MuiFilledInput-root": {
            backgroundColor: "rgba(244, 246, 246, 1)",
          },
          "&:hover .MuiFilledInput-root": {
            backgroundColor: "rgba(244, 246, 246, 1)",
          },
          "& fieldset": {
            border: "none",
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: "rgba(70, 144, 255, 1)",
    },
    secondary: {
      main: "#FFFFFF",
    },
    error: {
      main: "#C12025",
    },
    info: {
      main: "#1B2535",
    },
  },
  sizing: {
    width: {
      default: 600,
    },
    height: {
      default: 400,
    },
  },
});

export default theme;
