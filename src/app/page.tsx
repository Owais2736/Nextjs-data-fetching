
'use client'

import { useEffect, useState } from "react";

export default function Home() {
  const API_KEY = "194a0fe3f4ffeae318f3246529ebd3e6";
  const [data, setData] = useState<any>(null)


  useEffect(() => {
    fetch(`http://api.coinlayer.com/live?access_key=${API_KEY}`)
      .then((response) =>
        response.json()
      ).then((convertedJson) => {
        console.log("Json converted data:", convertedJson);
        setData(convertedJson)

      })

  }, [])
  return (
    <>


{/* <div>
<table>
  <th>
    <td>Currency</td>
    <td>Rates</td>
  </th>

  <tr>
 <div><h2>  BTC:</h2></div>
 <div>{data?.rates?.BTC}</div>
  </tr>
</table>
</div> */}


      <div className="w-1/4">


        <div className="flex gap-24">
          <h2>CURRENCY</h2>
          <h2>RATE</h2>
        </div>
        <hr />
        <div className="flex gap-36">
          <div>BTC:</div>
          <div>{data?.rates?.BTC}</div>
        </div>
        <hr />
        <div className="flex gap-36">
          <div>ABC:</div>
          <div>{data?.rates?.ABC}</div>
        </div>

        <hr />
        <div className="flex gap-36">
          <div>ACP:</div>
          <div>{data?.rates?.ACP}</div>
        </div>

        <hr />
        <div className="flex gap-36">
          <div>ACT:</div>
          <div>{data?.rates?.ACT}</div>
        </div>
      </div>

    </>
  );
}
