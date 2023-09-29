import React from 'react';

import "./index.css";
import 'typeface-roboto';
import 'typeface-roboto-mono';

import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Autocomplete from '@mui/material/Autocomplete';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import Typography from '@mui/material/Typography';
import { ulid } from 'ulid';

let NchanSubscriber = require("nchan");

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddchartIcon from '@mui/icons-material/Addchart';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DoNotDisturbOnTotalSilenceIcon from '@mui/icons-material/DoNotDisturbOnTotalSilence';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MenuIcon from '@mui/icons-material/Menu';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import ImgCow from './images/muhkuh.svg';


const STATION_STATE_Ok = 0;
const STATION_STATE_Busy = 1;
const STATION_STATE_Lost = 2;
const STATION_STATE_IpConflict = 3;
const STATION_STATE_Delete = 4;

const USE_DEMO_ENTRIES = true;

class TeststationList extends React.Component {
  constructor(props) {
    super(props);

    if( USE_DEMO_ENTRIES ) {
      this.atDemoEntries = [
        '{"timestamp":"2023-09-29 08:35:40","port":9090,"station":{"uuid":"9f4eac14-f5de-4e85-a66c-d056221983a6","name":"Muhkuh Teststation 1912.102R3 Vorverguss NETFIELD IO-LINK WIRELESS 30"},"ip":"192.168.0.51","test":{"title":"1912.102 R3 Vorverguss","subtitle":"NETFIELD IO-LINK WIRELESS 30"}}',
        '{"timestamp":"2023-09-29 08:34:46","port":9090,"station":{"name":"Muhkuh Teststation 9387.001R6","uuid":"f15b8544-a26e-49b9-b7e9-34100817fdf9"},"test":{"subtitle":"IOT-GW30 R6","title":"9387.001 R6"},"ip":"192.168.0.80"}',
        '{"timestamp":"2023-09-29 08:25:20","port":9090,"ip":"192.168.0.51","test":{"title":"1912.102 R3 Vorverguss","subtitle":"NETFIELD IO-LINK WIRELESS 30"},"station":{"name":"Muhkuh Teststation 1912.102R3 Vorverguss NETFIELD IO-LINK WIRELESS 30","uuid":"9f4eac14-f5de-4e85-a66c-d056221983a6"}}',
        '{"timestamp":"2023-09-29 08:02:24","port":9090,"station":{"name":"Muhkuh Teststation 1912.122R3 Vorverguss NETFIELD IO-LINK WIRELESS 30","uuid":"7027d19f-508a-4b5e-8a48-c47ada02233a"},"test":{"subtitle":"NETFIELD IO-LINK WIRELESS 30","title":"1912.122 R3 Vorverguss"},"ip":"192.168.0.96"}',
        '{"timestamp":"2023-09-29 08:11:57","port":9090,"ip":"192.168.0.96","test":{"title":"1912.122 R3 Vorverguss","subtitle":"NETFIELD IO-LINK WIRELESS 30"},"station":{"uuid":"7027d19f-508a-4b5e-8a48-c47ada02233a","name":"Muhkuh Teststation 1912.122R3 Vorverguss NETFIELD IO-LINK WIRELESS 30"}}',
        '{"timestamp":"2023-09-29 08:43:01","port":9090,"station":{"name":"Muhkuh Teststation 2801.400R3","uuid":"f5808f43-37a3-4043-8b20-18d313a22f8e"},"test":{"subtitle":"AIFX-V2-DP Rev3","title":"2801.400 R3"},"ip":"10.11.5.11"}',
        '{"timestamp":"2023-09-29 08:37:05","port":9090,"station":{"uuid":"f5808f43-37a3-4043-8b20-18d313a22f8e","name":"Muhkuh Teststation 2801.400R3"},"ip":"10.11.5.11","test":{"subtitle":"AIFX-V2-DP Rev3","title":"2801.400 R3"}}',
        '{"timestamp":"2023-09-29 08:33:27","port":9090,"ip":"192.168.0.88","test":{"subtitle":"IOT-GW30 R6","title":"9387.001 R6"},"station":{"name":"Muhkuh Teststation 9387.001R6","uuid":"f15b8544-a26e-49b9-b7e9-34100817fdf9"}}',
        '{"timestamp":"2023-09-29 08:36:42","port":9090,"station":{"name":"Muhkuh Teststation 9387.001R6","uuid":"f15b8544-a26e-49b9-b7e9-34100817fdf9"},"test":{"title":"9387.001 R6","subtitle":"IOT-GW30 R6"},"ip":"192.168.0.88"}',
        '{"timestamp":"2023-09-29 08:48:53","port":9090,"test":{"subtitle":"IOT-GW30 R6","title":"9387.001 R6"},"ip":"192.168.0.88","station":{"name":"Muhkuh Teststation 9387.001R6","uuid":"f15b8544-a26e-49b9-b7e9-34100817fdf9"}}',
        '{"timestamp":"2023-09-29 08:23:29","port":9090,"test":{"title":"9387.001 R6","subtitle":"IOT-GW30 R6"},"station":{"uuid":"f15b8544-a26e-49b9-b7e9-34100817fdf9","name":"Muhkuh Teststation 9387.001R6"},"ip":"192.168.0.88"}',
        '{"timestamp":"2023-09-29 08:08:29","port":9090,"station":{"name":"Muhkuh Teststation 9387.001R6","uuid":"f15b8544-a26e-49b9-b7e9-34100817fdf9"},"test":{"subtitle":"IOT-GW30 R6","title":"9387.001 R6"},"ip":"192.168.0.88"}',
        '{"timestamp":"2023-09-29 08:08:50","port":9090,"test":{"subtitle":"IOT-GW30 R6","title":"9387.001 R6"},"station":{"uuid":"f15b8544-a26e-49b9-b7e9-34100817fdf9","name":"Muhkuh Teststation 9387.001R6"},"ip":"192.168.0.88"}'
      ]
    }

    this.state = {
      atStationList: [],
      atStationTable: [],
      fForwardDialogIsOpen: false,
      strForwardUrl: '',
      fErrorSnackIsOpen: false,
      fHelpDialogIsOpen: false,
      tMatchingStation: null,
      fMenuIsOpen: false,
      fShowExtededInformation: false
    };

    this.tTheme = createTheme({
      palette: {
        mode: 'dark',
      }
    });

    this.atAvatars = {
      [STATION_STATE_Ok]: (<Avatar aria-label="teststation" src={ImgCow} />),
      [STATION_STATE_Busy]: (<Avatar aria-label="teststation"><DoNotDisturbOnTotalSilenceIcon /></Avatar>),
      [STATION_STATE_Lost]: (<Avatar aria-label="teststation"><AccessTimeIcon /></Avatar>),
      [STATION_STATE_IpConflict]: (<Avatar aria-label="teststation"><NotInterestedIcon /></Avatar>)
    }

    // Assume an interval of 5 minutes for stations which do not report a value.
    this.uiDefaultIntervalS = 60 * 5;

    // Mark entries as "timed out" after the interval elapsed n times without a notification.
    // The value 4 results in 8 seconds for the new default interval of 2 seconds.
    this.uiTimeoutInIntervals = 4;

//    this.strTimeout = humanizeDuration(this.tTimeout);

    // Weed out entries after the interval elapsed n times without a notification.
    // The value 12 results in 24 Seconds for the new default interval of 2 seconds.
    this.uiWeedoutInIntervals = 12;

    this.tMACQuickSelect = null;

    this.tSub = null;
  }

