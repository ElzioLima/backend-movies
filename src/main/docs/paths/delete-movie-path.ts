export const deleteMoviePath = {
  delete: {
    tags: ["Movie"],
    summary: "API to delete a movie",
    description: "This route needs a **Authorization token** to be accessed",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/schemas/deleteMovieParams"
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
