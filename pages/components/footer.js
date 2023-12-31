import Link from 'next/link'
import React from 'react'


const Footer = () => {
    return (
        <footer className="bg-white py-4 mt-auto">
            <div className="container px-5">
                <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div className="col-auto"><div className="small m-0">Copyright &copy; DevDynamo 2023</div></div>
                    <div className="col-auto">
                        <Link className="small" href="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer