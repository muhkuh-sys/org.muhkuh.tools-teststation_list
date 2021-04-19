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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import TreeItem from '@material-ui/lab/TreeItem';
import TreeView from '@material-ui/lab/TreeView';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/core/styles';
import { ulid } from 'ulid';

const humanizeDuration = require('humanize-duration');

import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import ImgCow from './images/muhkuh.svg';

import TesterUITheme from './testerui_theme';


const STATION_STATE_Ok = 0;
const STATION_STATE_Lost = 1;
const STATION_STATE_IpConflict = 2;
const STATION_STATE_Delete = 3;

class TeststationList extends React.Component {
  constructor(props) {
    super(props);
/*
    this.atDemoEntries = [
      '{"timestamp":"2021-03-01 12:35:40","port":9090,"station":{"uuid":"9f4eac14-f5de-4e85-a66c-d056221983a6","name":"Muhkuh Teststation 1912.102R3 Vorverguss NETFIELD IO-LINK WIRELESS 30"},"ip":"192.168.0.51","test":{"title":"1912.102 R3 Vorverguss","subtitle":"NETFIELD IO-LINK WIRELESS 30"}}',
      '{"port":9090,"timestamp":"2021-01-28 17:34:46","station":{"name":"Muhkuh Teststation 9387.001R6","uuid":"f15b8544-a26e-49b9-b7e9-34100817fdf9"},"test":{"subtitle":"IOT-GW30 R6","title":"9387.001 R6"},"ip":"192.168.0.80"}',
      '{"ip":"192.168.0.51","test":{"title":"1912.102 R3 Vorverguss","subtitle":"NETFIELD IO-LINK WIRELESS 30"},"port":9090,"timestamp":"2021-03-03 06:55:20","station":{"name":"Muhkuh Teststation 1912.102R3 Vorverguss NETFIELD IO-LINK WIRELESS 30","uuid":"9f4eac14-f5de-4e85-a66c-d056221983a6"}}',
      '{"station":{"name":"Muhkuh Teststation 1912.122R3 Vorverguss NETFIELD IO-LINK WIRELESS 30","uuid":"7027d19f-508a-4b5e-8a48-c47ada02233a"},"port":9090,"timestamp":"2021-02-03 15:02:24","test":{"subtitle":"NETFIELD IO-LINK WIRELESS 30","title":"1912.122 R3 Vorverguss"},"ip":"192.168.0.96"}',
      '{"ip":"192.168.0.96","test":{"title":"1912.122 R3 Vorverguss","subtitle":"NETFIELD IO-LINK WIRELESS 30"},"port":9090,"station":{"uuid":"7027d19f-508a-4b5e-8a48-c47ada02233a","name":"Muhkuh Teststation 1912.122R3 Vorverguss NETFIELD IO-LINK WIRELESS 30"},"timestamp":"2021-03-03 10:11:57"}',
      '{"timestamp":"2021-01-19 12:43:01","port":9090,"station":{"name":"Muhkuh Teststation 2801.400R3","uuid":"f5808f43-37a3-4043-8b20-18d313a22f8e"},"test":{"subtitle":"AIFX-V2-DP Rev3","title":"2801.400 R3"},"ip":"10.11.5.11"}',
      '{"station":{"uuid":"f5808f43-37a3-4043-8b20-18d313a22f8e","name":"Muhkuh Teststation 2801.400R3"},"ip":"10.11.5.11","test":{"subtitle":"AIFX-V2-DP Rev3","title":"2801.400 R3"},"timestamp":"2021-03-22 10:37:05","port":9090}',
      '{"ip":"192.168.0.88","timestamp":"2021-01-28 17:33:27","test":{"subtitle":"IOT-GW30 R6","title":"9387.001 R6"},"station":{"name":"Muhkuh Teststation 9387.001R6","uuid":"f15b8544-a26e-49b9-b7e9-34100817fdf9"},"port":9090}',
      '{"station":{"name":"Muhkuh Teststation 9387.001R6","uuid":"f15b8544-a26e-49b9-b7e9-34100817fdf9"},"test":{"title":"9387.001 R6","subtitle":"IOT-GW30 R6"},"timestamp":"2021-03-22 15:36:42","ip":"192.168.0.88","port":9090}',
      '{"timestamp":"2021-03-23 05:48:53","test":{"subtitle":"IOT-GW30 R6","title":"9387.001 R6"},"ip":"192.168.0.88","port":9090,"station":{"name":"Muhkuh Teststation 9387.001R6","uuid":"f15b8544-a26e-49b9-b7e9-34100817fdf9"}}',
      '{"test":{"title":"9387.001 R6","subtitle":"IOT-GW30 R6"},"timestamp":"2021-03-24 11:23:29","port":9090,"station":{"uuid":"f15b8544-a26e-49b9-b7e9-34100817fdf9","name":"Muhkuh Teststation 9387.001R6"},"ip":"192.168.0.88"}',
      '{"station":{"name":"Muhkuh Teststation 9387.001R6","uuid":"f15b8544-a26e-49b9-b7e9-34100817fdf9"},"test":{"subtitle":"IOT-GW30 R6","title":"9387.001 R6"},"port":9090,"ip":"192.168.0.88","timestamp":"2021-03-25 06:08:29"}',
      '{"test":{"subtitle":"IOT-GW30 R6","title":"9387.001 R6"},"timestamp":"2021-03-25 14:08:50","station":{"uuid":"f15b8544-a26e-49b9-b7e9-34100817fdf9","name":"Muhkuh Teststation 9387.001R6"},"port":9090,"ip":"192.168.0.88"}'
    ]
*/
    this.state = {
      atStationList: [],
      atStationTable: [],
      fForwardDialogIsOpen: false,
      strForwardUrl: '',
      fErrorSnackIsOpen: false,
      fHelpDialogIsOpen: false
    };

    this.atAvatars = {
      [STATION_STATE_Ok]: (<Avatar aria-label="teststation" src={ImgCow} />),
      [STATION_STATE_Lost]: (<Avatar aria-label="teststation"><AccessTimeIcon /></Avatar>),
      [STATION_STATE_IpConflict]: (<Avatar aria-label="teststation"><NotInterestedIcon /></Avatar>)
    }

    // Mark entries as "timed out" after this amount of milliseconds.
    // The value 1000 * 60 * 20 would be 20 minutes.
    this.tTimeout = 1000 * 60 * 20;
//    this.tTimeout = 1000 * 60 * 60 * 24 * 7;
    this.strTimeout = humanizeDuration(this.tTimeout);

    // Weed out entried after this amount of milliseconds.
    // The value 1000 * 60 * 60 * 1 would be 1 hour.
    this.tWeedout = 1000 * 60 * 60 * 1;
//    this.tWeedout = 1000 * 60 * 60 * 24 * 14;
    this.strWeedout = humanizeDuration(this.tWeedout);
  }

