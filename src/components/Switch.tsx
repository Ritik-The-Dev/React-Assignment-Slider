// Import necessary components from Material-UI
import { styled } from "@mui/material/styles";
import Switch, { SwitchProps } from "@mui/material/Switch";

// Define a custom styled switch component using Material-UI's styled API
export const StyledSwitch = styled(Switch)<SwitchProps>(({ theme }) => ({
  width: 36, // Set the width of the switch
  height: 20, // Set the height of the switch
  padding: 0, // Set padding to zero
  "& .MuiSwitch-switchBase": {
    padding: 0, // Set padding to zero
    margin: 2, // Set margin
    transitionDuration: "300ms", // Set transition duration
    "&.Mui-checked": {
      // Apply styles when switch is checked
      transform: "translateX(16px)", // Translate the switch thumbs when checked
      color: "#fff", // Set the color of the switch thumb when checked
      "& + .MuiSwitch-track": {
        // Apply styles to the track when switch is checked
        backgroundColor:
          theme.palette.mode === "dark" ? "#2ECA45" : "#2CAE9D", // Set background color of the track when checked
        opacity: 1, // Set opacity of the track when checked
        border: 0, // Remove border of the track when checked
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        // Apply styles to the track when switch is checked and disabled
        opacity: 0.5, // Set opacity of the track when checked and disabled
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      // Apply styles when switch is focused
      color: "#2CAE9D", // Set color of the switch thumb when focused
      border: "6px solid #fff", // Add border to the switch thumb when focused
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      // Apply styles when switch is disabled
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600], // Set color of the switch thumb when disabled
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      // Apply styles to the track when switch is disabled
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3, // Set opacity of the track when disabled
    },
  },
  "& .MuiSwitch-thumb": {
    // Styles for the switch thumb
    boxSizing: "border-box", // Set box sizing
    width: 16, // Set width of the thumb
    height: 16, // Set height of the thumb
  },
  "& .MuiSwitch-track": {
    // Styles for the switch track
    borderRadius: 26 / 2, // Set border radius of the track
    backgroundColor:
      theme.palette.mode === "light" ? "#E9E9EA" : "#2CAE9D", // Set background color of the track
    opacity: 1, // Set opacity of the track
    transition: theme.transitions.create(["background-color"], {
      duration: 500, // Set duration of transition for background color
    }),
  },
}));

// Export the styled switch component
export default StyledSwitch;
