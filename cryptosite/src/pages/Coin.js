import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CryptoCoin.css";
import NumberFormat from "react-number-format";
import DOMPurify from "dompurify";
import {
  Sparklines,
  SparklinesBars,
  SparklinesLine,
  SparklinesSpots,
} from "react-sparklines";

const Coin = (props) => {
  const params = useParams();
  const [currentCoin, setCurrentCoin] = useState();
  const [forceUpdate, setForceUpdate] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}?market_data=true&community_data=true&sparkline=true`;

  useEffect(() => {
    fetch(url).then((resp) =>
      resp.json().then((data) => {
        if (isLoading) {
          return <p>Loading....</p>;
        }
        if (data.error) {
          setCurrentCoin();
          setIsLoading(false);
          return;
        } else {
          setIsLoading(false);
          setCurrentCoin(data);
          setForceUpdate(Math.random());
        }
      })
    );
  }, [props.searchTerms]);

  if (currentCoin === undefined) {
    return (
      <div className="search-error">
        We could Not find the crypto you searched for, please try again.
      </div>
    );
  }
  return (
    <div>
      <div className="market-container">
        <div className="market-rank">
          <h5>Rank #{currentCoin.market_cap_rank}</h5>
        </div>
        <div className="coin-info">
          <div className="coin-header">
            {currentCoin.image ? (
              <>
                <img src={currentCoin.image.small} alt="" />
                <h2>
                  {currentCoin.name}({currentCoin.symbol})
                </h2>
              </>
            ) : null}
          </div>
          {currentCoin.market_data?.current_price ? (
            <div className="current-price">
              <h2>
                <NumberFormat
                  decimalScale={2}
                  displayType={"text"}
                  value={currentCoin.market_data.current_price.usd}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </h2>
            </div>
          ) : null}
        </div>
        <div className="market-cap">
          <h2>Total Market Cap</h2>
          {currentCoin.market_data ? (
            <p>
              <NumberFormat
                prefix="$"
                displayType={"text"}
                thousandSeparator={true}
                value={currentCoin.market_data.market_cap.usd}
              />
            </p>
          ) : null}
        </div>
      </div>
      <div className="time-container">
        <h2>Price Changes</h2>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>14d</th>
                <th>30d</th>
                <th>1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {currentCoin.market_data
                    ?.price_change_percentage_24h_in_currency ? (
                    <p>
                      <NumberFormat
                        displayType={"text"}
                        decimalScale={4}
                        suffix={"%"}
                        value={
                          currentCoin.market_data
                            .price_change_percentage_1h_in_currency.usd
                        }
                      />
                    </p>
                  ) : null}
                </td>
                <td>
                  {currentCoin.market_data
                    ?.price_change_percentage_24h_in_currency ? (
                    <p>
                      <NumberFormat
                        displayType={"text"}
                        suffix={"%"}
                        value={currentCoin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                          4
                        )}
                      />
                    </p>
                  ) : null}
                </td>
                <td>
                  {currentCoin.market_data
                    ?.price_change_percentage_24h_in_currency ? (
                    <p>
                      <NumberFormat
                        displayType={"text"}
                        suffix={"%"}
                        value={currentCoin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
                          4
                        )}
                      />
                    </p>
                  ) : null}
                </td>
                <td>
                  {currentCoin.market_data
                    ?.price_change_percentage_24h_in_currency ? (
                    <p>
                      <NumberFormat
                        displayType={"text"}
                        suffix={"%"}
                        value={currentCoin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(
                          4
                        )}
                      />
                    </p>
                  ) : null}
                </td>
                <td>
                  {currentCoin.market_data
                    ?.price_change_percentage_24h_in_currency ? (
                    <p>
                      <NumberFormat
                        displayType={"text"}
                        suffix={"%"}
                        value={currentCoin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(
                          4
                        )}
                      />
                    </p>
                  ) : null}
                </td>
                <td>
                  {currentCoin.market_data
                    ?.price_change_percentage_24h_in_currency ? (
                    <p>
                      <NumberFormat
                        displayType={"text"}
                        suffix={"%"}
                        value={
                          currentCoin.market_data
                            .price_change_percentage_1y_in_currency.usd
                        }
                      />
                    </p>
                  ) : null}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="high-low">
          <div>
            <p>24 Hour high</p>
          </div>
          {currentCoin.market_data ? (
            <div>
              <p>
                <NumberFormat
                  displayType="text"
                  thousandSeparator={true}
                  prefix="$"
                  value={currentCoin.market_data.high_24h.usd}
                />
              </p>
            </div>
          ) : null}
        </div>
        <div className="high-low">
          <div>
            <p>24 Hour low</p>
          </div>
          {currentCoin.market_data ? (
            <div>
              <p>
                <NumberFormat
                  displayType="text"
                  thousandSeparator={true}
                  prefix="$"
                  value={currentCoin.market_data.low_24h.usd}
                />
              </p>
            </div>
          ) : null}
        </div>
        <h3>7d</h3>
        <div className="spark">
          {currentCoin.market_data ? (
            <Sparklines data={currentCoin.market_data.sparkline_7d.price}>
              <SparklinesLine style={{ strokeWidth: 2, stroke: "#336aff" }} />
              <SparklinesBars />
            </Sparklines>
          ) : null}
        </div>
      </div>
      <div className="spark-container"></div>
      <div className="coin-about-container">
        <h1>About</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              currentCoin.description ? currentCoin.description.en : ""
            ),
          }}
        ></p>
      </div>
    </div>
  );
};

export default Coin;
