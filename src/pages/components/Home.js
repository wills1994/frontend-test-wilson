import React,{ Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProductos } from '../../redux/actions/dataActions';
import Productos from './Productos';

axios.defaults.baseURL =
  'http://localhost:3000/api';

class Home extends Component {
    state = {
        productos:null
    }
    componentDidMount (){
        this.props.getProductos();
    }
    render() {
        const { productos } = this.props.data;
        return (<Productos productos={productos}></Productos>);
    }
}
Home.propTypes = {
    getProductos: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
  };
  
const mapStateToProps = (state) => ({
    data: state.data
});
  
export default connect(mapStateToProps,{ getProductos })(Home);