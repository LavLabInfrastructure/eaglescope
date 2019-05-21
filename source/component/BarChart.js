import React from 'react';
import BaseVisualization from './BaseVisualization.js'
import {View as vegaView, parse as vegaParse} from 'vega'
import { compile as vlCompile } from 'vega-lite'

// should only have to worry about rendering
class BarChart extends BaseVisualization {
  constructor(props, ctx) {
    super(props, ctx);
  }
  componentDidMount(){
    let vlspec = {
      "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
      "data": {"values": this.state.filteredData},
      "mark": "bar",
      "encoding": {
        "y": {
          "field": this.props.x,
          "type": "ordinal"
        },
        "x": {
          "aggregate": "sum",
          "field": this.props.y,
          "type": "quantitative"
        }
      }
    }
    vlspec.height = this.props.h*100 || 100
    vlspec.width = this.props.w*100 || 100
    let spec = vlCompile(vlspec, {}).spec
    let vl_view = new vegaView(vegaParse(spec))
    vl_view.initialize(document.querySelector("#" + this.id))
    //vl_view.renderer("svg")
    vl_view.hover();
    vl_view.run();
  }
  componentDidUpdate(){
    let vlspec = {
      "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
      "data": {"values": this.state.filteredData},
      "mark": "bar",
      "encoding": {
        "y": {
          "field": this.props.x,
          "type": "ordinal"
        },
        "x": {
          "aggregate": "sum",
          "field": this.props.y,
          "type": "quantitative"
        }
      }
    }
    vlspec.height = this.props.h*100 || 100
    vlspec.width = this.props.w*100 || 100
    let spec = vlCompile(vlspec, {}).spec
    console.log(spec)
    let vl_view = new vegaView(vegaParse(spec))
    vl_view.initialize(document.querySelector("#" + this.id))
    //vl_view.renderer("svg")
    vl_view.hover()
    vl_view.run();
  }
  render() {
    if(this.state.ready){
      return <div id={this.id}></div>
    } else {
      return <p> waiting...</p>
    }

  }
}

export default BarChart
