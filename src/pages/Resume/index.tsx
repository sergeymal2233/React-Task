import { useParams } from 'react-router-dom'
import styles from './Resume.module.scss'
import PageSection from '@/components/UI/PageSection'
import useQuery from '@/hooks/useQuery'
import UserService from '@/services/UserService'
import Link from '@/components/UI/Link'
import Loader from '@/components/UI/Loader'
import Typography from '@/components/UI/Typography'
import UserSummary from '@/components/UserSummary'
import NotFoundUser from '@/components/NotFoundUser'
import UsedTechnologies from '@/components/UsedTechnologies'
import EditedRepositories from '@/components/EditedRepositories'

const Resume = () => {
  const { username } = useParams()
  const { data: user, isLoading: userLoading } = useQuery(
    () => UserService.getUserByName(username as string),
    [username],
  )

  return (
    <div className={styles.content}>
      {user && !userLoading && (
        <>
          <div className={styles.heading}>
            <Link href={user.html_url}>
              <Typography variant='h1'>{user.login}</Typography>
            </Link>
          </div>

          <PageSection title='Summary'>
            <UserSummary user={user} />
          </PageSection>

          {user && <UsedTechnologies username={username as string} />}

          {user && <EditedRepositories username={username as string} />}
        </>
      )}

      {!user && userLoading && <Loader />}
      {!user && !userLoading && <NotFoundUser username={username as string} />}
    </div>
  )
}

export default Resume
