import React from 'react'
import MyProfile from './MyProfile'
import SideNav from './SideNav'

function Main() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <SideNav/>
                    </div>
                    <div className="col-md-8">
                        <MyProfile/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main
