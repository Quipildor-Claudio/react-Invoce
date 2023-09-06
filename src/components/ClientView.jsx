import PropTypes from 'prop-types';

export const ClientView = ({client}) => {
    return (
        <>
            <h3>Datos del Cliente</h3>
            <ul className="list-group">
                <li className="list-group-item active">{client.name}</li>
                <li className="list-group-item">{client.city}</li>
                <li className="list-group-item">{client.street}</li>
            </ul>

        </>
    )
}
ClientView.propTypes={
    client: PropTypes.object.isRequired
}