  // This is just a demo to add events.
  componentDidMount() {
    var tSource = new EventSource('sub');
    tSource.onerror = this.onEventError;
    tSource.onmessage = this.onEventMessage;

    // Start a new timer which triggers every minute.
    this.tMinuteInterval = setInterval(() => this.onMinuteTick(), 1000 * 60);
  }

  componentWillUnmount() {
    clearInterval(this.tMinuteInterval);
  }

  onMinuteTick() {
/*
    // Is something left in the demo contents array?
    let strEntry = this.atDemoEntries.shift()
    if( strEntry === undefined ) {
      // Nothing left, stop the interval.
      clearInterval(this.interval_demo);
    } else {
      this.onEventMessage({data:strEntry});
    }
*/
    this.updateList(null);
  }

  onEventError = (tError) => {
    this.setState({
      fErrorSnackIsOpen: true
    });
  }

  onEventMessage = (tMessage) => {
    // Try to parse the message as JSON.
    let tJson = undefined;
    const strData = tMessage.data;
    try {
      tJson = JSON.parse(strData);
    } catch {
      console.warn('Received invalid JSON:', strData);
    }
    if( tJson!==undefined ) {
      // Patch old-style data.
      // If the data has an "ssdp" key, but no "station" key, add the "ssdp" data also as "station".
      if( ("ssdp" in tJson) && !("station" in tJson) ) {
        tJson.station = tJson.ssdp;
      }

      // Create a new item.
      let tNewItem = {
        ulid: ulid(),
        state: STATION_STATE_Ok,
        date: this.strToDate(tJson.timestamp),
        data: tJson
      };
      this.updateList(tNewItem);
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
      // Search for items with the same IP and UUID.
      let tItem = atNewStationList.find(item => ((item.data.ip===tNewItem.data.ip) && (item.data.station.uuid===tNewItem.data.station.uuid)));
      if( tItem!==undefined ) {
        tItem.state = STATION_STATE_Delete;
      }
      // Remove all items which are marked for deletion.
      atNewStationList = atNewStationList.filter(item => item.state!=STATION_STATE_Delete);

      // Sort the new item into the list by its date.
      const uiPos = atNewStationList.findIndex(item => tNewItem.date>item.date);
      if( uiPos==-1 ) {
        atNewStationList.push(tNewItem)
      } else {
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
        if( uiOldState != STATION_STATE_IpConflict ) {
          // Set the state to "IP conflict".
          tStation.state = STATION_STATE_IpConflict;
          fChanged = true;
        }
      } else {
        // Add the IP to the list.
        atIPs.push(strIP);

        // Get the age of the entry.
        const tAgeMs = tNow.getTime() - tStation.date.getTime();
        if( tAgeMs>tTimeout ) {
          if( uiOldState != STATION_STATE_Lost ) {
            // Set the state to "lost".
            tStation.state = STATION_STATE_Lost;
            fChanged = true;
          }
        } else {
          if( uiOldState != STATION_STATE_Ok ) {
            // Set the state to "ok".
            tStation.state = STATION_STATE_Ok;
            fChanged = true;
          }
        }
      }
    }, this);

