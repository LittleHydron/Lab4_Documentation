import { HotelEntity } from "./entities/HotelEntity";
import { RoomEntity } from "./entities/RoomEntity";
import { UserEntity } from "./entities/UserEntity";
import { parseObjectsFromCSV } from "../csv/Parser";
import { AbstractLogger } from "../interfaces/loggers/AbstractLogger";
import { KafkaLogger } from "./loggers/KafkaLogger";
import { ConsoleLogger } from "./loggers/ConsoleLogger";

function main(): void {
  const arg = process.argv.find((arg) => arg.startsWith("--runWithKafka"));
  const runWithKafka = arg.split("=")[1] === "true" ? true : false;
  let logger: AbstractLogger;
  if (runWithKafka) {
    logger = new KafkaLogger();
  } else {
    logger = new ConsoleLogger();
  }
  parseObjectsFromCSV<UserEntity>(UserEntity.getName()).then(
    (users) => {
      for (const user of users) {
        logger.Log(user);
      }
    }
  );
  parseObjectsFromCSV<HotelEntity>(HotelEntity.getName()).then(
    (hotels) => {
      for (const hotel of hotels) {
        logger.Log(hotel);
      }
    }
  );
  parseObjectsFromCSV<RoomEntity>(RoomEntity.getName()).then(
    (rooms) => {
      for (const room of rooms) {
        logger.Log(room);
      }
    }
  );
}

main();
