import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectDarkModeStatus } from "../redux/selectors/darkModeSelector";

const TimeRange = ({ defaultTime, handleSelect }) => {
  const startTime_i = defaultTime.split("-")[0].trim();
  const endTime_i = defaultTime.split("-")[1]?.trim();

  const isDarkModeOn = useSelector(selectDarkModeStatus);

  const generateTimeOptions = () => {
    const options = [];
    let option_AM = [];
    let option_PM = [];
    for (let hours = 0; hours < 24; hours++) {
      for (let minutes = 0; minutes < 60; minutes += 30) {
        const formattedHours = hours.toString().padStart(2, "0");
        const formattedMinutes = minutes.toString().padStart(2, "0");
        const timeString = `${formattedHours}:${formattedMinutes}`;

        if (hours < 12) {
          option_AM.push(`${timeString} AM`);
        } else {
          const formattedHours12 = (hours - 12).toString().padStart(2, "0");
          option_PM.push(`${formattedHours12}:${formattedMinutes} PM`);
        }
      }
    }

    for (let i = 0; i < option_AM.length || i < option_PM.length; i++) {
      if (i < option_AM.length) {
        options.push(option_AM[i]);
      }
      if (i < option_PM.length) {
        options.push(option_PM[i]);
      }
    }

    return options;
  };

  const renderTimeOptions = (defaultValue) => {
    const timeOptions = generateTimeOptions();

    return (
      <>
        <option value={defaultValue}>{defaultValue}</option>
        {timeOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </>
    );
  };

  return (
    <Row>
      <Col>
        <Form.Group>
          <Form.Label>Start Time</Form.Label>
          <Form.Control
            as="select"
            onChange={(e) => handleSelect(e.target.value, null)}
            style={{
              background: "transparent",
              borderWidth: 1,
              borderColor: isDarkModeOn ? "white" : "black",
            }}
          >
            {renderTimeOptions(startTime_i)}
          </Form.Control>
        </Form.Group>
      </Col>
      <Col>
        <Form.Group>
          <Form.Label>End Time</Form.Label>
          <Form.Control
            as="select"
            onChange={(e) => handleSelect(null, e.target.value)}
            style={{
              background: "transparent",
              borderWidth: 1,
              borderColor: isDarkModeOn ? "white" : "black",
            }}
          >
            {renderTimeOptions(endTime_i)}
          </Form.Control>
        </Form.Group>
      </Col>
    </Row>
  );
};

export default TimeRange;
