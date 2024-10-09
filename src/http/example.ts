import { api } from "../lib/axios"


interface CreateUserRequest {
  name: string
  email: string
}

export async function createUserRequest({ name, email }: CreateUserRequest) {
  return await api.post('example', {
    name,
    email
  })
}
