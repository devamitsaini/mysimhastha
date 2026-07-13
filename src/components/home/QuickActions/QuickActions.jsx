import React from "react";
import { Link } from "react-router-dom";

import {
  FaOm,
  FaHotel,
  FaCalendarAlt,
  FaRoute,
  FaMapMarkedAlt,
  FaNewspaper,
  FaAmbulance,
  FaTrain,
} from "react-icons/fa";

import "./QuickActions.css";

const actions = [

{
title:"Mahakal Darshan",
icon:<FaOm />,
link:"/guide/mahakal-darshan"
},

{
title:"Verified Stays",
icon:<FaHotel />,
link:"/stays"
},

{
title:"Bhasma Aarti",
icon:<FaCalendarAlt />,
link:"/guide/bhasma-aarti"
},

{
title:"Trip Planner",
icon:<FaRoute />,
link:"/trip-planner"
},

{
title:"How to Reach",
icon:<FaTrain />,
link:"/guide/how-to-reach-ujjain"
},

{
title:"Live Updates",
icon:<FaNewspaper />,
link:"/news"
},

{
title:"Simhastha 2028",
icon:<FaMapMarkedAlt />,
link:"/simhastha-2028"
},

{
title:"Emergency",
icon:<FaAmbulance />,
link:"/emergency"
}

];

const QuickActions = () => {

return (

<section className="quick-actions">

<div className="container">

<h2>How can we help you today?</h2>

<p>
Quick access to the most important information pilgrims need.
</p>

<div className="actions-grid">

{actions.map((item,index)=>(

<Link
to={item.link}
className="action-card"
key={index}
>

<div className="action-icon">

{item.icon}

</div>

<h3>

{item.title}

</h3>

</Link>

))}

</div>

</div>

</section>

);

};

export default QuickActions;