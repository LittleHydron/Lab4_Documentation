import { parseObjectsFromCSV }  from "../csv/Parser";

import { AbstractLogger }       from "../interfaces/loggers/AbstractLogger";

import { HotelEntity }          from "./entities/HotelEntity";
import { RoomEntity }           from "./entities/RoomEntity";
import { UserEntity }           from "./entities/UserEntity";

import { createKafkaLogger }    from "./loggers/KafkaLogger";
import { ConsoleLogger }        from "./loggers/ConsoleLogger";

function main(): void {
  const arg = process.argv.find((arg) => arg.startsWith("--runWithKafka"));
  const runWithKafka = arg.split("=")[1] === "true" ? true : false;
  let logger: AbstractLogger;
  console.log("Deciding on logger type");
  if (runWithKafka) {
    logger = createKafkaLogger();
  } else {
    logger = new ConsoleLogger();
  }
  parseObjectsFromCSV<UserEntity>(UserEntity.getName()).then(
    (users) => {
      for (const user of users) {
        logger.Log(new UserEntity(user));
      }
    }
  );
  parseObjectsFromCSV<HotelEntity>(HotelEntity.getName()).then(
    (hotels) => {
      for (const hotel of hotels) {
        logger.Log(new HotelEntity(hotel));
      }
    }
  );
  parseObjectsFromCSV<RoomEntity>(RoomEntity.getName()).then(
    (rooms) => {
      for (const room of rooms) {
        logger.Log(new RoomEntity(room));
      }
    }
  );
}

main();
