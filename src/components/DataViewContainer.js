import React from 'react';
import _ from 'lodash';
import {  Row, Col } from 'antd';
import {ShotChart} from "./ShotChart"
import {CountSlider} from "./CountSlider"

export class DataViewContainer extends React.Component {

  state = {
    minCount: 2,
  }


  onMinCountChange = (minCount) => {
    this.setState({ minCount });
  }

  render() {
    return (
      <div className="data-view">
        <ShotChart
          playerId = {this.props.playerId}
          minCount={this.state.minCount}
        />
        <div className="filters">
          <Row className="filter-row">
            <Col span={2} offset={3} className="filter-label">Shots:</Col>
            <Col span={16}>
              <CountSlider onMinCountChange = {_.debounce(this.onMinCountChange, 500)} />
            </Col>
          </Row>
        </div>

      </div>
    );
  }
}