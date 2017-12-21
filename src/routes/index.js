import { Route, BrowserRouter as Router } from 'react-router-dom'

import { CounterContainer } from 'containers'
import { Header } from 'components'
import React from 'react'
import { TodoContainer } from 'containers'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
`

function Routes() {
  return (
    <Router>
      <Container>
        <Header />

        <Route path="/counter" component={CounterContainer} />
        <Route path="/todo" component={TodoContainer} />
      </Container>
    </Router>
  )
}

export default Routes
