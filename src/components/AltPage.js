import React from 'react';
import './DashboardMenu.css';
import './AltPage.css';
import { makeStyles, useTheme, withTheme } from '@material-ui/core/styles';
import { FormControl } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';


function AltPage(){

    return (
        <div>
            <div className="dash-top-container">
                <div className="dash-title-section">
                    <div className="dash-title">Documentation</div>
                    <div className="dash-subtitle">v1.0</div>
                </div>
            </div>
            <div className="doc-body">
                <div className="doc-header">Installation</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra velit eleifend lacinia viverra. Mauris massa est, convallis sed consectetur interdum, bibendum a metus. Morbi et aliquet turpis. Sed sed orci et est ultrices facilisis vel vitae ligula. Ut eleifend risus id leo ullamcorper imperdiet. Vestibulum sit amet velit sed magna imperdiet lacinia non vitae nunc. Sed vel est erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus mattis fermentum gravida. Ut nunc arcu, porttitor id malesuada lacinia, commodo dignissim arcu. Aenean quis convallis enim, non tincidunt sapien. Sed feugiat, tortor ut placerat semper, metus nisl blandit libero, eu euismod enim elit non urna. Praesent tempor, nisi et rutrum mattis, leo nunc imperdiet est, a ornare ante dui a sem. Quisque egestas erat augue, nec egestas lacus porttitor nec. Ut vehicula, nulla a vulputate laoreet, orci nibh cursus arcu, nec imperdiet arcu turpis vel magna.</p>
                <div className="doc-header">Getting Started</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra velit eleifend lacinia viverra. Mauris massa est, convallis sed consectetur interdum, bibendum a metus. Morbi et aliquet turpis. Sed sed orci et est ultrices facilisis vel vitae ligula. Ut eleifend risus id leo ullamcorper imperdiet. Vestibulum sit amet velit sed magna imperdiet lacinia non vitae nunc. Sed vel est erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus mattis fermentum gravida. Ut nunc arcu, porttitor id malesuada lacinia, commodo dignissim arcu. Aenean quis convallis enim, non tincidunt sapien. Sed feugiat, tortor ut placerat semper, metus nisl blandit libero, eu euismod enim elit non urna. Praesent tempor, nisi et rutrum mattis, leo nunc imperdiet est, a ornare ante dui a sem. Quisque egestas erat augue, nec egestas lacus porttitor nec. Ut vehicula, nulla a vulputate laoreet, orci nibh cursus arcu, nec imperdiet arcu turpis vel magna.</p>
            </div>
        </div>
    )
}

export default AltPage