export const createMoviePath = {
  post: {
    security: [{
      apiKeyAuth: []
    }],
    tags: ["Movie"],
    summary: "API to create a movie",
    description: "This route needs a **Authorization token** to be accessed",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/schemas/createMovieParams"
          }
        }
      }
    },
    responses: {
      200: {
        description: "Succeed",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/result"
            }
          }
        }
      },
      400: {
        $ref: "#/components/badRequest"
      },
      500: {
        $ref: "#/components/serverError"
      }
    }
  }
}
