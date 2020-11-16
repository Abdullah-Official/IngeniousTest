import React from 'react'
import AllPosting from './AllPosting'
import MyProfile from './MyProfile'
import SideNav from './SideNav'

function MainPost() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-lg-4">
                        <SideNav/>
                    </div>
                    <div className="col-md-8 col-lg-8">
                        <AllPosting/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPost
