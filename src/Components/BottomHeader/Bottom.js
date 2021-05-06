import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Movie, Search, Tv, Whatshot } from '@material-ui/icons';


const useStyles = makeStyles({
    root: {
        width: 500,
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#2d313a',
    },
});

const Bottom = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction style={{color: "#fff"}} label="Tranding" icon={<Whatshot />} />
            <BottomNavigationAction style={{color: "#fff"}} label="Movies" icon={<Movie />} />
            <BottomNavigationAction style={{color: "#fff"}} label="Tv Serise" icon={<Tv />} />
            <BottomNavigationAction style={{color: "#fff"}} label="Search" icon={<Search />} />
        </BottomNavigation>
    )
}

export default Bottom
