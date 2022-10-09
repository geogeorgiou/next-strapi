import { config } from '@root/config'
import { useRouter } from 'next/router'
import { Locale } from '@root/constants'
import Link from 'next/link'
import { Post } from '@root/models'

type Props = {
  content: Post
}

function Post({ content }: Props) {
  const router = useRouter()

  return (
    <div>
      <h2>{content.title}</h2>
      <div>{content.body}</div>
      <br />
      <br />
      <Link
        href={router.asPath}
        locale={
          router.locale === Locale.english ? Locale.greek : Locale.english
        }
      >
        <a>
          {router.locale === Locale.english
            ? 'Αλλαγή Γλώσσας'
            : 'Change Language'}
        </a>
      </Link>
    </div>
  )
}

export const getServerSideProps = async (context: any) => {
  const { id } = context.params
  const { locale } = context

  let translation = undefined

  const baseUrl = `${config.API_BASE_URL}/posts`
  const initialRes = await fetch(`${baseUrl}/${id}`)

  const {
    data: { attributes },
  } = await initialRes.json()

  if (locale === Locale.greek) {
    const translationRes = await fetch(`${baseUrl}?locale=${Locale.greek}`)
    const { data } = await translationRes.json()
    //need to filter by some id=2 and return attributes adjacent object
    translation = data[0].attributes
  }

  return {
    props: {
      content: translation ? translation : attributes,
    },
  }
}

export default Post
