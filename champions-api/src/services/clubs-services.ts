import { ClubModel } from "../models/club-models";
import * as repository from "../repositories/clubs-repository";
import * as HttpResponse from "../utils/http-helper";

export const getClubService = async () => {
    const data = await repository.findAllClubs();
    const response = HttpResponse.ok(data);
    return response;
}

export const getClubByIdService = async (id: number) => {
    let response = null;
    const data = await repository.getClubByIdService(id);

    if(data){
        response = HttpResponse.ok(data);
        console.log(data)
    } else {
        response = HttpResponse.noContent()
    }
    
    return response;
}

export const postClubService = async (club: ClubModel) => {
    let response = null;

    if(club && Object.keys(club).length !== 0){
        await repository.createClub(club);
        response = HttpResponse.created();
    } else {
        response = HttpResponse.badRequest();
    }

    return response;
}

export const deleteClubService = async (id: number) => {
    let response = null;
    const isDeleted = await repository.deleteClubById(id);

    if(isDeleted){
        response = HttpResponse.ok({message: "deleted"});
    } else {
        response = HttpResponse.badRequest();
    }

    return response;
}