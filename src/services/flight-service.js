const { compareTime } = require("../utils/helper");
const {
  FlightRepository,
  AirplaneRepository,
} = require("./../repository/index");

class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }
  async createFlight(data) {
    try {
      if (!compareTime(data.arrivalTime, data.departureTime)) {
        throw { error: "Arrival Time Cannot Be Less Than Departure Time" };
      }
      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log("Something Went Wrong At Flight-Service Layer");
      throw { error };
    }
  }

  async getAllFlightsData(data) {
    try {
      const flights = await this.flightRepository.getAllFlights(data);
      return flights;
    } catch (error) {
      console.log("Something Went Wrong At Flight-Service Layer");
      throw { error };
    }
  }
}

module.exports = FlightService;
