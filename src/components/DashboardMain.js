import React from 'react';
import './DashboardMenu.css';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles, useTheme, withTheme } from '@material-ui/core/styles';
import { FormControl } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    formControl: {
      minWidth: 300,
      maxWidth: 1000,
      backgroundColor: '#5ab3dc',
      borderRadius: 4,
      marginTop: '0.4em',
    },
    select: {
        color: 'white',
        fontSize: '0.9em',
        textAlign: 'center',
        paddingTop: '0.5em',
        paddingBottom: '0.2em'
    },
    input: {
        color: 'white',
        fontSize: '1em',
        paddingLeft: '1em',
        paddingBottom: '2em',
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
    greenButton: {
        backgroundColor: "#5dca93",
        fontWeight: 400,
        color: 'white',
        fontSize: '0.7em',
        verticalAlign: 'bottom',
        paddingTop: 2,
        paddingBottom: 2,
        minWidth: 2,
        marginRight: '4px',
        marginBottom: '1px'
    },
    grayButton: {
        color: '#d9d9d9',
        fontSize: '0.7em',
        verticalAlign: 'bottom',
        paddingTop: 1,
        paddingBottom: 1,
        minWidth: 2,
        borderWidth: '2px',
    },
    formControlRevenueFilter: {
        minWidth: 100,
        backgroundColor: '#5ab3dc',
        borderRadius: 4,
        verticalAlign: 'bottom',
      },
      selectRevenueFilter: {
        color: 'white',
        fontSize: '0.8em',
        textAlign: 'center',
        paddingLeft: '1.2em',
        paddingTop: '0.1em',
    },
  }));

function DashboardMain(){
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [openFilter, setOpenFilter] = React.useState(false);
    const [date, setDate] =  React.useState(1); 
    const [filter, setfilter] =  React.useState(1); 

    const handleChange = event => {
        setDate(event.target.value);
      };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleChangeFilter = event => {
        setDate(event.target.value);
      };

    const handleCloseFilter = () => {
        setOpenFilter(false);
    };

    const handleOpenFilter = () => {
        setOpenFilter(true);
    };

    return (
        <div className="dash-container">
            <div className="dash-top-container">
                <div className="dash-title-section">
                    <div className="dash-title">Dashboard</div>
                    <div className="dash-subtitle">dashboard & statistics</div>
                </div>
                <div className="dash-dates-container">
                    <FormControl className={classes.formControl}>
                        <Select
                        value={date}
                        className={classes.select}
                        disableUnderline={true}
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        input={<Input />}
                        onChange={handleChange}
                        >   

                            <MenuItem value={1}>17th January 2016 - 15 February 2016</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <br />
            <div className="dash-data-container">
                <div className="dash-data-section">
                <div className="dash-data-title">Totals <span>Last Week</span></div>
                <div className="dash-data-boxes">
                    <div className="dash-data-box">
                        <div className="dash-data-num">597</div>
                        <div className="dash-data-label">New Feedback</div>
                    </div>
                    <div className="dash-data-box">
                        <div className="dash-data-num">16.6M$</div>
                        <div className="dash-data-label">Total Profit</div>
                    </div>
                    <div className="dash-data-box">
                        <div className="dash-data-num">7.5k</div>
                        <div className="dash-data-label">New Orders</div>
                    </div>
                    <div className="dash-data-box">
                        <div className="dash-data-num">+48%</div>
                        <div className="dash-data-label">Brand Popularity</div>
                    </div>
                </div>
                </div>
                <div className="dash-data-section">
                    <div className="dash-data-graph-container">
                        <div className="dash-data-graph-top">
                            <div className="dash-data-title dash-data-graph-half">Site Visits <span>Weekly Stats</span></div>
                            <div className="dash-data-graph-half dash-data-graph-top-right">
                            <Button className={classes.greenButton}>New</Button>
                            <Button className={classes.grayButton} variant="outlined">Returning</Button>
                            </div>
                        </div>
                        <div className="dash-data-site-graph">
                            
                        </div>
                    </div>
                    <div className="dash-data-graph-container">
                        <div className="dash-data-graph-top">
                            <div className="dash-data-title dash-data-graph-half">Revenue <span>Monthly Stats</span></div>
                            <div className="dash-data-graph-half dash-data-graph-top-right">
                                <FormControl className={classes.formControlRevenueFilter}>
                                    <Select
                                    value={date}
                                    className={classes.selectRevenueFilter}
                                    disableUnderline={true}
                                    open={openFilter}
                                    onClose={handleCloseFilter}
                                    onOpen={handleOpenFilter}
                                    input={<Input />}
                                    onChange={handleChangeFilter}
                                    >   
                                        <MenuItem value={1}>FILTER RANGE</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div className="dash-data-revenue-graph">
                            
                        </div>
                        <div className="dash-data-rev-info-container">
                            <div className="dash-data-rev-info-box">
                                <div className="dash-data-rev-info-label">Revenue:</div>
                                <div className="dash-data-rev-info-num">$13.724</div>
                            </div>
                            <div className="dash-data-rev-info-box">
                                <div className="dash-data-rev-info-label">Tax:</div>
                                <div className="dash-data-rev-info-num">$19.962</div>
                            </div>
                            <div className="dash-data-rev-info-box">
                                <div className="dash-data-rev-info-label">Shipment:</div>
                                <div className="dash-data-rev-info-num">$1.976</div>
                            </div>
                            <div className="dash-data-rev-info-box">
                                <div className="dash-data-rev-info-label">Orders:</div>
                                <div className="dash-data-rev-info-num">{"529,479".replace(",", " ")}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dash-data-section">
                    <br/>
                </div>
            </div>
        </div>
        
    )
}

export default DashboardMain