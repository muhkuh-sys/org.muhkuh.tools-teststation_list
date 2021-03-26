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

import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
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
      atStationList: [],
      atStationTable: []
    };

    this.atAvatars = {
      0: (<Avatar aria-label="teststation" src={ImgCow} />),
      1: (<Avatar aria-label="teststation"><AccessTimeIcon /></Avatar>),
      2: (<Avatar aria-label="teststation"><NotInterestedIcon /></Avatar>)
    }

    // Mark entries as "timed out" after this amount of milliseconds.
    // The value 1000 * 60 * 60 * 24 * 7 would be 1 week.
    this.tTimeout = 1000 * 60 * 60 * 24 * 7;
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
        date: this.strToDate(tEntry.timestamp),
        data: tEntry
      }
      this.updateList(tNewItem)
    }
  }

  strToDate(strDate) {
    const tMatch = strDate.match(/(\d+)-(\d+)-(\d+)\s+(\d+):(\d+):(\d+)/)
    let tDate = null;
    if( tMatch.length == 7 ) {
      tDate = new Date(tMatch[1], tMatch[2]-1, tMatch[3], tMatch[4], tMatch[5], tMatch[6])
    } else {
      tDate = new Date(strDate)
    }
    return tDate
  }

  updateList(tNewItem) {
    // Update the state only if the list changed.
    let fChanged = false
    let atNewStationList = this.state.atStationList;

    // Is there a new item to insert?
    if( tNewItem!==null ) {
      // Sort the new item into the list by its date.
      const sizNewStationList = atNewStationList.length
      if( sizNewStationList==0 ) {
        atNewStationList.push(tNewItem)
      } else {
        const tNewItemDate = tNewItem.date;
        let uiPos = 0;
        while( uiPos<atNewStationList.length ) {
          if( tNewItemDate>atNewStationList[uiPos].date ) {
            break;
          }
          uiPos += 1;
        }
        atNewStationList.splice(uiPos, 0, tNewItem);
      }
      fChanged = true
    }

    // Loop over all items and strike out re-used IPs.
    // Also mark timeouts.
    let atIPs = [];
    let tNow = new Date();
    const tTimeout = this.tTimeout;
    atNewStationList.forEach(function(tStation, uiIndex) {
      const uiOldState = tStation.state;
      const strIP = tStation.data.ip;
      // Is the IP part of the list? This means one of the already processed
      // entries had the same.
      if( atIPs.includes(strIP) == true ) {
        if( uiOldState != 2 ) {
          // Set the state to "blocked".
          tStation.state = 2;
          fChanged = true;
        }
      } else {
        // Add the IP to the list.
        atIPs.push(strIP);

          // Get the age of the entry.
        const tAgeMs = tNow.getTime() - tStation.date.getTime();
        if( tAgeMs>tTimeout ) {
          if( uiOldState != 1 ) {
            // Set the state to "timeout".
            tStation.state = 1;
            fChanged = true;
          }
        } else {
          if( uiOldState != 0 ) {
            // Set the state to "ok".
            tStation.state = 0;
            fChanged = true;
          }
        }
      }
    }, this);

    if( fChanged == true ) {
      // Convert the station list to a table.
      let atNewStationTable = []
      atNewStationList.forEach(function(tStation, uiIndex) {
        if( tStation.state==0 ) {
          // Sort the new item into the table by its name.
          const sizNewStationTable = atNewStationTable.length;
          const strLabel = tStation.data.test.title;
          let uiPos = 0;
          let tItem = null;
          while( uiPos<sizNewStationTable ) {
            if( strLabel==atNewStationTable[uiPos].label ) {
              tItem = atNewStationTable[uiPos];
              break;
            } else if( strLabel>atNewStationTable[uiPos].label ) {
              break;
            }
            uiPos += 1;
          }
          // Found an item?
          if( tItem === null ) {
            // No item found, create a new one at the insert position.
            tItem = {
              label: strLabel,
              ulid: ulid(),
              items: []
            }
            atNewStationTable.splice(uiPos, 0, tItem);
          }
          // Create a new subitem.
          const strLabelSub = `${tStation.data.ssdp.name} • ${tStation.data.test.subtitle}`;
          uiPos = 0;
          let atItemsSub = tItem.items;
          const sizItemsSub = atItemsSub.length;
          while( uiPos<sizItemsSub ) {
            if( strLabelSub<atItemsSub[uiPos].label ) {
              break;
            }
            uiPos += 1;
          }
          const tItemSub = {
            label: strLabelSub,
            ulid: tStation.ulid
          }
          atItemsSub.splice(uiPos, 0, tItemSub);
        }
      }, this);

      // Append the new item to the state.
      this.setState({
        atStationList: atNewStationList,
        atStationTable: atNewStationTable
      })
    }
  }

  render() {
    const atAvatars = this.atAvatars;

    let atList = [];
    this.state.atStationList.forEach(function(tStation, uiIndex) {
      const uiState = tStation.state;

      let tAction = null;
      if( uiState==0 ) {
        tAction = (
          <CardActions>
            <Button variant="contained" endIcon={<PlayArrowIcon />} >Go </Button>
          </CardActions>
        );
      }

      atList.push(
        <Card key={tStation.ulid} id="StationItem">
          <CardHeader
            avatar={atAvatars[uiState]}
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
          {tAction}
        </Card>
      );
    }, this);

    return (
      <MuiThemeProvider theme={TesterUITheme}>
        <CssBaseline>
          <div id="Root">
            <div id="StationTable">
              <TreeView
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
              >
                {this.state.atStationTable.map((tItem, uiIndex) => (
                  <TreeItem nodeId={tItem.ulid} label={tItem.label}>
                    {tItem.items.map((tItemSub, uiIndexSub) => (
                      <TreeItem nodeId={tItemSub.ulid} label={tItemSub.label} />
                    ))}
                  </TreeItem>
                ))}
              </TreeView>
            </div>
            <div id='StationList'>
                {atList}
            </div>
          </div>
        </CssBaseline>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<TeststationList />, document.getElementById("index"));
