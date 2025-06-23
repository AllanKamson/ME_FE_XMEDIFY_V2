
import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import App from "./App";
import Search from "./Search/Search";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import { createTheme, ThemeProvider } from "@mui/material";
import MyBookings from "./MyBookings/MyBookings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "my-bookings",
        element: <MyBookings />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export const theme = createTheme({
  typography: {
    fontFamily: "Poppins , sans-serif",
  },
  palette: {
    primary: {
      main: "#2AA7FF",
      green: "#00A500",
      secondary: "#1B3C74",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
        },
        contained: {
          color: "#fff",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          width: "90%",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: "#000000",
          fontSize: "56px",
          fontWeight: "700",
        },
        h2: {
          color: "#1B3C74",
          fontWeight: "600",
          fontSize: "48px",
          lineHeight: 1.2,
        },
        h3: {
          color: "#102851",
          fontSize: "30px",
          fontWeight: "500",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          background: "#FAFBFE",
          borderRadius: "8px",
          color: "#ABB6C7",
          "& .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#F0F0F0",
            },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          background: "#FAFBFE",
          borderRadius: "8px",
          color: "#ABB6C7",
          "& .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#F0F0F0",
            },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

theme.typography.h2 = {
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
  },
};

theme.typography.h1 = {
  [theme.breakpoints.down("sm")]: {
    fontSize: "36px",
  },
};

theme.typography.h3 = {
  [theme.breakpoints.down("sm")]: {
    fontSize: "22px",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);



// Main.jsx code which doesn't render on the browser
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { createTheme, ThemeProvider, CssBaseline, responsiveFontSizes } from "@mui/material";
// import App from "./App.jsx";
// import Home from "./Home/Home.jsx";
// import Search from "./Search/Search.jsx";
// import MyBookings from "./MyBookings/MyBookings.jsx";
// import "./global.css";

// let theme = createTheme({
//   typography: {
//     fontFamily: "Poppins, sans-serif", 
//     h1: {
//       color: "#000000",
//       fontSize: "56px",
//       fontWeight: 700,
//     },
//     h2: {
//       color: "#1B3C74",
//       fontWeight: 600,
//       fontSize: "48px",
//       lineHeight: 1.2,
//     },
//     h3: {
//       color: "#102851",
//       fontSize: "30px",
//       fontWeight: 500,
//     },
//     h4: {
//       color: "#102851",
//       fontSize: "24px",
//       fontWeight: 600,
//     },
//   },
//   palette: {
//     primary: {
//       main: "#2AA7FF", 
//       green: "#00A500", 
//       secondary: "#1B3C74",
//     },
//     background: {
//       default: "#fff", 
//     },
//   },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: "8px",
//           textTransform: "none",
//           boxShadow: 'none', 
//           '&:hover': {
//             boxShadow: 'none', 
//           },
//         },
//         contained: {
//           color: "#fff",
//         },
//       },
//     },
//     MuiContainer: {
//       styleOverrides: {
//         root: {
//           width: "90%", 
//         },
//       },
//     },
//     MuiSelect: {
//       styleOverrides: {
//         root: {
//           background: "#FAFBFE",
//           borderRadius: "8px",
//           color: "#ABB6C7",
//           '& fieldset': { 
//             borderColor: "#F0F0F0",
//           },
//           '&:hover fieldset': {
//             borderColor: "#F0F0F0 !important", 
//           },
//           '&.Mui-focused fieldset': {
//             borderColor: "#F0F0F0 !important", 
//           },
//         },
//       },
//     },
//     MuiTextField: {
//       styleOverrides: {
//         root: {
//           background: "#FAFBFE",
//           borderRadius: "8px",
//           color: "#ABB6C7",
//           '& fieldset': { 
//             borderColor: "#F0F0F0",
//           },
//           '&:hover fieldset': {
//             borderColor: "#F0F0F0 !important", 
//           },
//           '&.Mui-focused fieldset': {
//             borderColor: "#F0F0F0 !important", 
//           },
//         },
//       },
//     },
//     MuiTab: {
//       styleOverrides: {
//         root: {
//           textTransform: 'none', 
//         },
//       },
//     },
//   },
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 900,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
// });

// theme = responsiveFontSizes(theme);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { path: "/", element: <Home /> }, 
//       { path: "search", element: <Search /> }, 
//       { path: "my-bookings", element: <MyBookings /> }, 
//     ],
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <StrictMode>
//     <ThemeProvider theme={theme}> 
//       <RouterProvider router={router} />
//     </ThemeProvider>
//   </StrictMode>
// );