    const tWeedout = this.tWeedout;
    atNewStationList.forEach(function(tStation, uiIndex) {
      // Get the age of the entry.
      const tAgeMs = tNow.getTime() - tStation.date.getTime();
      if( tAgeMs>tWeedout ) {
        // Mark the item for deletion.
        tStation.state = STATION_STATE_Delete;
        fChanged = true;
      }
    }, this);
    // Remove all items which are marked for deletion.
    atNewStationList = atNewStationList.filter(item => item.state!=STATION_STATE_Delete);

    if( fChanged == true ) {
      // Convert the station list to a table.
      let atNewStationTable = []
      atNewStationList.forEach(function(tStation, uiIndex) {
        if( tStation.state==STATION_STATE_Ok ) {
          // Sort the new item into the table by its name.
          const sizNewStationTable = atNewStationTable.length;
          const strLabel = tStation.data.test.title;
          let tItem = null;
          let uiPos = atNewStationTable.findIndex(item => strLabel<=item.label);
          if( uiPos==-1 ) {
            uiPos = sizNewStationTable;
          } else if( strLabel==atNewStationTable[uiPos].label ) {
            tItem = atNewStationTable[uiPos];
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
          const strLabelSub = `${tStation.data.station.name} • ${tStation.data.test.subtitle}`;
          let atItemsSub = tItem.items;
          uiPos = atItemsSub.findIndex(item => strLabelSub<item.label);
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

  onStationSelect(strUlid) {
    // Search the ULID in the list of stations.
    let tItem = this.state.atStationList.find(item => item.ulid==strUlid);
    if( tItem!==undefined ) {
      const strUrl = `http://${tItem.data.ip}:${tItem.data.port}`;
      this.setState({
        fForwardDialogIsOpen: true,
        strForwardUrl: strUrl
      })
    }
  }

  onForwardDialogClose = () => {
    this.setState({
      fForwardDialogIsOpen: false
    })
  }

  onHelp = () => {
    this.setState({
      fHelpDialogIsOpen: true
    })
  }

  onHelpDialogClose = () => {
    this.setState({
      fHelpDialogIsOpen: false
    })
  }

  onErrorSnackClose = (tEvent, strReason) => {
    if( strReason==='clickaway')  {
      return;
    }

    this.setState({
      fErrorSnackIsOpen: false
    });
  }

  render() {
    const atAvatars = this.atAvatars;

    let atList = [];
    this.state.atStationList.forEach(function(tStation, uiIndex) {
      const uiState = tStation.state;

      let tAction = null;
      if( uiState==STATION_STATE_Ok ) {
        tAction = (
          <CardActions>
            <Button variant="contained" endIcon={<PlayArrowIcon />} onClick={() => this.onStationSelect(tStation.ulid)}>Go </Button>
          </CardActions>
        );
      }

      atList.push(
        <Card key={tStation.ulid} id="StationItem">
          <CardHeader
            avatar={atAvatars[uiState]}
            title={tStation.data.station.name}
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
      <ThemeProvider theme={TesterUITheme}>
        <CssBaseline>
          <div id="Root">
            <div id="StationTable">
              <div id="StationHeading">
                <Typography variant="h3">Stations</Typography>
              </div>

              <TreeView
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
              >
                {this.state.atStationTable.map((tItem, uiIndex) => (
                  <TreeItem key={tItem.ulid} nodeId={tItem.ulid} label={tItem.label}>
                    {tItem.items.map((tItemSub, uiIndexSub) => (
                      <TreeItem key={tItemSub.ulid} nodeId={tItemSub.ulid} label={tItemSub.label} onLabelClick={() => this.onStationSelect(tItemSub.ulid)}/>
                    ))}
                  </TreeItem>
                ))}
              </TreeView>
            </div>
            <div id='StationList'>
              <div id="StationHeading">
                <Typography variant="h3">Timeline</Typography>
              </div>
              {atList}
            </div>
            <div id="Help">
              <IconButton aria-label="help" onClick={this.onHelp}>
                <HelpOutlineIcon />
              </IconButton>
            </div>

            <Dialog
              open={this.state.fForwardDialogIsOpen}
              onClose={this.onForwardDialogClose}
              aria-labelledby="forward-dialog-title"
              aria-describedby="forward-dialog-description"
            >
              <DialogTitle id="forward-dialog-title">Go to the teststation</DialogTitle>
              <DialogContent>
                <DialogContentText id="forward-dialog-description">
                  Open the test station at <a href={this.state.strForwardUrl}>{this.state.strForwardUrl}</a> .
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.onForwardDialogClose} color="primary">
                  Cancel
                </Button>
              </DialogActions>
            </Dialog>

            <Dialog
              open={this.state.fHelpDialogIsOpen}
              onClose={this.onHelpDialogClose}
              aria-labelledby="help-dialog-title"
              aria-describedby="help-dialog-description"
            >
              <DialogTitle id="help-dialog-title">Help</DialogTitle>
              <DialogContent id="help-dialog-description">
                <Typography variant="body1" gutterBottom>
                  This page shows all available test stations in the network.
                </Typography>
                <Typography variant="body1" gutterBottom>
                  The "Stations" list is sorted by the test title, which is usually the device number and revision.
                  It shows only test stations which are available.
                  Click on an entry to open a dialog with a link to the test station.
                </Typography>
                <Typography variant="body1" gutterBottom>
                  The "Timeline" presents another view on the test stations which is sorted by the last information received from the station.
                  The state of a station is shown with one of these icons:
                </Typography>

                {this.atAvatars[STATION_STATE_Ok]}
                <Typography variant="body1" gutterBottom>
                  The station is available.
                </Typography>
                {this.atAvatars[STATION_STATE_Lost]}
                <Typography variant="body1" gutterBottom>
                  The station did not send something for more than {this.strTimeout}.
                </Typography>
                {this.atAvatars[STATION_STATE_IpConflict]}
                <Typography variant="body1" gutterBottom>
                  The IP of the station was re-used by another station.
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Click on a "Go" button in the timeline to open a dialog with a link to the test station.
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.onHelpDialogClose} color="primary">
                  Ok
                </Button>
              </DialogActions>
            </Dialog>

            <Snackbar open={this.state.fErrorSnackIsOpen} onClose={this.onErrorSnackClose}>
              <MuiAlert elevation={6} variant="filled" onClose={this.onErrorSnackClose} severity="error">
                Failed to connect to the list of available test stations!
              </MuiAlert>
            </Snackbar>
          </div>
        </CssBaseline>
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<TeststationList />, document.getElementById("index"));
