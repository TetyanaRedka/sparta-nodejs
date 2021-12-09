import { readFileSync, writeFileSync } from "fs";

export const userService = {
  get: () => {
    const users = readFileSync("storage/users.json", "utf-8");

    return JSON.parse(users);
  },

  put: (body) => {
    try {
      // Тут бы конечно стоило создать новый объект и присвоить ему Id, что бы потом этот новый объект вернуть в ответе, но т.к. база существующая база данных у нас этого не предусматривает, будем делать примитивно.

      if (typeof body === "object") {
        const newkey = Object.entries(body);
        const dataBD = JSON.parse(readFileSync("storage/users.json", "utf-8"));

        dataBD[newkey[0][0]] = newkey[0][1];

        const newDataBD = JSON.stringify(dataBD);

        writeFileSync("storage/users.json", newDataBD);

        return "данные добавлены";
      }
      throw new SyntaxError("Данные не полны");
    } catch (error) {
      throw error;
    }
  },
};

export default {
  userService,
};
