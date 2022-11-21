export const deleteMovieParamsSchema = {
    type: "object",
    properties: {
        id: {
            type: "number"
        }
    },
    require: ["id"]
}  