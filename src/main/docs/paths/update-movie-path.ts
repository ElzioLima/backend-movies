export const updateMoviePath = {
  put: {
    tags: ["Movie"],
    summary: "API to update a movie",
    description: "This route needs a **Authorization token** to be accessed",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/schemas/updateMovieParams"
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
