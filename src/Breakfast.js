import React,{useContext} from "react"
import { allContext } from "./App";

function Breakfast(){
    const data = useContext(allContext);
    return(
        <div className="container">
            {
                data.map(el => {
                    if(el.type === "breakfast"){
                        return (
                            <div className="item" key={el.id}>
                                <div className="item-img"><img src={`${el.img}`} alt="dish"/></div>
                                <div className="item-detail">
                                    <div className="item-name">
                                        <span className="item-name-n">{el.name}</span>
                                        <span className="item-name-price">{el.price}</span>
                                    </div>
                                    <div className="item-desc">{el.desc}</div>
                                </div>
                            </div>
                        )
                    }
                    return null;
                })
            }
        </div>
    )
}

export default Breakfast