import { AxiosResponse } from 'axios'
import { User } from '@/models/User'
import { axios } from '@/lib/axios'

export default class UserService {
  static async getUserByName(userName: string) {
    try {
      const { data }: AxiosResponse<User> = await axios.get(
        `/users/${userName}`,
      )

      return { data, error: '' }
    } catch {
      return { data: {} as User, error: 'Error while fetching user' }
    }
  }
}