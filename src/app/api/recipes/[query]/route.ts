import {NextRequest} from "next/server";

export const GET = async (req : NextRequest,{params}) => {
    /*console.log(req);
    console.log(params);
    return Response.json({ message: 'Hello World',text:"first api request" });*/

    const {query} = params;
    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${query}`)
    const data = await response.json();

    return new Response(JSON.stringify(data),{status: 200, headers:{'content-type': 'application/json'}});
}