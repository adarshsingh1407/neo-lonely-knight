import React, { Component } from 'react';
import BoardContainer from 'container/chess/BoardContainer';
import KanbanBoardContainer from 'container/kanban/KanbanBoardContainer';
import {
  Grid,
  Row,
  Col,
  Tabs,
  Tab
} from 'react-bootstrap';
import AppBar from 'material-ui/AppBar';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const GAMES = [{
  key: 'lonely-knight',
  name: 'The Lonely Knight',
  instructions: 'Move the knight by drag-and-drop or clicking the destination square'
}, {
  key: 'kanban',
  name: 'Kanban',
  instructions: 'Kanban Board'
}, {
  key: 'ivrs',
  name: 'IVRS',
  instructions: 'Create IVRS'
}]

const getGameById = (key) => GAMES.find((game) => game.key === key)

const DEFAULT_ACTIVE_GAME = getGameById('kanban');

const Instructions = (props) => {
  return (<div><b>Instructions: </b>{props.activeGame.instructions}</div>)
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeGame: DEFAULT_ACTIVE_GAME
    };
  }
  handleGameSelection(gameKey) {
    this.setState({
      activeGame: getGameById(gameKey)
    });
  }
  render() {
    const {activeGame} = this.state;
    return (
      <div>
        <AppBar
          title={activeGame.name}
          style={{backgroundColor: '#424242'}}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <Grid>
          <Row>
            <Col md={12}>
              <Tabs id="chooseGame" activeKey={activeGame.key}
                onSelect={this.handleGameSelection.bind(this)}
                defaultActiveKey={'lonely-knight'}>
                <Tab eventKey={'lonely-knight'} title="The Lonely Knight">
                  <Instructions activeGame={activeGame} />
                  <BoardContainer />
                </Tab>
                <Tab eventKey={'kanban'} title="Kanban">
                  <Instructions activeGame={activeGame} />
                  <KanbanBoardContainer />
                </Tab>
                <Tab eventKey={'ivrs'} title="IVRS">
                  <Instructions activeGame={activeGame} />
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Grid>
      </div>
      // <Board knightPosition={[0, 0]} />
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
