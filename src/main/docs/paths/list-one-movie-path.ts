export const listOneMoviePath = {
  get: {
    security: [{
      apiKeyAuth: []
    }],
    tags: ["Movie"],
    summary: "API to list a movie by id",
    description: "This route needs a **Authorization token** to be accessed",
    responses: {
      200: {
        description: "Succeed",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/movie"
            }
          }
        }
      },
      500: {
        $ref: "#/components/serverError"
      }
    }
  }
}
