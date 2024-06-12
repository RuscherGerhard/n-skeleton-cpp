import * as BodyParser from 'body-parser'
import Addon from '../lib/binding'

export class TestController{
    constructor(app:any){
        //the body parser is needed to parse bodies for post requests!
        let jsonParser:any = BodyParser.json();
        app.get('/test_get', function(req:any, res:any){
            //sending the query back to the requester!            
            let response:any = {status_code:200, param:Addon.HelloWorld()};
            res.status(200).send(response);
        });

        app.post('/test_post', jsonParser,function(req:any, res:any){
            //sendig the body of the post request back!
            let {param1, param2} = req.body;
            let req_body = JSON.stringify({param1:param1, param2:Addon.HelloWorld()});
            let status:number = 200;
             
            let response:any = {status_code:status, req_body}
            res.status(200).send(response);
        })
    }
}