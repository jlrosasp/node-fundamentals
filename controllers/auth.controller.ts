import { Request, Response } from 'express';
import MongoDBHelper from '../helpers/mongo.helper';
import paginate from 'jw-paginate';

export default() => {

    const _mongoDB = () => {
        return MongoDBHelper.getInstance();
    };

    return {
        loginOAuth: async (req: Request, res: Response) => {
            
        }
    }

}