import { Api } from '@/api/Api'
import { BASE_URL } from '@/api/constants'

export class PeopleApi extends Api {
  public static async get<T> (endpoint: string): Promise<T> {
    const response = await fetch(`${BASE_URL}${endpoint}`)
    const json = await response.json()
    return json as T
  }
}
