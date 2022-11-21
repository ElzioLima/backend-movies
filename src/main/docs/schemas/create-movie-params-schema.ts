export const createMovieParamsSchema = {
    type: "object",
    properties: {
        name: {
            type: "string"
        },
        year: {
            type: "string"
        },
        description: {
            type: "string"
        },
        length: {
            type: "number"
        },
        gender: {
            type: "string"
        },
        rating: {
            type: "number"
        },
        watched: {
            type: "string"
        },
        image: {
            type: "string"
        }
    },
    require: ["name", "description"]
}  