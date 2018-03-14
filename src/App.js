import React, { Component } from 'react';
import BoardContainer from 'container/BoardContainer';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import AppBar from 'material-ui/AppBar';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar
          title="The Lonely Knight"
          style={{backgroundColor: '#424242'}}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <Grid>
          <Row>
            <Col md={12}>
              <BoardContainer />
            </Col>
          </Row>
        </Grid>
      </div>
      // <Board knightPosition={[0, 0]} />
    );
  }
}

export default App;
