import React from "react";
import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

function Single() {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.unsplash.com/photo-1666577837021-6ee2caf26fee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExOXxibzhqUUtUYUUwWXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1664218018556-0bf1297c7653?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div className="info">
            <span>Tom</span>
            <p>Posted 3 days ago</p>
          </div>
          <div className="edit">
            <Link className="link" to={`/write?edit=2`}>
              <span className="edit-icon">
                <AiFillEdit />
              </span>
            </Link>
            <span className="delete-icon">
              <MdDelete />
            </span>
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
          eius.
        </h1>
        <p className='post-details'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
          perspiciatis, molestias dolorem earum, natus quis expedita ad sit
          dolorum obcaecati nobis non est mollitia sequi rerum, eveniet iusto
          quidem magnam inventore unde labore eum accusamus voluptatum quia?
          Blanditiis repudiandae alias magnam mollitia illo perspiciatis laborum
          natus delectus, nulla ullam impedit quisquam, iure consequatur.
          <br/>
          <br/>
          corporis quis eveniet. Nam pariatur eligendi repudiandae quod quae
          deleniti hic vero fugit velit recusandae fuga temporibus nobis rerum
          animi atque odit necessitatibus cumque nisi quasi, sit dolore
          corrupti. Sed non fuga nemo aliquam, quos ab! Possimus cupiditate
          velit autem harum maxime at atque obcaecati quaerat eius tempore
          cumque blanditiis, quas necessitatibus ullam magnam. Consequuntur
          dolore quaerat unde laudantium nostrum, omnis, obcaecati odio quia
          dignissimos adipisci molestiae esse dolorem natus dolores maiores.
          <br/>
          <br/>
          similique possimus, ea deserunt eos! Saepe beatae exercitationem illo
          neque architecto pariatur. Sit nostrum, laboriosam adipisci, aliquid
          eos accusamus tempore distinctio amet doloribus neque iure repudiandae
          quia quod numquam rerum minus maiores harum? Odio dolor explicabo,
          optio magni facilis exercitationem sapiente, molestiae ullam iste a,
          blanditiis nam quisquam nostrum dicta! Ea, vitae ullam accusamus, vel,
          cum deleniti rerum corporis ex consectetur natus eum esse. Dolor
          minima beatae quos, recusandae ea ipsum dolorum cupiditate odio et.
        </p>
      </div>
      <div className="menu">m</div>
    </div>
  );
}

export default Single;
