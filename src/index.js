import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import 'typeface-roboto';
import 'typeface-roboto-mono';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TreeItem from '@material-ui/lab/TreeItem';
import TreeView from '@material-ui/lab/TreeView';
import Typography from '@material-ui/core/Typography';
import { ulid } from 'ulid';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import ImgCow from './images/muhkuh.svg';

import TesterUITheme from './testerui_theme';


class TeststationList extends React.Component {
  constructor(props) {
    super(props);

    this.atDemoEntries = [
      {"timestamp":"2021-03-01 12:35:40","port":9090,"ssdp":{"uuid":"9f4eac14-f5de-4e85-a66c-d056221983a6","name":"Muhkuh Teststation 1912.102R3 Vorverguss NETFIELD IO-LINK WIRELESS 30"},"ip":"192.168.0.51","test":{"title":"1912.102 R3 Vorverguss","subtitle":"NETFIELD IO-LINK WIRELESS 30"}},
      {"port":9090,"timestamp":"2021-01-28 17:34:46","ssdp":{"name":"Muhkuh Teststation 9387.001R6","uuid":"f15b8544-a26e-49b9-b7e9-34100817fdf9"},"test":{"subtitle":"IOT-GW30 R6","title":"9387.001 R6"},"ip":"192.168.0.80"},
      {"ip":"192.168.0.51","test":{"title":"1912.102 R3 Vorverguss","subtitle":"NETFIELD IO-LINK WIRELESS 30"},"port":9090,"timestamp":"2021-03-03 06:55:20","ssdp":{"name":"Muhkuh Teststation 1912.102R3 Vorverguss NETFIELD IO-LINK WIRELESS 30","uuid":"9f4eac14-f5de-4e85-a66c-d056221983a6"}},
      {"ssdp":{"name":"Muhkuh Teststation 1912.122R3 Vorverguss NETFIELD IO-LINK WIRELESS 30","uuid":"7027d19f-508a-4b5e-8a48-c47ada02233a"},"port":9090,"timestamp":"2021-02-03 15:02:24","test":{"subtitle":"NETFIELD IO-LINK WIRELESS 30","title":"1912.122 R3 Vorverguss"},"ip":"192.168.0.96"},
      {"ip":"192.168.0.96","test":{"title":"1912.122 R3 Vorverguss","subtitle":"NETFIELD IO-LINK WIRELESS 30"},"port":9090,"ssdp":{"uuid":"7027d19f-508a-4b5e-8a48-c47ada02233a","name":"Muhkuh Teststation 1912.122R3 Vorverguss NETFIELD IO-LINK WIRELESS 30"},"timestamp":"2021-03-03 10:11:57"},
      {"timestamp":"2021-01-19 12:43:01","port":9090,"ssdp":{"name":"Muhkuh Teststation 2801.400R3","uuid":"f5808f43-37a3-4043-8b20-18d313a22f8e"},"test":{"subtitle":"AIFX-V2-DP Rev3","title":"2801.400 R3"},"ip":"10.11.5.11"},
      {"ssdp":{"uuid":"f5808f43-37a3-4043-8b20-18d313a22f8e","name":"Muhkuh Teststation 2801.400R3"},"ip":"10.11.5.11","test":{"subtitle":"AIFX-V2-DP Rev3","title":"2801.400 R3"},"timestamp":"2021-03-22 10:37:05","port":9090},
      {"ip":"192.168.0.88","timestamp":"2021-01-28 17:33:27","test":{"subtitle":"IOT-GW30 R6","title":"9387.001 R6"},"ssdp":{"name":"Muhkuh Teststation 9387.001R6","uuid":"f15b8544-a26e-49b9-b7e9-34100817fdf9"},"port":9090},
      {"ssdp":{"name":"Muhkuh Teststation 9387.001R6","uuid":"f15b8544-a26e-49b9-b7e9-34100817fdf9"},"test":{"title":"9387.001 R6","subtitle":"IOT-GW30 R6"},"timestamp":"2021-03-22 15:36:42","ip":"192.168.0.88","port":9090},
      {"timestamp":"2021-03-23 05:48:53","test":{"subtitle":"IOT-GW30 R6","title":"9387.001 R6"},"ip":"192.168.0.88","port":9090,"ssdp":{"name":"Muhkuh Teststation 9387.001R6","uuid":"f15b8544-a26e-49b9-b7e9-34100817fdf9"}},
      {"test":{"title":"9387.001 R6","subtitle":"IOT-GW30 R6"},"timestamp":"2021-03-24 11:23:29","port":9090,"ssdp":{"uuid":"f15b8544-a26e-49b9-b7e9-34100817fdf9","name":"Muhkuh Teststation 9387.001R6"},"ip":"192.168.0.88"},
      {"ssdp":{"name":"Muhkuh Teststation 9387.001R6","uuid":"f15b8544-a26e-49b9-b7e9-34100817fdf9"},"test":{"subtitle":"IOT-GW30 R6","title":"9387.001 R6"},"port":9090,"ip":"192.168.0.88","timestamp":"2021-03-25 06:08:29"},
      {"test":{"subtitle":"IOT-GW30 R6","title":"9387.001 R6"},"timestamp":"2021-03-25 14:08:50","ssdp":{"uuid":"f15b8544-a26e-49b9-b7e9-34100817fdf9","name":"Muhkuh Teststation 9387.001R6"},"port":9090,"ip":"192.168.0.88"}
    ]

    this.state = {
      atStations: []
    };
  }