  // This is just a demo to add events.
  componentDidMount() {
    if( !USE_DEMO_ENTRIES ) {
      var opt = {
        subscriber: 'websocket'
      }
      var sub = new NchanSubscriber('/sub', opt);
      sub.on('error', this.onEventError);
      sub.on('message', this.onEventMessage);
      sub.start();
      this.tSub = sub;
    }

    // Start a new timer which triggers every second.
    this.tMaintenanceTimer = setInterval(() => this.onMaintenanceTick(), 1000);
  }

  componentWillUnmount() {
    var sub = this.tSub;
    if( sub!=null ) {
      sub.stop();
      this.tSub = null;
    }

    clearInterval(this.tMaintenanceTimer);
  }

  onMaintenanceTick() {
    if( USE_DEMO_ENTRIES ) {
      // Is something left in the demo contents array?
      let strEntry = this.atDemoEntries.shift()
      if( strEntry !== undefined ) {
        this.onEventMessage(strEntry);
      }
    }

    this.updateList(null);
  }

  onEventError = (tError) => {
    this.setState({
      fErrorSnackIsOpen: true
    });
  }

  onEventMessage = (tMessage) => {
    // Show the message in the log.
//    console.log("New message received")
//    console.log(tMessage)

    // Try to parse the message as JSON.
    let tJson = undefined;
    const strData = tMessage;
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
      if( !("mac" in tJson) ) {
        tJson.mac = null;
      }
      if( !("busy" in tJson) ) {
        tJson.busy = false;
      }
      if( !("proto" in tJson) ) {
        tJson.proto = "http";
      }
      if( !("path" in tJson) ) {
        tJson.path = "";
      }
      if( !("interval" in tJson) ) {
        tJson.interval = this.uiDefaultIntervalS;
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
    // Also mark timeouts and busy stations.
    let atIPs = [];
    let tNow = new Date();
    const uiTimeoutInIntervals = this.uiTimeoutInIntervals;
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
        if( tAgeMs>(tStation.data.interval * uiTimeoutInIntervals * 1000) ) {
          if( uiOldState != STATION_STATE_Lost ) {
            // Set the state to "lost".
            tStation.state = STATION_STATE_Lost;
            fChanged = true;
          }
        } else if( tStation.data.busy ) {
          if( uiOldState != STATION_STATE_Busy ) {
            // Set the state to "busy".
            tStation.state = STATION_STATE_Busy;
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

    const uiWeedoutInIntervals = this.uiWeedoutInIntervals;
    atNewStationList.forEach(function(tStation, uiIndex) {
      // Get the age of the entry.
      const tAgeMs = tNow.getTime() - tStation.date.getTime();
      if( tAgeMs>(tStation.data.interval * uiWeedoutInIntervals * 1000) ) {
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
    const tItem = this.state.atStationList.find(item => item.ulid==strUlid);
    if( tItem!==undefined ) {
      const tData = tItem.data;
      // Construct the URL from all elements.
      const strUrl = `${tData.proto}://${tData.ip}:${tData.port}/${tData.path}`;
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


  onOpenAppMenu = () => {
    this.setState({
      fMenuIsOpen: true
    });
  }


  onCloseAppMenu = () => {
    this.setState({
      fMenuIsOpen: false
    });
  }


  onToggleShowExtendedInformation = () => {
    const fShowExtededInformationNew = !this.state.fShowExtededInformation;

    this.setState({
      fShowExtededInformation: fShowExtededInformationNew
    });
  }


  handleMACChange = (tEvent, tStation) => {
    this.setState({
      tMatchingStation: tStation
    });
  }


  handleEnterMAC = (tEvent) => {
    // The handler is called for every key press. Filter out the "Enter" key.
    if( tEvent.key==='Enter' ) {
        // Does a quick select item exist and is it not disabled?
      const tMACQuickSelect = this.tMACQuickSelect;
      if( tMACQuickSelect!==null && tMACQuickSelect.state===STATION_STATE_Ok ) {
        // Yes, use it as the new value for the MAC selector.
        // Call handleStartTest after the state is updated.
        this.setState(
          {
            tMatchingStation: tMACQuickSelect
          },
          () => {
            this.onStationSelect(this.state.tMatchingStation.ulid);
          }
        );

        // Remove focus from the input field. This will close any drop down menu.
        tEvent.target.blur();

        // Clear the quick select item.
        this.tMACQuickSelect = null;
      }
      tEvent.preventDefault();
    }
  }


  filterStations = (atOptions, tState) => {
    // Get the contents of the input field. Look for stations with this MAC.
    let strPattern = tState.inputValue;

    // Filter all available tests based on the pattern.
    const atFiltered = atOptions.filter(tStation => (('data' in tStation) && ('mac' in tStation.data) && (tStation.data.mac!==null) && (tStation.data.mac.startsWith(strPattern))) );

    // If there is only 1 result, allow a direct selection with "enter".
    // Do not provide this shortcut if there are more than one results, even if all but one are disabled.
    if( atFiltered.length===1 ) {
      this.tMACQuickSelect = atFiltered[0];
    } else {
      this.tMACQuickSelect = null;
    }

    return atFiltered;
  }


  render() {
    const atAvatars = this.atAvatars;

    let atList = [];
    const atStationList = this.state.atStationList;
    atStationList.forEach(function(tStation, uiIndex) {
      const uiState = tStation.state;

      let tDetails = null;
      if( this.state.fShowExtededInformation ) {
        let tMAC = null;
        const strMAC = tStation.data.mac;
        if( strMAC!==null ) {
          tMAC = (<div className="StationMAC">{tStation.data.mac}</div>);
        } else {
          tMAC = (<div className="StationMACMissing">not available</div>);
        }
        tDetails = (
          <CardContent>
            <div>{`Last seen: ${tStation.data.timestamp}`}</div>
            <div>{`IP: ${tStation.data.ip}`}</div>
            <div>{'MAC: '}{tMAC}</div>
          </CardContent>
        );
      }

      const tCardHeader = (
        <CardHeader
          avatar={atAvatars[uiState]}
          title={tStation.data.station.name}
          subheader={`${tStation.data.test.title} • ${tStation.data.test.subtitle}`}
        />
      );

      let tCard = null;
      if( uiState==STATION_STATE_Ok ) {
        tCard = (
          <Card key={tStation.ulid} id="StationItem">
            <CardActionArea onClick={() => this.onStationSelect(tStation.ulid)}>
              {tCardHeader}
              {tDetails}
            </CardActionArea>
          </Card>
        );
      } else {
        tCard = (
          <Card key={tStation.ulid} id="StationItem">
            {tCardHeader}
            {tDetails}
          </Card>
        );
      }
      atList.push(tCard);
    }, this);

    // Create the application menu.
    const tAppMenu = (
      <List>
        <ListItem>
          <ListItemIcon><AddchartIcon/></ListItemIcon>
          <ListItemText id='list-item-show-extended-information' primary='Show extended information'/>
          <Switch
            edge="end"
            onChange={this.onToggleShowExtendedInformation}
            checked={this.state.fShowExtededInformation}
            inputProps={{
              'aria-labelledby': 'list-item-show-extended-information',
            }}
          />
        </ListItem>
      </List>
    );

    return (
      <ThemeProvider theme={this.tTheme}>
        <CssBaseline>
          <Drawer anchor="right" id='AppMenu' open={this.state.fMenuIsOpen} onClose={this.onCloseAppMenu}>
            <div tabIndex={0} role="button" onClick={this.onCloseAppMenu} onKeyDown={this.onCloseAppMenu}>
              {tAppMenu}
            </div>
          </Drawer>

            <Box sx={{
              display: 'flex',
              width: '100vw',
              border: (theme) => `1px solid ${theme.palette.divider}`,
              borderRadius: 1,
              bgcolor: 'background.paper',
            }}>
              <FormControl sx={{ m: 1, width: '100%' }} disabled={atStationList.length==0}>
                <Autocomplete
                  id="scanRevArticle"
                  disabled={atStationList.length==0}
                  options={atStationList}
                  autoComplete
                  includeInputInList
                  value={this.state.tMatchingStation}
                  noOptionsText="Keine Treffer"
                  onChange={this.handleMACChange}
                  renderInput={(params) => (
                    <TextField {...params} label="Scanne das MAC Label der Teststation" fullWidth onKeyDown={this.handleEnterMAC}/>
                  )}
                  getOptionLabel={(option) => {
                    if( (typeof option === 'object') && (typeof option.data === 'object') && ('mac' in option.data) ) {
                      return option.data.mac;
                    } else {
                      return '';
                    }
                  }}
                  getOptionDisabled={(option) => {
                    let fDisabled = true;
                    if( (typeof option === 'object') && (option.state === STATION_STATE_Ok) ) {
                      // The item is disabled if it does not have a MAC.
                      const fHasMac = ('mac' in option.data );
                      fDisabled = !fHasMac;
                    }
                    return fDisabled;
                  }}
                  filterOptions={this.filterStations}
                />
              </FormControl>

              <IconButton
                color="primary"
                onClick={() => { this.onStationSelect(this.state.tMatchingStation.ulid); }}
                disabled={this.state.tMatchingStation===null}
              >
                <PlayArrowIcon className="paddedButton" />
              </IconButton>

              <IconButton
                aria-label="help"
                onClick={this.onHelp}
              >
                <HelpOutlineIcon className="paddedButton" />
              </IconButton>

              <IconButton
                color="primary"
                aria-label="Menu"
                onClick={this.onOpenAppMenu}
                aria-owns={this.state.fMenuIsOpen ? 'AppMenu' : undefined}
                aria-haspopup="true"
              >
                <MenuIcon className="paddedButton" />
              </IconButton>
            </Box>

          <div id="Root">
            <div id="StationTable">
              <div id="StationHeading">
                <Typography variant="h3">Stations</Typography>
              </div>

              <TreeView
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
                multiSelect={false}
                onNodeSelect={(tEvent, strNodeId) => this.onStationSelect(strNodeId)}
              >
                {this.state.atStationTable.map((tItem, uiIndex) => (
                  <TreeItem key={tItem.ulid} nodeId={tItem.ulid} label={tItem.label}>
                    {tItem.items.map((tItemSub, uiIndexSub) => (
                      <TreeItem key={tItemSub.ulid} nodeId={tItemSub.ulid} label={tItemSub.label}/>
                    ))}
                  </TreeItem>
                ))}
              </TreeView>
            </div>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ mx: 2 }}
            />
            <div id='StationList'>
              <div id="StationHeading">
                <Typography variant="h3">Timeline</Typography>
              </div>
              {atList}
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
                  Open the test station at <Link href={this.state.strForwardUrl}>{this.state.strForwardUrl}</Link>.
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
                {this.atAvatars[STATION_STATE_Busy]}
                <Typography variant="body1" gutterBottom>
                  The station is currently busy.
                </Typography>
                {this.atAvatars[STATION_STATE_Lost]}
                <Typography variant="body1" gutterBottom>
                  The expected notifications from the station were not received for at least {this.uiTimeoutInIntervals} times.
                  After {this.uiWeedoutInIntervals} it will be removed from the list.
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

const container = document.getElementById('index');
const root = createRoot(container);
root.render(<TeststationList />);
