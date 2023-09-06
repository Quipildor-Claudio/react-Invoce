import { useEffect, useState } from "react";
import { getInvoice } from "./services/getinvoice"
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { ItemView } from "./components/ItemsView";
import { InvoiceView } from "./components/invoiceView";
import { TotalView } from "./components/TotalView";

const initialInvoice = {
    id: 0,
    name: '',
    client: {
        name: '',
        city: '',
        street: ''
    },
    company: {
        name: '',
        ficalNumber: 0,

    },
    items: [

    ]
};
export const InvoceApp = () => {
    const [invoice, setInvoice] = useState(initialInvoice);
    const [items, setItems] = useState([]);
    const [invoiceItemsState, setInvoiceItemsState] = useState({
        product: '',
        price: '',
        quantity: '',

    });
    const { total, id, name, client, company } = invoice;
    const { product, price, quantity } = invoiceItemsState;
    const [counter, setCounter] = useState(4);



    useEffect(() => {
        const data = getInvoice();
        setInvoice(data);
        setItems(data.items);
    }, []);

    useEffect(() => {

    }, [price]);


    const onInputChange = ({ target: { name, value } }) => {
        {
            setInvoiceItemsState({
                ...invoiceItemsState,
                [name]: value
            });
        }
    }


    const onInvoiceSummit = (event) => {
        {
            event.preventDefault();
            if (product.trim().length <= 1 || price.trim().length <= 1 || quantity.trim().length < 1) return;
            setItems([...items, { id: counter, product: product, price: +price, quantity: +quantity }]);

            setInvoiceItemsState({
                product: '',
                price: '',
                quantity: '',

            })
            setCounter(counter + 1);
        }
    }

    return (
        <>
            <div className="container">
                <div className="card my-3">
                    <div className="card-header">
                        Ejemplo  Factura
                    </div>
                    <div className="card-body">
                        <InvoiceView id={id} name={name} />

                        <div className="row my-3">
                            <div className="col">
                                <ClientView client={client} />
                            </div>
                            <div className="col">
                                <CompanyView company={company} />
                            </div>
                        </div>
                        <ItemView items={items} />
                        <TotalView total={total} />

                        <form className="w-50" onSubmit={onInvoiceSummit}>
                            <input type="text" name="product" value={product} placeholder="Producto" className="form-control mb-3" onChange={onInputChange} />
                            <input type="text" name="price" value={price} placeholder="Precio" className="form-control mb-3" onChange={onInputChange} />
                            <input type="text" name="quantity" value={quantity} placeholder="Cantidad" className="form-control mb-3" onChange={onInputChange} />
                            <button type="submit" className="btn btn-primary">Nuevo</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}