import Typography from '../UI/Typography'

type Props = {
  name: string
  percentage: number
}

const LanguageItem = ({ name, percentage }: Props) => {
  return <Typography variant='h4'>{`${name} - ${percentage}%`}</Typography>
}

export default LanguageItem
