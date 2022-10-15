type Page500Props = {
  errorMessage: any
}

export function Page500({ errorMessage }: Page500Props) {
  return (
    <div>
      <div>
        <div>App Brand</div>
        <p>Error 500: Internal Server Error.</p>
        The server encounter something unexpected that did not allow it to
        complete the request.
        {process.env.NX_ENV === 'dev' && <div>{errorMessage}</div>}
      </div>
    </div>
  )
}

export default Page500
