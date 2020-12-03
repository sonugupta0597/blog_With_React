import React from 'react'
import { Link } from 'react-router-dom';
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle ,CardImg ,Button
  } from 'reactstrap';
  

function Latest_Article(props) {
    return (


        <div className="latest2">
            <div className="latest-left">
            <h1>
                The Latest
            </h1>
            <hr class="underline"/>
            <div>
                  <Link className="latest-left-card over" style={{textDecoration:"none"}}>

                       <img src="1.jpg" className="latest-left-card-img"/>

                       <div className="latest-left-card-details  link">

                       <h1>This is image </h1>
                       <p>the main body of matter in a manuscript, book, newspaper, etc., as distinguished from notes, appendixes, headings, illustrations, etc. See more.</p>
                       <div class="card-footer">
                    <span class="card-footer-first">Travel</span> <span class="card-footer-secons"> august 21 </span>
                </div>
                       </div>
                       
                  </Link>
                  
                  <Link className="latest-left-card over" style={{textDecoration:"none"}}>

                       <img src="1.jpg" className="latest-left-card-img"/>

                       <div className="latest-left-card-details  link">

                       <h1>This is image </h1>
                       <p>the main body of matter in a manuscript, book, newspaper, etc., as distinguished from notes, appendixes, headings, illustrations, etc. See more.</p>
                       <div class="card-footer">
                    <span class="card-footer-first">Travel</span> <span class="card-footer-secons"> august 21 </span>
                </div>
                       </div>
                       
                  </Link>

                  
                  <Link className="latest-left-card over" style={{textDecoration:"none"}}>

                       <img src="1.jpg" className="latest-left-card-img"/>

                       <div className="latest-left-card-details link">

                       <h1>This is image </h1>
                       <p>the main body of matter in a manuscript, book, newspaper, etc., as distinguished from notes, appendixes, headings, illustrations, etc. See more.</p>
                       <div class="card-footer">
                    <span class="card-footer-first">Travel</span> <span class="card-footer-secons"> august 21 </span>
                </div>
                       </div>
                       
                  </Link>

                  
                  <Link className="latest-left-card over" style={{textDecoration:"none"}}>

                       <img src="1.jpg" className="latest-left-card-img"/>

                       <div className="latest-left-card-details  link">

                       <h1>This is image </h1>
                       <p>the main body of matter in a manuscript, book, newspaper, etc., as distinguished from notes, appendixes, headings, illustrations, etc. See more.</p>
                       <div class="card-footer">
                    <span class="card-footer-first">Travel</span> <span class="card-footer-secons"> august 21 </span>
                </div>
                       </div>
                       
                  </Link>
            </div>

            </div>
            <div className="latest-right">
            <h1>
                   Top Posts
            </h1>
            <hr class="underline"/>
            <Link className="latest-right-card over" style={{textDecoration:"none"}}>

                       <img src="1.jpg" className="latest-right-card-img"/>

                       <div className="latest-right-card-details link">

                       <h1>This is image </h1>
                       <p>the main body of matter in a manuscript, book, newspaper, etc., as distinguished from notes, appendixes, headings, illustrations, etc. See more.</p>
                       <div class="card-footer">
                    <span class="card-footer-first">Travel</span> <span class="card-footer-secons"> august 21 </span>
                </div>
                       </div>
                       
                  </Link>
                  <Link className="latest-right-card over" style={{textDecoration:"none"}}>

                       <img src="2.jpg" className="latest-right-card-img"/>

                       <div className="latest-right-card-details link">

                       <h1>This is image </h1>
                       <p>the main body of matter in a manuscript, book, newspaper, etc., as distinguished from notes, appendixes, headings, illustrations, etc. See more.</p>
                       <div class="card-footer">
                    <span class="card-footer-first">Travel</span> <span class="card-footer-secons"> august 21 </span>
                </div>
                       </div>
                       
                  </Link>
                  
                  <Link className="latest-right-card over" style={{textDecoration:"none"}}>

                       <img src="3.jpg" className="latest-right-card-img"/>

                       <div className="latest-right-card-details link">

                       <h1>This is image </h1>
                       <p>the main body of matter in a manuscript, book, newspaper, etc., as distinguished from notes, appendixes, headings, illustrations, etc. See more.</p>
                       <div class="card-footer">
                    <span class="card-footer-first">Travel</span> <span class="card-footer-secons"> august 21 </span>
                </div>
                       </div>
                       
                  </Link>
            </div>
            


        </div>

    

    )
}

export default Latest_Article;
