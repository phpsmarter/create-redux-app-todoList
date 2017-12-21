import { Badge, Button, ButtonGroup, ButtonToolbar, Row } from 'react-bootstrap'
import { compose, map } from 'ramda'

import React from 'react'

const BadgeWithNum = badge => (
  <Button key={badge.id} bsStyle={badge.text}>
    {badge.text}
    <Badge bsStyle={{ marginTop: -40 }}>{badge.num}</Badge>
  </Button>
)

const BadgeGroup = content => (
  <Row>
    <ButtonToolbar>
      <ButtonGroup>{content}</ButtonGroup>
    </ButtonToolbar>
  </Row>
)

const Tab = compose(BadgeGroup, map(BadgeWithNum))
export default Tab
