import { Component } from "react";

class Image extends Component{
    constructor() {
        super();
        this.state = {
            src: null,
        }
    }
    // state = {
    //     src: null,
    // }

    afficherImage = (e) => {
        const src = URL.createObjectURL(e.target.files[0]);
        this.setState({...this.state, src: src});
    }

    render() {
        return (
            <>
                <input onChange={this.afficherImage} type="file" />
                {/* <img src={this.state.src} width={300} /> */}
            </>
        )
    }
}

export default Image;