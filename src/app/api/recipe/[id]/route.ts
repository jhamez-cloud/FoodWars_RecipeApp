import {NextRequest} from "next/server";

export const GET = async (req : NextRequest,{params}) => {

    const {id} = params;
    const response = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
    const data = await response.json();

    return new Response(JSON.stringify(data),{status:200,headers:{'content-ype': 'application/json'}});
}