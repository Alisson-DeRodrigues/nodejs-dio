import { readFileSync } from "fs";
import { ClubModel } from "../models/club-models";
import fs from "fs/promises" // parte do fs que lê arquivos

export const findAllClubs = async (): Promise<ClubModel[]> => {
    const data = await fs.readFile("./src/data/clubs.json", "utf-8");
    const clubs: ClubModel[] = JSON.parse(data);
    return clubs;
}

export const getClubByIdService = async (id: number): Promise<ClubModel | undefined> => {
    const data = await fs.readFile("./src/data/clubs.json", "utf-8");
    const clubs = JSON.parse(data);
    return clubs.find((club: ClubModel) => club.id === id); 
}

export const createClub = async (club: ClubModel) => {
    const data = await fs.readFile("./src/data/clubs.json", "utf-8");
    const clubs = JSON.parse(data);
    clubs.push(club);
    await fs.writeFile("./src/data/clubs.json", JSON.stringify(clubs));
}

export const deleteClubById = async (id: number): Promise<boolean> => {
    const data = await fs.readFile("./src/data/clubs.json", "utf-8");
    const clubs: ClubModel[] = JSON.parse(data);
    const index = clubs.findIndex((club) => club.id === id);

    if(index !== -1){
        clubs.splice(index, 1);
        await fs.writeFile("./src/data/clubs.json", JSON.stringify(clubs));
        return true;
    }
    return false;   
}