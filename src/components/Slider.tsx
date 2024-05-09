// Import necessary components from Material-UI
import Slider, { SliderProps } from "@mui/material/Slider";
import { alpha, styled } from "@mui/material/styles";

// Define a custom styled slider component using Material-UI's styled API
export const StyledSlider = styled(Slider)<SliderProps>(({ theme }) => ({
  height: 9, // Set the height of the slider
  color: "#9F54FF", // Set the color of the slider
  "& .MuiSlider-rail": {
    backgroundColor: "#E4E7EC", // Set the background color of the rail
  },
  "& .MuiSlider-thumb": {
    border: "5.5px solid #9F54FF", // Set the border of the thumb
    color: "white", // Set the color of the thumb
    "&:hover, &.Mui-focusVisible": {
      // Apply styles on hover and focus
      boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`, // Set box shadow on hover and focus
    },
    "&.Mui-active": {
      // Apply styles when active
      boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`, // Set box shadow when active
    },
  },
  "& .MuiSlider-markLabel": {
    top: "32px", // Set the top position of the mark label
    color: theme.palette.text.secondary, // Set the color of the mark label
    fontSize: "0.50rem", // Set the font size of the mark label
    textAlign: "center", // Set the text alignment of the mark label
    whiteSpace: "nowrap", // Prevent wrapping of text
    marginLeft:'0.5rem' // Adjust left margin of mark label
  },
  "& .MuiSlider-markLabel[data-index='0']": {
    transform: "translateX(-50%)", // Translate the first mark label to the left
  },
  "& .MuiSlider-markLabel[data-index='7']": {
    transform: "translateX(50%)", // Translate the last mark label to the right
  },
}));

// Export the styled slider component
export default StyledSlider;
