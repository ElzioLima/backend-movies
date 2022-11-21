export const listMoviePath = {
  get: {
    tags: ["Movie"],
    summary: "API to list movies",
    description: "This route needs a **Authorization token** to be accessed",
    responses: {
      200: {
        description: "Succeed",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/movies"
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
