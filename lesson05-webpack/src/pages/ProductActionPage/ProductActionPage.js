import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from '../../actions';
import { connect } from 'react-redux';

class ProductActionPage extends Component {

    state = {
        id: '',
        txtName: '',
        txtPrice: '',
        chkbStatus: ''
    }

    componentDidMount() {
        let { match } = this.props;
        if(match) {
            let id = match.params.id;
            this.props.onEditProduct(id);
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.itemEditing) {
            const { itemEditing } = nextProps;
            this.setState({
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtPrice: itemEditing.price,
                chkbStatus: itemEditing.status
            });
        }
    }

    onChange = event => {
        let target = event.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onSave = event => {
        event.preventDefault();
        let { id, txtName, txtPrice, chkbStatus } = this.state;
        const { history } = this.props;
        let product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: chkbStatus
        }
        if(id) {
            this.props.onUpdateProduct(product);
        } else {
            this.props.onAddProduct(product);
        }
        history.goBack();
    }

    render() {
        let { txtName, txtPrice, chkbStatus } = this.state;
        return (
            
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label htmlFor="name">Ten san pham:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            name="txtName" 
                            value={txtName}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="gia">Gia:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="gia" name="txtPrice" 
                            value={txtPrice}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Trang thai:</label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input 
                                type="checkbox" 
                                value="" 
                                name="chkbStatus" 
                                // eslint-disable-next-line react/jsx-no-duplicate-props
                                value={chkbStatus}
                                onChange={this.onChange}
                                checked={chkbStatus}
                            />
                            Con hang
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary mr-10">Luu lai</button>
                    <Link to="/product-list" className="btn btn-danger">Tro lai</Link>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        itemEditing: state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: product => {
            dispatch(actAddProductRequest(product));
        },
        onEditProduct: id => {
            dispatch(actGetProductRequest(id));
        }
        ,
        onUpdateProduct: product => {
            dispatch(actUpdateProductRequest(product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
