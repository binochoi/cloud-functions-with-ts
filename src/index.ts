import { HttpFunction } from '@google-cloud/functions-framework';

export const entryPoint: HttpFunction = (req, res) => {
    res.send("success !");
}