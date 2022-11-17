import NotificationButton from '../NotificationButton'
import './style.css'

function Header() {
    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sale-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <input className="dsmeta-form-control" type="text" />
                </div>
                <div className="dsmeta-form-control-container">
                    <input className="dsmeta-form-control" type="text" />
                </div>
            </div>
            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show992">123456</td>
                            <td className="show576">29/07/2002</td>
                            <td>anakim</td>
                            <td className="show992">25</td>
                            <td className="show992">Vendas</td>
                            <td >82</td>
                            <td>R$ 552000.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">123456</td>
                            <td className="show576">29/07/2002</td>
                            <td>anakim</td>
                            <td className="show992">25</td>
                            <td className="show992">Vendas</td>
                            <td >82</td>
                            <td>R$ 552000.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">123456</td>
                            <td className="show576">29/07/2002</td>
                            <td>anakim</td>
                            <td className="show992">25</td>
                            <td className="show992">Vendas</td>
                            <td >82</td>
                            <td>R$ 552000.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Header