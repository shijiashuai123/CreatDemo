import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import loginBg from './img/login.jpg'

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'flex', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    // background: 'burlywood',
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: '100%',
      height: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundUrl: loginBg,
    },
  },
  paper: {
    // marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    width: 400,
    margin: 'auto',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});
function SignIn(props) {
  console.log(props)
  const { classes } = props;
  return (
    <main className={classes.main} style={{background:`url(${loginBg}) 100% 100% repeat`}}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" gutterBottom>
          系统登录
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">账号</InputLabel>
            <Input id="email" name="email" autoComplete="email" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">密码</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="current-password" />
          </FormControl>
          <FormControlLabel
            style={{float: 'left'}}
            control={<Checkbox value="remember" color="primary"/>}
            label="记住密码"
          />
        </form>
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={loginFun.bind(this)}
        >
          登录
        </Button>
      </Paper>
    </main>
  );
}
SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};
function loginFun (){
  console.log('登录')
  localStorage.setItem('token', '165135434196846453')
  window.location.reload()
}

export default withStyles(styles)(SignIn);