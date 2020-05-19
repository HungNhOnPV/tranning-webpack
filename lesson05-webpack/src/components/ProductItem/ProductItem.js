import React, { Component } from "react";
import { Link } from 'react-router-dom';

class ProductItem extends Component {
    
    statusClass = () => this.props.product.status ? 'Con hang' : 'Het hang';
    statusName = () => this.props.product.status ? 'warning' : 'default';

    onDelete = id => {
        if(confirm('Ban chac chan muon xoa hay khong ?')) { //eslint-disable-line
            this.props.onDelete(id);
        }
    }

    render() {
        const { product, index } = this.props;

        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`label label-${this.statusName()}`}>
                        {this.statusClass()}
                    </span>
                </td>
                <td>
                    <Link 
                        to={`/product/${product.id}/edit`}
                        className="btn btn-success mr-10"
                    >
                        Sua
                    </Link>
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick={() => this.onDelete(product.id)}
                    >
                        Xoa
                    </button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
