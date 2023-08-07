const { CityService } = require("./../services/index");

const cityService = new CityService();
const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "City Created Successfully",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not Able To Create A City",
      err: error,
    });
  }
};

// DELETE -> /city/:id
const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "City Deleted Successfully",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not Able To Delete The City",
      err: error,
    });
  }
};

// GET -> /city/:id
const get = async (req, res) => {
  try {
    const response = await cityService.getCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "City Fetched Successfully",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not Able To Fetch The City",
      err: error,
    });
  }
};


// PATCH -> /city/:id -> req.body
const update = async (req, res) => {
  try {
    const response = await cityService.updateCity(req.params.id, req.body);
    return res.status(200).json({
      data: response,
      success: true,
      message: "City Updated Successfully",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
        data: {},
        success: false,
        message: "Not Able To Update The City",
        err: error,
      });
  }
};

module.exports = { create, destroy, get, update };
