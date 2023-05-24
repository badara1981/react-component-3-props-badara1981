import React from "react";

const BootstrapCard = props => {
  return (
<div className="card m-5" style={ {width: "18rem"} }>
			<img className="card-img-top" src={ props.image } alt="Bob Dylan playing the guitar"></img>
			<div className="card-body">
				<h5 className="card-title">{ props.cardTitle }</h5>
				<p className="card-text">{ props.cardDescription }</p>
				<a href={props.url} className="btn btn-primary">{props.label }</a>
			</div>
		</div>

);
}

export default BootstrapCard;