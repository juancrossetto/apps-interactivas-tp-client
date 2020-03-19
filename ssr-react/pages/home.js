import React from 'react';

import Head from 'next/head';
import Layout from 'components/Layout';

const HomePage = () => (
  <React.Fragment>
    <Head>
      <title>Home -APP</title>
    </Head>
    <Layout>
      <div className="container">
        <div className="mb-4 pt-4">
          <div className="row">
            <div className="title-section col-12">
              <h2 className="text-h2">LALALA</h2>
            </div>
          </div>
        </div>
      </div>
    </Layout>

    <style jsx>{`

      `}</style>
  </React.Fragment>
)



export default HomePage