import React from 'react';
// import Component from 'react';

const Card = ({name,email,id}) =>{    //Or I can also pass props in paranthesis      .{} does destructuring. Read more about it
    // const {name,email,id} = props;
    return(
      <div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-S'>
          <img src={`https://robohash.org/${id}`} width='220' height='220' alt='Robot'/>
          <div>
              {/* <h2>{props.name}</h2>
              <p>{props.email}</p> */}
              <h2>{name}</h2>
              <p>{email}</p>
          </div>
      </div>
    );
}

export default Card;