import useQuery from '@/hooks/useQuery'
import { Repository } from '@/models/Repository'
import RepositoryService from '@/services/RepositoryService'
import { useMemo } from 'react'
import LanguageList from '../LanguageList'
import Loader from '../UI/Loader'
import Typography from '../UI/Typography'
import PageSection from '../UI/PageSection'
import { getLanguagesPercentage } from '@/utils/getLanguagesPercentage'

type Props = {
  username: string
}

const UsedTechnologies = ({ username }: Props) => {
  const { data: repos } = useQuery(
    () =>
      RepositoryService.getRepositoriesOfUser(username as string, {
        per_page: 10,
        sort: 'updated_at',
        direction: 'desc',
      }),
    [username],
  )
  const { data: langs, isLoading: langsLoading } = useQuery(
    () => RepositoryService.getRepoLanguages(repos as Repository[]),
    [repos],
    { disabled: repos === null },
  )

  const languagesPercentage = useMemo(() => {
    if (!langs || langs.length === 0) {
      return
    }

    return getLanguagesPercentage(langs)
  }, [langs])

  return (
    <PageSection title='Most used technologies'>
      {languagesPercentage && <LanguageList languages={languagesPercentage} />}
      {!langs && langsLoading && <Loader />}
      {langs?.length === 0 && (
        <Typography variant='h4' textColor='primary'>
          No languages were used
        </Typography>
      )}
    </PageSection>
  )
}

export default UsedTechnologies
