import React from "react";
import "../css/HomeTable.css";
import NumberFormat from "react-number-format";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const HomeTable = (props) => {
  const navigate = useNavigate();
  const goToCrypto = (id) => {
    navigate(`/Coin/${id}`);
  };
  return (
    <div className="table-container-container">
      <h3>Crypto Ranked by MarketCap</h3>
      <div className="table-container">
        {typeof props.cryptoData != "undefined" ? (
          <table>
            <thead>
              <tr>
                <th>Market Cap #</th>
                <th>Coin</th>
                <th>Current Price</th>
                <th className="hidden-small">24hr H|L</th>
                <th>24hr %</th>
                <th id="spark-head">Spark</th>
              </tr>
            </thead>
            <tbody>
              {props.cryptoData
                .filter((crypto) => {
                  if (props) {
                    return crypto;
                  } else if (
                    crypto.id
                      .toLowerCase()
                      .includes(props.searchTerms.toLowerCase())
                  ) {
                    return crypto;
                  }
                })
                .map((crypto) => {
                  return (
                    <tr
                      onClick={() => {
                        goToCrypto(crypto.id);
                      }}
                    >
                      <td>{crypto.market_cap_rank}</td>
                      <td>
                        <div className="table-data">
                          <img
                            style={{ height: "1rem" }}
                            src={crypto.image}
                            alt={crypto.name}
                          ></img>
                          <span>{crypto.name}</span>
                          <span style={{ padding: "0 1%" }}>
                            ({crypto.symbol})
                          </span>
                        </div>
                      </td>
                      <td>
                        <NumberFormat
                          value={crypto.current_price}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"$"}
                        />
                      </td>
                      <td className="hidden-small">
                        <div className="24h-hl">
                          <NumberFormat
                            value={crypto.high_24h}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                          />
                          <AiOutlineArrowUp style={{ color: "green" }} />|
                          <NumberFormat
                            value={crypto.low_24h}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                          />
                          <AiOutlineArrowDown style={{ color: "red" }} />
                        </div>
                      </td>
                      <td>
                        <div className="">
                          <NumberFormat
                            value={crypto.price_change_percentage_24h}
                            format={"######%"}
                            displayType={"text"}
                            thousandSeparator={true}
                            suffix={"%"}
                          />
                        </div>
                      </td>
                      <td id="spark-cell">
                        <Sparklines data={crypto.sparkline_in_7d.price}>
                          <SparklinesLine color="blue" />
                        </Sparklines>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        ) : (
          <div className="error-msg">
            Unable to find the city you were looking for, try again
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeTable;
