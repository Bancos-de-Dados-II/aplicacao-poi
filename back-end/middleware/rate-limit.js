import client from "../database/redis.js";

export async function rateLimit(req,res,next){
    const ip = req.ip;
    await client.incr(ip);
    const count = await client.get(ip);
    if(count > 10){
        return res.status(429).json(
            {error: 'Too Many Requests'});
    }
    await client.expire(ip, 60);
    next();
}