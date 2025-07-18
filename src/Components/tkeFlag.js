import React from "react";
import './tkeFlag.css'

function TkeFlag( { children } ) {
    return (
        <div className='flag-box'>
            <div className='flag-foreground'>
                { children }
            </div>
            <div className='flag-diagonal-stripe'>
                <div className='flag-triangle-stream'>
                    <div className='flag-triangle'/>
                    <div className='flag-triangle'/>
                    <div className='flag-triangle'/>
                    <div className='flag-triangle'/>
                    <div className='flag-triangle'/>
                    <div className='flag-triangle'/>
                    <div className='flag-triangle'/>
                    <div className='flag-triangle'/>
                    <div className='flag-triangle'/>
                    <div className='flag-triangle'/>
                </div>
            </div>
        </div>
    );
}

export default TkeFlag;