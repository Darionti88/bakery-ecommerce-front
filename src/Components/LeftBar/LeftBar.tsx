import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Grid from '@material-ui/core/Grid'
import Tab from '@material-ui/core/Tab';
import ShopProducts from '../ShopProducts/Index'
import FilteredShopProducts from '../FilteredShopProducts/FilteredShopProducts'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#fef9f5',
    display: 'flex',
    minHeight: '100vh',
    paddingTop: 8
  },
  tabs: {
    minWidth:'12%',
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  gridContainer:{
  },
  tabPanel:{
    background:'linear-gradient(0deg, rgba(254,249,245,1) 3%, rgba(206,239,226,1) 100%)'
  }
}));

export default function ShopTest() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Todos" {...a11yProps(0)} />
        <Tab label="Veganos" {...a11yProps(1)} />
        <Tab label="Sin Tacc" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0} >
          <Grid 
          direction='column'
          alignContent='center'
          container 
          justify='center'>
            <ShopProducts />
          </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid
        direction='column' 
        container 
        justify='center'>
          <FilteredShopProducts apiUrl={"https://guria-db.herokuapp.com/categorias?categoria=vegan"} />
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container 
          justify='center'>
          <FilteredShopProducts apiUrl={"https://guria-db.herokuapp.com/categorias?categoria=notacc"} />
        </Grid>
      </TabPanel>
    </div>
  );
}
