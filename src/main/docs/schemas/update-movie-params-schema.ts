export const updateMovieParamsSchema = {
    type: "object",
    properties: {
        id: {
            type: "number"
        },
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
    }
}  