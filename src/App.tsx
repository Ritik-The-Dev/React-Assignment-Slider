// App.ts

import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import StyledSlider from "./components/Slider";
import { StyledSwitch } from "./components/Switch";
import { motion } from "framer-motion";

export default function App() {
  // State variables for slider value and auto top-up setting
  const [sliderValue, setSliderValue] = useState(10);
  const [autoTopUp, setAutoTopUp] = useState(true);

  // Get the current window width
  const windowWidth = window.innerWidth;

  // Marks for the slider
  const marks = [
    {
      value: 5,
      label: (
        <Typography variant="body2">
          <span className=" font-extrabold text-black">$5</span> <br />
          <span
            className={`  ${
              windowWidth > 750 && "font-semibold ml-12"
            } text-[#939393] break-words`}
          >
            500{" "}
            {windowWidth < 750 ? (
              <span>
                <br />
                credits
              </span>
            ) : (
              "credits"
            )}
          </span>
        </Typography>
      ),
    },
    {
      value: 10,
      label: (
        <Typography variant="body2">
          <span className=" font-extrabold text-black">$10</span> <br />
          <span
            className={`  ${
              windowWidth > 750 && "font-semibold ml-12"
            } text-[#939393] break-words`}
          >
            1200{" "}
            {windowWidth < 750 ? (
              <span>
                <br />
                credits
              </span>
            ) : (
              "credits"
            )}
          </span>
        </Typography>
      ),
    },
    {
      value: 15,
      label: (
        <Typography variant="body2">
          <span className=" font-extrabold text-black">$15</span> <br />
          <span
            className={`  ${
              windowWidth > 750 && "font-semibold ml-12"
            } text-[#939393] break-words`}
          >
            1700{" "}
            {windowWidth < 750 ? (
              <span>
                <br />
                credits
              </span>
            ) : (
              "credits"
            )}
          </span>
        </Typography>
      ),
    },
    {
      value: 20,
      label: (
        <Typography variant="body2">
          <span className=" font-extrabold text-black">$20</span> <br />
          <span
            className={`  ${
              windowWidth > 750 && "font-semibold ml-12"
            } text-[#939393] break-words`}
          >
            2500{" "}
            {windowWidth < 750 ? (
              <span>
                <br />
                credits
              </span>
            ) : (
              "credits"
            )}
          </span>
        </Typography>
      ),
    },
    {
      value: 25,
      label: (
        <Typography variant="body2">
          <span className=" font-extrabold text-black">$25</span> <br />
          <span
            className={`  ${
              windowWidth > 750 && "font-semibold ml-12"
            } text-[#939393] break-words`}
          >
            3900{" "}
            {windowWidth < 750 ? (
              <span>
                <br />
                credits
              </span>
            ) : (
              "credits"
            )}
          </span>
        </Typography>
      ),
    },
    {
      value: 30,
      label: (
        <Typography variant="body2">
          <span className=" font-extrabold text-black">$30</span> <br />
          <span
            className={`  ${
              windowWidth > 750 && "font-semibold ml-12"
            } text-[#939393] break-words`}
          >
            5000{" "}
            {windowWidth < 750 ? (
              <span>
                <br />
                credits
              </span>
            ) : (
              "credits"
            )}
          </span>
        </Typography>
      ),
    },
  ];

  // Function to get credit amount based on slider value
  const getCredit = (ammount: number) => {
    switch (ammount) {
      case 5:
        return 500;
      case 10:
        return 1200;
      case 15:
        return 1700;
      case 20:
        return 2500;
      case 25:
        return 3900;
      case 30:
        return 5000;
      default:
        return 0;
    }
  };

  // Handler function for slider value change
  const handleSliderChange = (_event: any, newValue: any) => {
    setSliderValue(newValue);
  };

  // Handler function for switch change
  const handleSwitchChange = () => {
    setAutoTopUp(!autoTopUp);
  };

  return (
    <div className="bg-black w-screen p-3 h-screen flex items-center justify-center overflow-hidden">
      <div className="flex bg-white flex-col items-start p-10 justify-center max-w-[850px] rounded-2xl">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            stiffness: 300,
            damping: 15,
            duration: 0.5,
          }}
          className="flex mb-3 items-center justify-center gap-4"
        >
          <Typography
            variant="h6"
            component="h1"
            style={{ fontWeight: "550", whiteSpace: "nowrap" }}
          >
            Setup Auto Top-up
          </Typography>
          {/* Styled switch component */}
          <StyledSwitch
            sx={{ m: 1 }}
            checked={autoTopUp}
            onChange={handleSwitchChange}
          />
        </motion.div>
        {/* Information about auto purchase */}
        <motion.div
          initial={{ y: autoTopUp ? 0 : -50, opacity: autoTopUp ? 1 : 0 }}
          animate={{ y: autoTopUp ? 0 : -50, opacity: autoTopUp ? 1 : 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: autoTopUp ? 15 : 30, // Adjust damping based on button state
            duration: autoTopUp ? 0.5 : 0.8, // Adjust duration based on button state
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            visibility: autoTopUp ? "visible" : "hidden",
          }}
        >
          <Typography className="text-[#939393]">
            Once the credit goes below a minimum thresholds
            <span className="text-[#9847FF] font-bold"> 50</span>, we will
            auto-purchase{" "}
            <span className="text-[#9847FF] font-bold">
              {getCredit(sliderValue)}
            </span>{" "}
            credits and add them to your account.{" "}
            <span className="text-[#939393] underline font-bold cursor-pointer">
              Learn more
            </span>
          </Typography>
          {/* Custom styled slider component */}
          <div className="lg:pr-[4rem] md:pr-[4rem]">
            <StyledSlider
              className="mt-8"
              value={sliderValue}
              onChange={handleSliderChange}
              max={30}
              min={5}
              step={null}
              marks={marks}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
            />
          </div>
          {/* Confirm auto-purchase button */}
          <Button
            onClick={() => {
              console.log(`
              Ammount = ${sliderValue}
              Credit = ${getCredit(sliderValue)}`);
            }}
            variant="contained"
            style={{
              marginTop: "3rem",
              backgroundColor: "#9F54FF",
              textTransform: "none",
              padding: 8,
              width: "15rem",
              fontWeight: "600",
              fontSize: "0.85srem",
              borderRadius: "0.5rem",
            }}
          >
            Confirm auto-purchase
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
