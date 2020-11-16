import React from 'react'
import './AllPosting.css'
import PostCard from './PostCard'
import PostCardData from './PostCardData'

function AllPosting() {
    return (
      <>
        <div className="mainContainer2">
          <div className="subContainer2">
            <div className="headerPost">
              <div className="headerContentPost">
                <h5>All Posting</h5>
                <div className="postBtn">
                <button>10</button>
              </div>
              </div>
            </div>
            <div className="postCards mt-2">
                <div className="row gy-4">
                    {
                      PostCardData.map((val,i) =>{
                        return (
                          <PostCard
                            image={val.image}
                            productName={val.productName}
                            price={val.price}
                            userImg={val.userImg}
                            userName={val.userName}
                            userPlace={val.userPlace}
                          />
                        );
                      })
                    }
                </div>
            </div>
          </div>
        </div> <br/>
      </>
    );
}

export default AllPosting
