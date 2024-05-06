import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';

interface Hotel {
    id: number;
    name: string;
}

async function generateHotelsCSV(number: number): Promise<void> {
    const csvWriter = createCsvWriter({
        path: 'csv/hotels.csv',
        header: [
            {id: 'id', title: 'id'},
            {id: 'name', title: 'name'}
        ]
    });

    const hotels: Hotel[] = Array.from({ length: number }, (_, i) => ({
        id: i + 1,
        name: `Hotel${i + 1}`
    }));

    return await csvWriter.writeRecords(hotels)
        .then(() => console.log('The hotels.csv file was written successfully'));
}

export default generateHotelsCSV;
