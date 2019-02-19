import React from 'react';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <div className="conteiner page page-404">
      <h1>Uh oh!</h1>
      <div class="link">
        <img class="selfie" alt="{{ site.name }}" src="/images/error.gif" />
      </div>
      <br />
      <br />
      <a href="/">Take me home!</a>
    </div>
  </Layout>
);

export default NotFoundPage;
