import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import { trTR, enUS } from '@mui/material/locale';
// import { trTR as trDataGrid, enUS as usDataGrid } from '@mui/x-data-grid';
// import { trTR as trDatePicker, enUS as usDatePicker } from '@mui/x-date-pickers';


const DEFAULT_THEME = {
  palette: {
    white: "#FFFFFF",
    black: "#000000",
    darkGray: "#3E3F40",
    gray: "#8C8C8B",
    lightGray: "#D9D9D6",
    super_primary: "#EFDF00",
    super_primary_hover: "#F8EB4C",
    primary: "#000",
    primary_hover: "#EFDF00",
  },
  typography: {
    fontFamilyRegular: "NouvelR-Regular !important",
    fontFamilyBold: "NouvelR-Bold !important",
    fontFamilyExtraBold: "NouvelR-Extrabold !important",
    fontFamilyBook: "NouvelR-Book !important"
  },
};


const useThemes = () => {
  const { i18n } = useTranslation();
  const coreLanguage = i18n.language === "en" ? enUS : trTR

  //#TODO uncomment for datapicker and datagrid locale language
  // const dataGridLanguage = i18n.language === "en" ? usDataGrid : trDataGrid
  // const datePickerLanguage = i18n.language === "en" ? usDatePicker : trDatePicker

  function getTheme() {
    const theme = createTheme({
      palette: {
        // type: isDark ? 'dark' : 'light',
        primary: {
          main: DEFAULT_THEME.palette.primary,
        },
        secondary: {
          main: DEFAULT_THEME.palette.primary,
        },
        blue: {
          main: "#1f2532",
        },
        common: {
          transparent: "#ffffff00",
        },
        shape: {
          borderRadius: 4,
        },
        success: {
          main: DEFAULT_THEME.palette.primary,
        },
      },
      typography: {
        fontFamily: DEFAULT_THEME.typography.fontFamily,
      },
      breakpoints: {
        values: {
          // extra-small
          xs: 0,
          // small
          sm: 600,
          // medium
          md: 900,
          // large
          lg: 1200,
          tablet: 680,
          // extra-large
          xl: 1600,
        }
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              width: 200,
              height: 45,
              padding: 15,
              textTransform: "none",
              fontSize: "1rem",
              borderRadius: 0,
              fontFamily: DEFAULT_THEME.typography.fontFamilyBold,
            },

          },

          // containedSecondary: {
          //     '&:hover': {
          //         backgroundColor: '#000',
          //     }
          // },
        },
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              // borderRadius: 0
            },
          },
        },
        MuiInput: {
          styleOverrides: {
            root: {
              borderColor: "white",
            },
            underline: {
              "&:hover:not($disabled):before": {
                borderColor: DEFAULT_THEME.palette.primary,
              },
            },
          },
        },
        MuiCheckbox: {
          defaultProps: {
            disableRipple: 'true'
          },
          styleOverrides: {
            root: {
              "&.Mui-checked": {
                color: DEFAULT_THEME.palette.primary_dark,
              },

            },
          }
        },
        MuiListItem: {
          defaultProps: {
            disableRipple: 'true'
          },
        },
        MuiAccordionSummary: {
          styleOverrides: {
            content: {
              flexGrow: 0
            }
          }
        },
        MuiCollapse: {
          styleOverrides: {
            root: {
              textAlign: "center"
            }
          }
        },
        MuiTextField: {
          styleOverrides: {
            root: {
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: DEFAULT_THEME.palette.gray,
              },
              "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: DEFAULT_THEME.palette.gray,
              },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#000000",
                border: "2px solid",
              },
            },
          },
        },
        MuiGrid: {
          styleOverrides: {
            root: {
              '.MuiGrid-item': {
                // paddingTop: 0,
                // paddingLeft: 0
              }

            }
          },
        }

      }

    },
      coreLanguage,
      //#TODO uncomment for datapicker and datagrid locale language
      // dataGridLanguage,
      // datePickerLanguage
    );

    // return theme
    return responsiveFontSizes(theme);
  }
  return getTheme
}


export { useThemes, DEFAULT_THEME };
