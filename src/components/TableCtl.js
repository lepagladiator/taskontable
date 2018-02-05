import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';
import Grid from 'material-ui/Grid';

const styles = {
  button: {
    fontSize: '9pt',
    minWidth: 60,
  },
};

function addTask() {
  if (window.hot) {
    window.hot.alter('insert_row');
  }
}

function TableCtl(props) {
  const { saveable, lastSaveTime, saveHot, classes } = props;
  return (
    <Grid style={{ height: 35 }}container spacing={8}>
      <Grid item xs={10}>
        <div style={{ textAlign: 'right' }}>
          <Button className={classes.button} raised onClick={addTask} color="default">
            <i className="fa fa-plus fa-lg" />
            行追加
          </Button>
          <Tooltip title={`最終保存時刻 : ${(`00${lastSaveTime.hour}`).slice(-2)}:${(`00${lastSaveTime.minute}`).slice(-2)}`} placement="top">
            <div style={{ display: 'inline-block' }}>
              <Button disabled={!saveable} className={classes.button} raised onClick={saveHot} color="default">
                <i className="fa fa-floppy-o fa-lg" />
              保存
              </Button>
            </div>
          </Tooltip>
        </div>
      </Grid>
    </Grid>
  );
}

TableCtl.propTypes = {
  saveable: PropTypes.bool.isRequired,
  lastSaveTime: PropTypes.shape({
    hour: PropTypes.number.isRequired,
    minute: PropTypes.number.isRequired,
    second: PropTypes.number.isRequired,
  }).isRequired,
  saveHot: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableCtl);
