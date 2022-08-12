import React from 'react'
import '../css/HomeTable.css'
import NumberFormat from 'react-number-format'
import { Sparklines, SparklinesLine } from 'react-sparklines';

const HomeTable = (props) => {

  return (
    <div className='table-container'>
        {(typeof props.cryptoData != "undefined") ? (
            <table>
                <thead>

                  <tr>
                    <th>Market Cap #</th>
                    <th>Coin</th>
                    <th>Current Price</th>
                    <th className='hidden-small'>24hr H/L</th>
                    <th>24hr %</th>
                    <th>Spark</th>
                </tr>
                </thead>
                <tbody>

            {props.cryptoData.filter((crypto) => {
                if (props.searchTerm == "") {
                    return crypto
                } else if (crypto.id.toLowerCase().includes(props.searchTerms.toLowerCase())){
                    return crypto
                }
            }).map((crypto) => {
                return (
                    <tr key={crypto.id}>
                <td>
                    {crypto.market_cap_rank}
                </td>
                <td>
                    <div className='table-data'>
                    <img style={{height:"1rem"}} src={crypto.image} alt={crypto.name}></img><span>
                        {crypto.name}
                        </span>
                        <span style={{padding: "0 1%"}}>({crypto.symbol})</span>
                    </div>
                </td>
                    <td>
                        <NumberFormat value={crypto.current_price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                    </td>
                    <td className='hidden-small'>
                        <div className='24h-hl'><NumberFormat value={crypto.high_24h} displayType={'text'} thousandSeparator={true} prefix={'$'}/>/<br/><NumberFormat value={crypto.low_24h} displayType={'text'} thousandSeparator={true} prefix={'$'}/></div>
                    </td>
                    <td>
                    <div className=''><NumberFormat value={crypto.price_change_percentage_24h} format ={"######%"} displayType={'text'} thousandSeparator={true} suffix={'%'}/></div>
                    </td>
                    <td><Sparklines data={crypto.sparkline_in_7d.price}>
                        <SparklinesLine color='blue'/>
                        </Sparklines>
                    </td>
            </tr>
            )
        })}
            </tbody>
            </table>
        ): <div className='error-msg'>Unable to find the city you were looking for, try again</div>}
    </div>
  )
}

export default HomeTable