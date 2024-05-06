import generateHotelsCSV from './csv_generators/hotels_csv_generator';
import generateRoomsCSV  from './csv_generators/rooms_csv_generator';
import generateUsersCSV  from './csv_generators/users_csv_generator';

const defaultNumberOfRecords = 10;

const numberOfRecords = parseInt(process.argv[2], 10) || defaultNumberOfRecords;

generateHotelsCSV(numberOfRecords);
generateRoomsCSV(numberOfRecords);
generateUsersCSV(numberOfRecords);
