import dayjs from 'dayjs'
import { User } from '@/models/User'
import Link from '@/components/UI/Link'
import Typography from '../UI/Typography'

type Props = {
  user: User
}

const formatDate = (date: string) => {
  return dayjs(date).format('YYYY')
}

const getFormattedFollowersText = (followers: number) => {
  const text = followers === 1 ? 'follower' : 'followers'

  return `${followers} ${text}`
}

const getFormattedRepoText = (repos: number) => {
  const text = repos === 1 ? 'repository' : 'repositories'

  return `${repos} public ${text}`
}

const UserSummary = ({ user }: Props) => {
  const { created_at, public_repos, followers, html_url, login } = user
  const reposUrl = `${html_url}?tab=repositories`
  const followersUrl = `${html_url}?tab=followers`

  return (
    <Typography variant='h4'>
      {`${login} has been using Github since ${formatDate(
        created_at,
      )}, during this time he has created `}
      <Link href={reposUrl}>{getFormattedRepoText(public_repos)}</Link>
      {` and has a fan base of `}
      <Link href={followersUrl}>{getFormattedFollowersText(followers)}</Link>
    </Typography>
  )
}

export default UserSummary
