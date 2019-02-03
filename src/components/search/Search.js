import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import axios from 'axios';


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit * 10,
        minWidth: 120,
    },
    selectEmpty: {
        marginLeft: theme.spacing.unit * 10,
        marginTop: theme.spacing.unit * 10,
    },
    textField: {
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        width: 200,
    }
});

class Search extends Component {
    state = {
        searchText: '',
        amount: 'Amount',
        apiUrl: 'https://pixabay.com/api',
        apiKey: '11490269-2be32bf949e8dc1465d54f6b7',
        images: []
    };

    onTextChange = e => {
        const val = e.target.value;
        this.setState({ [e.target.name]: val }, () => {
          if (val === '') {
            this.setState({ images: [] });
          } else {
            axios
              .get(
                `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
                  this.state.searchText
                }&image_type=photo&per_page=${this.state.amount}&safesearch=true`
              )
              .then(res => this.setState({ images: res.data.hits }))
              .catch(err => console.log(err));
          }
        });
      };
    
    onAmountChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        console.log(this.state.images);
        return (
            <div>
                <form>
                    <FormControl>
                        <TextField
                            id="searchText"
                            name="searchText"
                            value={this.state.searchText}
                            onChange={this.onTextChange}
                            label="Search For Images"
                            margin="normal"
                        />
                    </FormControl>
                    <br />
                    <FormControl>
                        <Select
                            value={this.state.amount}
                            onChange={this.onAmountChange}
                            input={<Input name="amount" id="amount" />}
                        >
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={15}>15</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                        </Select>
                    </FormControl>
                </form>
            </div>
        )
    }
}

export default withStyles(styles)(Search);