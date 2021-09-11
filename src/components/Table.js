import React from 'react'
import { Info } from './Info';
import { Title } from './Title';

export const Table = () => {
    const data = {
        currencies: [
          {
            exchangeType: "USD/TRY",
            exchangeFrom: "DOLAR",
            exchangeTo: "TL",
            buy: "8,4430",
            sell: "8,4491",
            diff: "%1,24",
          },
          {
            exchangeType: "EUR/TRY",
            exchangeFrom: "EURO",
            exchangeTo: "TL",
            buy: "9,9897",
            sell: "9,9951",
            diff: "%1,06",
          },
          {
            exchangeType: "GBP/TRY",
            exchangeFrom: "STERLIN",
            exchangeTo: "TL",
            buy: "11,6447",
            sell: "11,6588",
            diff: "%1,11",
          },
        ],
      };
    return (
        <table style={{ border: "1px solid black", width: "100%" }}>
        <thead>
          <tr style={{ border: "1px solid black" }}>
            <Title title="Dövüz Cinsi" />
            <Title title="Alış(TL)" />
            <Title title="Satış(TL)" />
            <Title title="Fark(%)" />
          </tr>
        </thead>
        <tbody>
          {data.currencies.map((data, index) => (
            <Info
              key={index}
              exchangeType={data.exchangeType}
              buy={data.buy}
              sell={data.sell}
              diff={data.diff}
            />
          ))}
        </tbody>
      </table>
    )
}
