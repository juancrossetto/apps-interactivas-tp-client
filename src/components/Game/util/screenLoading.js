import React from 'react'

import useStep from '../hooks/useStep';
import Link from "components/Link";

export default () => (
  <section className="screen-loading">
    <div>
      <div class="sp sp-slices"></div>
      <div className="message-loading">Preparados, listos, ready..</div>
    </div>
  </section>
)