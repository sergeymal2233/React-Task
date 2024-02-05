import RepositoryList from '../RepositoryList'
import Typography from '../UI/Typography'
import Loader from '../UI/Loader'
import useQuery from '@/hooks/useQuery'
import RepositoryService from '@/services/RepositoryService'
import PageSection from '../UI/PageSection'

type Props = {
  username: string
}

const EditedRepositories = ({ username }: Props) => {
  const { data: repos, isLoading: repoLoading } = useQuery(
    () =>
      RepositoryService.getRepositoriesOfUser(username as string, {
        per_page: 10,
        sort: 'updated_at',
        direction: 'desc',
      }),
    [username],
  )

  return (
    <PageSection title='Recently edited repositories'>
      {repos && <RepositoryList repositories={repos} />}
      {!repos && repoLoading && <Loader />}
      {repos?.length === 0 && (
        <Typography variant='h4' textColor='primary'>
          User doesn't have any repos
        </Typography>
      )}
    </PageSection>
  )
}

export default EditedRepositories
