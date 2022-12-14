import { apiKeyAuthSchema } from "./schemas/api-key-auth-schema"
import {
  badRequest,
  serverError
} from "./components/"

export default {
  securitySchemes: {
    apiKeyAuth: apiKeyAuthSchema
  },
  badRequest,
  serverError
}
