import Button from '@restart/ui/esm/Button'
import React from 'react'
import NavbarUser from '../../component/navbar/NavbarUser'
export default function Contact() {
    return (
        <div>
            <NavbarUser/>
            <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-md-auto">
                <h1><b>Facebook</b></h1>
                <Button style={{backgroundColor:"skyblue"}} href="https://www.facebook.com/WAWANUMB">Facebook</Button>
                <h1><b>Instagram</b></h1>
                <Button style={{backgroundColor:"pink"}} href="https://www.instagram.com/wawan_rw24/">Instagram</Button>
                </div>
            </div>
        </div>  
            
        </div>
    )
}
