import { Component } from "react";
import { data } from "./data";

class afficher extends Component {
    render() {
        return(
            <>
                <ul>
                    {
                        data.map(function(item) {
                            return (
                                <li>{item}</li>
                            )
                        })
                    }
                </ul>
            </>
        )
    }
}

export default afficher 