import { AxiosResponse } from 'axios'
import { Filters } from '@/types/Filters'
import { Repository } from '@/models/Repository'
import { axios } from '@/lib/axios'

export default class RepositoryService {
  static async getRepositoriesOfUser(
    userName: string,
    filters?: Filters<Repository>,
  ) {
    try {
      const { data }: AxiosResponse<Repository[]> = await axios.get(
        `/users/${userName}/repos?${
          filters?.direction ? `direction=${filters.direction}` : ''
        }${filters?.per_page ? `&per_page=${filters.per_page}` : ''}${
          filters?.sort ? `&sort=${filters.sort}` : ''
        }`,
      )

      return { data, error: '' }
    } catch {
      return {
        data: [],
        error: 'Error while fetching repository',
      }
    }
  }

  static async getRepoLanguages(repos: Repository[]) {
    const promises = repos.map((repo) => axios.get(repo.languages_url))
    try {
      const languages = await Promise.allSettled(promises)
      const filteredLangs = languages.reduce(
        (prev: Record<string, number>[], next) => {
          if (
            next.status === 'fulfilled' &&
            Object.keys(next.value.data).length !== 0
          ) {
            return [...prev, next.value.data]
          }

          return prev
        },
        [],
      )

      return { data: filteredLangs, error: '' }
    } catch {
      return { data: [], error: 'Error while getting languages' }
    }
  }
}
