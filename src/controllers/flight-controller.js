const { FlightService } = require("./../services/index");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flight = await flightService.createFlight(req.body);
    return res.status(201).json({
      data: flight,
      success: true,
      message: "Flight Created Successfully!",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not Able To Create A Flight",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await flightService.getAllFlightsData(req.query);
    return res.status(200).json({
      data: response,
      success: true,
      err: {},
      message: "Flights Fetched Successfully!",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not Able To Create A Flight",
      err: error,
    });
  }
};

module.exports = { create, getAll };
