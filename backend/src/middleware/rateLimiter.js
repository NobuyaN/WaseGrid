import ratelimit from "../config/upstash.js"

const rateLimiter = async (req, res, next) => {
    try {
        // rate limit per user, change the my-limit-key
        const {success} = await ratelimit.limit("my-limit-key");
        if (!success) {
            return res.status(429).json({
                message: "Too many requests. Please try again later."
            })
        }
        next();
    } catch (error) {
        console.log("Rate limit error:", error);
        next(error);
    }
};

export default rateLimiter;