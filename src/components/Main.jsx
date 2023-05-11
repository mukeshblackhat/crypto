import React from 'react'
import './Main.css'
const Main = () => {
  return (
    <div className="mainContainer">
        <div className="somePic"></div>
        <div className="card">

            <div className="sendPart flexClass">

                <div>Send</div>
                <div className="dropDown">ETH</div>

            </div>

            <div className="fromPart flexClass colomnClass">

                <div>from </div>
                <div className="flexClass">
                    <div>ETH</div>
                    <div className="spanGrow"></div>

                    <div><span>0 </span> USDT</div>
                    
                    </div>
            </div>
            <div className="toPart flexClass colomnClass">
                <div>To</div>
                <div className="flexClass">
                    <div>ETH</div>
                    <div className="spanGrow"></div>
                    <div><span>0 </span> USDT</div>
                    
                    </div>
            </div>
            <div className="feeSection flexClass ">
                <div>fees</div>
                <div className="spanGrow"></div>

                <div>
                    <span>0 </span>
                    USDT
                </div>
            </div>
            <div className="recieveSection flexClass ">
                <div>Estimated Recieve</div>
                <div className="spanGrow"></div>

                <div>
                    <span>0 </span>
                    USDT
                </div>
            </div>
            <div className="sendAmount">
               <div className="sendButton">Send</div>
            </div>
        </div>
    </div>
  )
}

export default Main