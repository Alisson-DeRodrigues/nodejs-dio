import { Request, Response } from 'express';
import * as service from '../services/clubs-services';

export const getClubs = async (req: Request, res: Response) => {
    const httpResponse = await service.getClubService();
    res.status(httpResponse.statusCode).json(httpResponse.body);
}


export const getClubById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const httpResponse = await service.getClubByIdService(id);

    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const postClub = async (req: Request, res: Response) => {
    const club = req.body;
    const httpResponse = await service.postClubService(club);

    if (httpResponse) {
        res.status(httpResponse.statusCode).json(httpResponse.body);
    }
}

export const deleteClub = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await service.deleteClubService(id);

    res.status(httpResponse.statusCode).json(httpResponse.body);
}