
import Layout from 'components/Layout';

function Error({ statusCode }) {
  return (
    <Layout>
      <div className="container">
        <div className="mb-5 pb-5 pt-5 mt-5">
          <div className="d-flex justify-content-center cl2 ">
          {statusCode
        ? `Se produjo un error ${statusCode} en el servidor. Intente nuevamente más tarde.`
        : 'Se produjo un error del lado del cliente. Intente nuevamente más tarde.'}
          </div>
        </div>
      </div>
    </Layout >
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error