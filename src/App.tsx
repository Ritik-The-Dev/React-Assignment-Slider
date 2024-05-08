// App.js

import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import StyledSlider from "./components/Slider";
import { StyledSwitch } from "./components/Switch";

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
  const handleSliderChange = (event: any, newValue: any) => {
    setSliderValue(newValue);
  };

  // Handler function for switch change
  const handleSwitchChange = () => {
    setAutoTopUp(!autoTopUp);
  };

  return (
    <div className="bg-black w-screen p-3 h-screen flex items-center justify-center overflow-hidden">
      <div className="flex bg-white flex-col items-start p-10 px-[4.5rem] justify-center max-w-[850px] rounded-2xl">
        <div className="flex mb-3 items-center justify-center gap-4">
          <Typography variant="h6" component="h1" style={{ fontWeight: "550" }}>
            Setup Auto Top-up
          </Typography>
          {/* Styled switch component */}
          <StyledSwitch
            sx={{ m: 1 }}
            checked={autoTopUp}
            onChange={handleSwitchChange}
          />
        </div>
        {/* Information about auto purchase */}
        <div className={`${autoTopUp ? "flex flex-col" : "hidden"}`}>
          <Typography className="text-[#939393]">
            Once the credit goes below a minimum thresholds
            <span className="text-[#9847FF] font-bold"> 50</span>, we will
            auto-purchase{" "}
            <span className="text-[#9847FF] font-bold">
              {getCredit(sliderValue)}
            </span>{" "}
            credits and them to your account.{" "}
            <span className="text-[#939393] underline font-bold cursor-pointer">
              Learn more
            </span>
          </Typography>
          {/* Custom styled slider component */}
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
              padding: 10,
              width: "15rem",
              fontWeight: "600",
              fontSize: "1.05rem",
              borderRadius: "0.75rem",
            }}
          >
            Confirm auto-purchase
          </Button>
        </div>
      </div>
    </div>
  );
}