  // This is just a demo to add events.
  componentDidMount() {
    this.interval_demo = setInterval(() => this.tick_demo(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval_demo);
  }

  tick_demo() {
    // Is something left in the demo contents array?
    let tEntry = this.atDemoEntries.shift()
    if( tEntry === undefined ) {
      // Nothing left, stop the interval.
      clearInterval(this.interval_demo);
    } else {
      // Create a new item.
      let tNewItem = {
        ulid: ulid(),
        state: 0,
        data: tEntry
      }
      // Append the new item to the state.
      let atNewStations = this.state.atStations;
      atNewStations.push(tNewItem)
      this.setState({
        atStations: atNewStations
      })
    }
  }

  render() {
    return (
      <MuiThemeProvider theme={TesterUITheme}>
        <CssBaseline>
          <div id="Root">
            <div id="StationTable">
            <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        <TreeItem nodeId="1" label="Applications">
          <TreeItem nodeId="2" label="Calendar" />
          <TreeItem nodeId="3" label="Chrome" />
          <TreeItem nodeId="4" label="Webstorm" />
        </TreeItem>
        <TreeItem nodeId="5" label="Documents">
          <TreeItem nodeId="10" label="OSS" />
          <TreeItem nodeId="6" label="Material-UI">
            <TreeItem nodeId="7" label="src">
              <TreeItem nodeId="8" label="index.js" />
              <TreeItem nodeId="9" label="tree-view.js" />
            </TreeItem>
          </TreeItem>
        </TreeItem>
      </TreeView>
            </div>
            <div id='StationList'>
                {this.state.atStations.map((tStation,uiIndex) => (
                  <Card key={tStation.ulid} id="StationItem">
                    <CardHeader
                      avatar={<Avatar aria-label="teststation" src={ImgCow} />}
                      title={tStation.data.ssdp.name}
                      subheader={tStation.data.timestamp}
                    />
                    <CardContent>
                      <Typography display="block" variant="subtitle2" color="textSecondary">
                      {tStation.data.test.title}
                      </Typography>
                      <Typography display="block" variant="subtitle2" color="textSecondary">
                      {tStation.data.test.subtitle}
                      </Typography>
                      <Typography display="block" variant="subtitle2" color="textSecondary">
                      {`IP ${tStation.data.ip}`}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button variant="contained" endIcon={<PlayArrowIcon />} >Go </Button>
                    </CardActions>
                  </Card>
                ))}
            </div>
          </div>
        </CssBaseline>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<TeststationList />, document.getElementById("index"));
