import { PageHeader, Row, small } from 'react-bootstrap'

import React from 'react'

const Header = content => (
  <Row>
    <PageHeader>
      {content} <small>Manage Life</small>
    </PageHeader>
  </Row>
)

export default Header
