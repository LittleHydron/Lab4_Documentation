import * as path from "path";
import * as fs from "fs";
import { parse } from "csv-parse";

export function parseObjectsFromCSV <T> (name: string): Promise<T[]> {
    const csvFilePath = path.resolve(__dirname, name + "s.csv");

    const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });
    
    return new Promise((resolve, reject) => {
        parse(fileContent, {
            delimiter: ',',
            columns: true,
            cast: true,
            cast_date: false,
        }, (error, result: any[]) => {
            if (error) {
                console.error("Error parsing CSV:", error);
                reject(error);
            } else {
                let objects: T[] = [];
                for (let object of result) {
                    objects.push(object as T);
                }
                resolve(objects);
            }
        });
    });
}