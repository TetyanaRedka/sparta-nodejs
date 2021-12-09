import { userService as userFileService } from "../services/fileService.js";

export const testGetAction = (req, res) => {
  res.send(userFileService.get());
};

export const testPostAction = (req, res) => {
  try {
    const result = userFileService.put(req.body);

    if (result) {
      res.status(201).json({
        status: "success",
        code: "201",
        data: result,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "error",
      code: "400",
      data: result,
    });
  }
};
