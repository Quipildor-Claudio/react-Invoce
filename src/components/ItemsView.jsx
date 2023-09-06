import { RowItemView } from "./RowItemView"
import PropTypes from 'prop-types';
export const ItemView = ({ items }) => {
    return (
        <>
            <h4>Productos de la  Factura</h4>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(({ id, product, price, quantity }) =>
                    (
                        <RowItemView key={id} product={product} price={price} quantity={quantity} />
                    )
                    )}

                </tbody>

            </table>
        </>
    )
}
ItemView.protoTypes = {
    product: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
}